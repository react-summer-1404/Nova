import { Form, Formik } from 'formik';
import React from 'react';
import * as Yup from "yup";
import FormGroup from '../component/FormGroup';
import { FaArrowLeft} from "react-icons/fa";

const validationSchema = Yup.object({
    title: Yup.string().required("وارد کردن عنوان اجباری است"),
    describe: Yup.string().required("وارد کردن توضیحات بیشتر اجباری است")
});

const initialData = {
    title: "",
    describe: ""
}

const CommentForm = ({ initialValues = initialData }) => {
    return (


        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
        >

            <Form className='w-11/12 h-5/6 flex flex-col items-end gap-2 md:gap-4'>
                <p style={{ color: "var(--color-navy)" }} className='font-[600] text-[22px] md:text-[26px] '>ارسال نظر</p>
                <FormGroup
                    label={"عنوان پیام"}
                    name={"title"}
                    inputClass="h-[40px]"
                />
                <FormGroup
                    label={"توضیحات بیشتر"}
                    name={"describe"}
                    inputClass="h-[85px]"
                />
                <h4 className='font-[400] text-[#6D6C80] text-[10px] md:text-[14px]'>نظر شما پس از تایید توسط ادمین ثبت خواهد شد!</h4>
                <button style={{ backgroundColor: "var(--color-golden-yellow)" }} className="border border-black rounded-[50px] shadow-2d-yellow text-[10px] md:text-[14px] p-1 font-semibold flex cursor-pointer w-[25%] md:w-[15%]">
                    <FaArrowLeft className='ml-[6px] mt-[5px]' />
                    <h2 className=' font-[400] text-[10px] md:text-[14px] ml-[10px] text-right text-[#161439]'>ارسال نظر </h2>
                </button>
            </Form>

        </Formik>

    )
}

export default CommentForm