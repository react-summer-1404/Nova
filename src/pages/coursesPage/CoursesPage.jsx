import React, { useEffect, useState } from "react";
import Result from "../../components/ui/result/Result";
import SearchSection from "../../components/ui/pagesSearchSection/SearchSection";
import SortingSection from "../../components/section/coursePage/SortingSection";
import ViewMode from "../../components/ui/viewMode/ViewMode";
import CourseProductCard from "../../components/ui/card/CourseProductCard";
import CustomPagination from "../../components/ui/pagination/CustomPagination";
import useToggle from "../../hooks/useToggle";
import FiltersPanel from "../../components/section/coursePage/FiltersPanel";
import NavigationSection from "../../components/ui/navigation/NavigationSection";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getCourses } from "../../servises/api/courses/coursList";
import { Spinner } from "@heroui/react";
import { useDebounce } from "use-debounce";
import { useSearchParams } from "react-router-dom";
import { postDisLike, postLike } from "../../servises/api/Like and Dislike";
import { postAddToFavorite } from "../../servises/api/addToFavortie";
import ModalSection from "../../components/ui/Modal/ModalSection";

const CoursesPage = () => {
  const [isOpen, toggleOpen] = useToggle(false);
  const [searchParam, setSearchParam] = useSearchParams();
  const paramsObject = Object.fromEntries(searchParam.entries());
  const queryClient = useQueryClient();
  const [isCol, setIsCol] = useToggle(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [rowsOfThePage] = useState(12);
  const [searchQuery, setSearchQuery] = useState(paramsObject.Query || "");
  const [debounceSearch] = useDebounce(searchQuery, 500);

  useEffect(() => {
    handleChange("Query", debounceSearch || "");
  }, [debounceSearch]);

  const handleChange = (key, value) => {
    setSearchParam(
      (prev) => {
        if (value) {
          prev.set(key, value);
        } else {
          prev.delete(key);
        }
        return prev;
      },
      { replace: true }
    );
  };
  const apiParams = {
    ...paramsObject,
    TechCount: 1,
    PageNumber: pageNumber,
    RowsOfPage: rowsOfThePage,
  };
  // mutation
  const queryKey = ["courses", apiParams];

  const likeMutation = useMutation({
    mutationFn: postLike,
    onMutate: async (courseId) => {
      await queryClient.cancelQueries({ queryKey });

      const previousData = queryClient.getQueryData(queryKey);

      queryClient.setQueryData(queryKey, (old) => ({
        ...old,
        courseFilterDtos: old?.courseFilterDtos?.map((course) =>
          course.courseId === courseId
            ? {
                ...course,
                likeCount: course.likeCount + 1,
                userIsLiked: true,
                currentUserDissLike: false,
              }
            : course
        ),
      }));

      return { previousData, queryKey };
    },
    onError: (error, _courseId, context) => {
      queryClient.setQueryData(context.queryKey, context.previousData);
      console.log(error);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey });
    },
  });

  const disLikeMutation = useMutation({
    mutationFn: postDisLike,
    onMutate: async (courseId) => {
      await queryClient.cancelQueries({ queryKey });
      const previousData = queryClient.getQueryData(queryKey);

      queryClient.setQueryData(queryKey, (old) => ({
        ...old,
        courseFilterDtos: old?.courseFilterDtos?.map((course) =>
          course.courseId === courseId
            ? {
                ...course,
                dissLikeCount: course.dissLikeCount + 1,
                currentUserDissLike: true,
                userIsLiked: false,
              }
            : course
        ),
      }));

      return { previousData, queryKey };
    },
    onError: (error, courseId, context) => {
      queryClient.setQueryData(context.queryKey, context.previousData);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey });
    },
  });

  const addToFavoriteMutation = useMutation({
    mutationFn: postAddToFavorite,
    onSuccess: () => {},
  });
  // Query
  const { data, isError, isLoading } = useQuery({
    queryKey: ["courses", apiParams],
    queryFn: () => getCourses(apiParams),
  });

  const currentItems = data?.courseFilterDtos || [];

  return (
    <div className="flex flex-col gap-8  w-screen  justify-center ">
      <NavigationSection title={"همه دوره ها"} />
      <div className="md:w-[97%] flex justify-between gap-5 flex-col-reverse md:flex-row md:items-stretch  items-center ">
        <div className="flex flex-col gap-5 items-end  w-full">
          <div className="flex gap-4 justify-between items-center w-[70%] md:w-[97%] md:mr-0 mr-9">
            <div className="flex gap-2 ">
              <ViewMode isCol={isCol} setIsCol={setIsCol} />
              <SortingSection
                paramsObject={paramsObject}
                onChangeParams={handleChange}
              />
            </div>
            <Result currentItems={currentItems} totalCount={data?.totalCount} />
          </div>

          <div
            className={`flex flex-wrap gap-y-5 gap-2 items-center  ${
              isCol ? "flex-col w-full items-end" : " justify-evenly "
            }`}
          >
            {isLoading && (
              <div className="flex items-end min-h-[50vh]  min-w-[80vh] ">
                <Spinner
                  size="lg"
                  labelColor="primary"
                  label="درحال بارگزاری محصولاتیم"
                  variant="wave"
                />
              </div>
            )}

            {isError && (
              <h2 className="text-red-500 text-left text-2xl font-semibold flex items-end min-h-[50vh]  min-w-[100vh] ">
                مشکلی در دریافت اطلاعات پیش آمد. لطفاً دوباره تلاش کنید.
              </h2>
            )}
            {!isLoading && !isError && currentItems?.length === 0 && (
              <h2 className="text-[#6D6C80] text-left text-2xl font-semibold flex items-end min-h-[50vh]  min-w-[100vh]">
                محصول یافت نشد
              </h2>
            )}

            {!isLoading &&
              !isError &&
              currentItems?.map((product) => (
                <CourseProductCard
                  key={product.courseId}
                  product={product}
                  isCol={isCol}
                  likeMutation={likeMutation}
                  disLikeMutation={disLikeMutation}
                  addToFavoriteMutation={addToFavoriteMutation}
                />
              ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <SearchSection Query={searchQuery} setQuery={setSearchQuery} />

          <div className="hidden md:block">
            <FiltersPanel
              paramsObject={paramsObject}
              onChangeParams={handleChange}
            />
          </div>
          <div className="fixed z-50 right-4 bottom-8 md:hidden block">
            <ModalSection
            
              content={
              <div className="flex-center flex-col  gap-5">
                  <FiltersPanel
                  paramsObject={paramsObject}
                  onChangeParams={handleChange}

                />
                <button onClick={()=>toggleOpen()} className="rounded-xl bg-dark-purple text-white w-1/2 h-[35px] cursor-pointer">اعمال فیلتر</button>
              </div>
              }
              StyleModal={" rounded-3xl w-[70px] h-[70px] bg-[#5751E1]"}
              isOpen={isOpen}
              onClose={toggleOpen}
              onOpen={toggleOpen}
            />
          </div>
        </div>
      </div>
      <div className="flex-center p-8">
        <CustomPagination
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
          RowsOfPage={rowsOfThePage}
          totalCount={data?.totalCount}
        />
      </div>
    </div>
  );
};

export default CoursesPage;
