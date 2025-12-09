import React from "react";
import { useSearchParams } from "react-router-dom";
import NavigationSection from "../../components/ui/navigation/NavigationSection";
import TopSection from "../../components/section/CompareCourse/topSection";
import { AiFillAccountBook, AiFillAlert } from "react-icons/ai";
import pic from "../../assets/images/pic.svg"
const CompareCoursePage = () => {
  const [searchParams] = useSearchParams();
  const options = [
    { name: "تاریخ", content: "22-02-2205", icon: <AiFillAlert /> },
    { name: "تاریخ", content: "22-02-2205", icon: <AiFillAlert /> },
    { name: "تاریخ", content: "22-02-2205", icon: <AiFillAlert /> },
    { name: "تاریخ", content: "22-02-2205", icon: <AiFillAlert /> },
    { name: "تاریخ", content: "22-02-2205", icon: <AiFillAlert /> },
    { name: "تاریخ", content: "22-02-2205", icon: <AiFillAlert /> },
    { name: "تاریخ", content: "22-02-2205", icon: <AiFillAlert /> },
  ];
  const courseIds = searchParams.getAll("courseId");
  console.log("courseIds", courseIds);
  return (
    <div className="flex flex-col   w-screen  justify-center ">
      <NavigationSection title={"مقایسه دو دوره"} />
        <TopSection />
      <div className="flex flex-col gap-5 p-8">
        <div className="flex">
          <div className="border flex-center flex-col relative h-[800px]">
          <div className="w-[350px] h-[200px] border absolute top-2 ">
              <img src={pic} />
            </div>
            <div className="bg-light-purple w-[500px] h-[90%] flex-center">
              <div className="flex flex-col  gap-8 w-[90%]">
              <h2>titlt</h2>
              <div className="flex flex-col text-dark-purple gap-8 border">
                {options.map((option) => {
                  return (
                    <div className="flex justify-between">
                      <p>{option.content}</p>
                      <div className="flex gap-2 items-center">
                        <span>{option.name}</span>
                        {option.icon}
                      </div>
                    </div>
                  );
                })}
              </div>
              </div>
              
            </div>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default CompareCoursePage;
