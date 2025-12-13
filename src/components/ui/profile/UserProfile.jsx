import AvatarComponent from "../Avatar/Avatar";
import { Accordion, AccordionItem } from "@heroui/accordion";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  activeMultiAccount,
  deleteMultiAccount,
  getMultiAccount,
  postMultiAccount,
} from "../../../servises/api/accountApi";
import ModalSection from "../Modal/ModalSection";
import useToggle from "../../../hooks/useToggle";
import { Field, Formik, ErrorMessage } from "formik";
import { Form } from "react-router";
import { useState } from "react";
import toast from "react-hot-toast";
import { setToken } from "../../../hooks/localStorage";
import { Button, Input } from "@heroui/react";
import { HiOutlineTrash } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { TiPlus } from "react-icons/ti";
import InputComponent from "../Input/InputComponent";
const UserProfile = ({ imageUrl, userName, fName }) => {
  const displayName = fName || userName || "کاربر گرامی";
  const [isViewModalOpen, toggleViewModal] = useToggle(false);
  const [isDeleteModalOpen, toggleDeleteModal, setIsDeleteModalOpen] =
    useToggle(false);
  const [selectedDeleteId, setSelectedDeleteId] = useState(null);

  const navigate = useNavigate();
  const { data } = useQuery({
    queryKey: ["getUserAccount"],
    queryFn: getMultiAccount,
  });
  const queryClient = useQueryClient();

  const mutationCreateAccount = useMutation({
    mutationFn: (values) => postMultiAccount(values),
    onSuccess: (data) => {
      toast.success(data?.message || "حساب کاربری با موفقیت ایجاد شد");

      const newToken = data?.token;
      if (newToken) {
        setToken(newToken);
        console.log("توکن جدید:", newToken);
      }

      queryClient.invalidateQueries(["getUserAccount"]);
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message || "خطا در ایجاد حساب");
    },
  });
  const mutationDeleteAccount = useMutation({
    mutationFn: (id) => deleteMultiAccount(id),
    onSuccess: (data) => {
      toast.success(data?.message || "حساب کاربری با موفقیت حذف شد");

      const newToken = data?.token;
      if (newToken) {
        setToken(newToken);
        console.log("توکن جدید:", newToken);
      }

      queryClient.invalidateQueries(["getUserAccount"]);
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message || "خطا در حذف حساب");
    },
  });
  const mutationActiveAccount = useMutation({
    mutationFn: (id) => activeMultiAccount(id),
    onSuccess: (data) => {
      toast.success(data?.message);
      const newToken = data?.token;

      if (newToken) {
        setToken(newToken);
        console.log("توکن جدید:", newToken);
        navigate("/");
      }

      queryClient.invalidateQueries(["getUserAccount"]);
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message || "مشکلی رخ داد");
      console.log("error=========>", error);
    },
  });

  return (
    <div className="flex-col-center gap-4">
      <AvatarComponent src={imageUrl} size="lg" />
      <div className="w-[80px] flex-col-center text-white text-lg overflow-ellipsis text-nowrap">
        <span>خوش آمدی</span>
        <span>{displayName}</span>
      </div>

      <div className="w-[90%]">
        <Accordion>
          <AccordionItem
            style={{ direction: "rtl" }}
            key="1"
            title={<span className="text-white">حساب های کاربری</span>}
          >
            <div className="flex flex-col  h-fit gap-5 p-4">
              <ModalSection
                StyleModal={"h-[30px] bg-transparent "}
                Icon={
                  <TiPlus
                    className="text-white mb-1 cursor-pointer"
                    size={20}
                    stroke="4"
                  />
                }
                isOpen={isViewModalOpen}
                onClose={toggleViewModal}
                onOpen={toggleViewModal}
                content={
                  <Formik
                    initialValues={{
                      phoneOrGmail: "",
                      password: "",
                      rememberMe: false,
                    }}
                    onSubmit={(values, { resetForm }) => {
                      mutationCreateAccount.mutate(values);
                      resetForm();
                    }}
                  >
                    {({ handleSubmit, values, handleChange }) => (
                      <Form
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-3"
                        dir="rtl"
                      >
                        <div className="flex flex-col">
                          <InputComponent 
                            id="phoneOrGmail"
                            name={"phoneOrGmail"}
                            type={"email"}
                            value={values.phoneOrGmail}
                            onChange={handleChange}
                            className="p-2 rounded border"
                            label={"ایمیل"}
                            placeholder={"ایمیل خود را وارد کنید"}
                          />
                        </div>

                        <div className="flex flex-col">
                          {/* <label htmlFor="password" className="text-white mb-1">
                            رمز عبور
                          </label> */}
                          {/* <input
                            id="password"
                            name="password"
                            type="password"
                            value={values.password}
                            onChange={handleChange}
                            className="p-2 rounded border"
                            placeholder="رمز عبور جدید"
                          /> */}
                          <InputComponent 
                            id="password"
                            name={"password"}
                            type={"password"}
                            value={values.password}
                            onChange={handleChange}
                            className="p-2 rounded border"
                            label={"پسورد"}
                            placeholder={"رمز عبور جدید"}
                          />
                        </div>

                        <div className="flex items-center gap-2">
                          <input
                            id="rememberMe"
                            name="rememberMe"
                            type="checkbox"
                            checked={values.rememberMe}
                            onChange={handleChange}
                          />
                          <label htmlFor="rememberMe" className="text-white">
                            مرا به خاطر بسپار
                          </label>
                        </div>

                        <button
                          type="submit"
                          className="bg-yellow-400 text-black px-4 py-2 rounded mt-2 w-fit"
                        >
                          ذخیره
                        </button>
                      </Form>
                    )}
                  </Formik>
                }
              />

              {data?.accounts?.map((item) => (
                <div key={item.id} className="flex  items-center text-white ">
                  <div
                    className="flex gap-4 items-center "
                    onClick={() => mutationActiveAccount.mutate(item.id)}
                  >
                    <AvatarComponent
                      src={item.currentPictureAddress || "/default.png"}
                      size="sm"
                    />
                    <div className="flex gap-1">
                      <span>{item.fName || "کاربر بدون نام"}</span>
                      <span>{item.lName}</span>
                    </div>
                  </div>
                  <ModalSection
                    StyleModal={"h-fit bg-transparent"}
                    Icon={
                      <HiOutlineTrash className="text-white mb-1 cursor-pointer" />
                    }
                    isOpen={isDeleteModalOpen}
                    onClose={toggleDeleteModal}
                    onOpen={() => {
                      setSelectedDeleteId(item.id);
                      toggleDeleteModal();
                    }}
                    content={
                      <div className="flex-col-center gap-5">
                        <p className="text-navy">
                          ایا از حذف این حساب اطمینن دارید؟
                        </p>
                        <div className="flex w-full justify-evenly">
                          <Button
                            className="w-[70px] h-[35px] bg-gray-300 text-gray-800 font-medium rounded-md hover:bg-gray-400 transition-all duration-200"
                            onPress={() => setIsDeleteModalOpen(false)}
                          >
                            لغو
                          </Button>

                          <Button
                            className="w-[70px] h-[35px] bg-red-600 text-white"
                            onPress={() => {
                              console.log("selected id", selectedDeleteId);

                              if (selectedDeleteId === data.activeId) {
                                toast.error("نمی‌توانید حساب فعال را حذف کنید");
                                return;
                              }

                              mutationDeleteAccount.mutate(selectedDeleteId);
                            }}
                          >
                            حذف
                          </Button>
                        </div>
                      </div>
                    }
                  />
                </div>
              ))}
            </div>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default UserProfile;
