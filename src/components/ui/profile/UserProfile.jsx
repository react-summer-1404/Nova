import AvatarComponent from "../Avatar/Avatar";
import { Accordion, AccordionItem } from "@heroui/accordion";
import { Button, Checkbox } from "@heroui/react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  getMultiAccount,
  postMultiAccount,
} from "../../../servises/api/accountApi";
import ModalSection from "../Modal/ModalSection";
import useToggle from "../../../hooks/useToggle";
import { ErrorMessage, Field, Formik } from "formik";
import FormGroup from "../../section/CourseDetail/CourseComment/component/FormGroup";
import { Form } from "react-router";
import { Input } from "@heroui/input";
import PasswordField from "../../../features/auth/componenets/authForm/PasswordField";
import { useState } from "react";
import toast from "react-hot-toast";
import YellowButton from "../button/YellowButton";
const UserProfile = ({ imageUrl, userName, fName }) => {
  const displayName = fName || userName || "کاربر گرامی";
  const [isViewModalOpen, toggleViewModal] = useToggle(false);
  const [isSelected, setIsSelected] = useState(false);
  const { data } = useQuery({
    queryKey: ["getUserAccount"],
    queryFn: getMultiAccount,
  });
  const queryClient = useQueryClient();
  console.log("all data", data);
  const mutationCreateAccount = useMutation({
    mutationFn: () => postMultiAccount(apiData),
    onSuccess: (data) => {
      const msg = data?.message;
      toast.success(msg);
      queryClient.invalidateQueries(["getUserAccount"]);
    },
    onError: (error) => {
      const msg = error?.response?.data?.message;
      toast.error(msg);
      console.log("error=======>", error);
    },
  });
  return (
    <div className="flex-col-center gap-4  ">
      <AvatarComponent src={imageUrl} size="lg" />
      <div className="w-[80px] flex-col-center text-white text-lg overflow-ellipsis text-nowrap">
        <span>خوش آمدی</span>
        <span>{displayName}</span>
      </div>
      <div className=" w-full">
        <Accordion>
          <AccordionItem
            style={{ direction: "rtl" }}
            key="1"
            title="حساب های کاربری"
          >
            <div className="flex justify-start items-start flex-col border h-fit gap-5">
              <ModalSection
                StyleModal={"h-[30px] bg-transparent"}
                ButtonText={"+"}
                isOpen={isViewModalOpen}
                onClose={toggleViewModal}
                onOpen={toggleViewModal}
                content={
                  <>
                    <Formik
                      initialValues={{
                        phoneOrGmail: "",
                        password: "",
                        rememberMe: "",
                      }}
                      onSubmit={(values) => {
                        mutationCreateAccount.mutate(values);
                      }}
                    >
                      <Form className="flex flex-col gap-4" dir="rtl">
                        <div className=" flex flex-col">
                          <Input
                            variant="bordered"
                            color="default"
                            label="ایمیل"
                            type="email"
                            autoComplete="none"
                          />
                        </div>
                        <div className=" flex flex-col">
                          <PasswordField
                            name="password"
                            label="رمز عبور جدید"
                            autoComplete="new-password"
                          />
                          <ErrorMessage
                            name="rememberMe"
                            component="div"
                            className="text-red-500 text-sm mt-1"
                          />
                        </div>
                        <Checkbox
                          isSelected={isSelected}
                          onValueChange={setIsSelected}
                        >
                          مرا به خاطر بسپار
                        </Checkbox>
                        <YellowButton
                          height={"35px"}
                          text={"ذخیره"}
                          type={"submit"}
                        />
                      </Form>
                    </Formik>
                  </>
                }
              />
              {data?.accounts?.map((item) => {
                return (
                  <div key={item.id} className="mr-2 flex gap-4 text-white">
                    <AvatarComponent
                      src={item.currentPictureAddress || "/default.png"}
                      size="sm"
                    />
                    <span>{item.fName || "کاربر بدون نام"}</span>
                    <div>{item.id}</div>
                  </div>
                );
              })}
            </div>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default UserProfile;
