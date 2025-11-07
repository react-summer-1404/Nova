import React from 'react'

const PostReply = () => {
    const validationSchema = Yup.object({
        title: Yup.string().required("وارد کردن عنوان اجباری است"),
        describe: Yup.string().required("وارد کردن توضیحات بیشتر اجباری است")
    });
    
    const initialData = {
        title: "",
        describe: ""
    }
    return (
        
    )
}

export default PostReply