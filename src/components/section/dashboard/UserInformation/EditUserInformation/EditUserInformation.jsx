import { Form, Formik } from "formik";
import React from "react";
// import editIcon from "../../../../../assets/icons/userEdit.svg"
import { TbUserEdit } from "react-icons/tb";
import FormField from "../../../../../features/auth/componenets/authForm/FormField";

const EditUserInformation = () => {
  return (
    <div className="flex flex-col w-full "  style={{ direction: "rtl" }}>
      <div className="flex gap-4  w-[300px]">
        <div>ویرایش اطلاعات کاربری</div>
        <TbUserEdit className="course-info-card-icon course-info-card rounded-[10px]" />
      </div>
      <div className=" flex gap-4  ">
        <div className="flex w-1/2  justify-between">
          <Formik>
            <Form >
              <div className="flex gap-10  w-fit ">
                <div className="flex flex-col w-[200px] gap-5 ">
                  <FormField
                    type={"email"}
                    name={"email"}
                    id={"email"}
                    label={"ایمیل"}
                  />
                  <FormField
                    type={"email"}
                    name={"email"}
                    id={"email"}
                    label={"ایمیل"}
                  />
                  <FormField
                    type={"email"}
                    name={"email"}
                    id={"email"}
                    label={"ایمیل"}
                  />
                  <FormField
                    type={"email"}
                    name={"email"}
                    id={"email"}
                    label={"ایمیل"}
                  />
                </div>
                <div className="flex flex-col w-[200px]  gap-4">
                  <FormField
                    type={"email"}
                    name={"email"}
                    id={"email"}
                    label={"ایمیل"}
                  />
                  <FormField
                    type={"email"}
                    name={"email"}
                    id={"email"}
                    label={"ایمیل"}
                  />
                  <FormField
                    type={"email"}
                    name={"email"}
                    id={"email"}
                    label={"ایمیل"}
                  />
                  <FormField
                    type={"email"}
                    name={"email"}
                    id={"email"}
                    label={"ایمیل"}
                  />
                </div>
              </div>
            </Form>
          </Formik>
        </div>
        <div>prof</div>
      </div>
    </div>
  );
};

export default EditUserInformation;
