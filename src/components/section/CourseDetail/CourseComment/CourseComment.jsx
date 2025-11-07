import React from 'react'
import CommentForm from './Form/CommentForm';
import UserComment from './UserComment';
import { useParams } from 'react-router-dom';
import { useQuery} from '@tanstack/react-query';
import { getCourseDetailComment } from '../../../../servises/api/coursesDetail/getComment';
import {useMutation, useQueryClient } from '@tanstack/react-query';
import { PostCommentLike } from '../../../../servises/api/coursesDetail/PostCommentLike';
import { PostCommentDisLike } from '../../../../servises/api/coursesDetail/PostCommentDisLike';
const CourseComment = ({ teacherName, imageAddress}) => {
    const { id } = useParams();
    const { data } = useQuery({
        queryKey: ['comment', id],
        queryFn: () => getCourseDetailComment(id),
    });
    console.log("داده", data)
    // console.log("id:", CourseId)
    const queryClient = useQueryClient();
    const queryKey = ["comment",id]
    const likeMutation = useMutation({
        mutationFn : PostCommentLike,
        onMutate : async(CourseCommandId) => {
            await queryClient.cancelQueries({ queryKey });

            const previousData = queryClient.getQueryData(queryKey);
            queryClient.setQueriesData(queryKey,(old) => 
            old.map((comment)=> 
                comment.comment === CourseCommandId ? {
                    ...comment,
                    likeCount : comment.likeCount +1,
                    userLiked : true,
                    currentUserIsDissLike : false,
                    disslikeCount : comment.currentUserIsDissLike ? comment.disslikeCount -1 : comment.disslikeCount,
                }
                : comment
            )
        );
            return { previousData, queryKey };
        },
        onError : (error, _CourseCommandId, context) => {
            queryClient.setQueriesData(context.queryKey, context.previousData);
            console.error(error)
        },
        onSettled : () => {
            queryClient.invalidateQueries({queryKey});
        },       
    })
    const disLikeMutation = useMutation({
        mutationFn : PostCommentDisLike,
        onMutate : async(CourseCommandId) => {
            await queryClient.cancelQueries({ queryKey });

            const previousData = queryClient.getQueryData(queryKey);
            queryClient.setQueriesData(queryKey,(old) => 
            old.map((comment)=> 
                comment.CourseCommandId == CourseCommandId ? {
                    ...comment,
                    disslikeCount : comment.disslikeCount +1,
                    currentUserIsLike : false,
                    currentUserIsDissLike : true,
                    likeCount : comment.currentUserIsLike ? comment.likeCount -1 : comment.likeCount,
                }
                : comment
            )
        );
            return { previousData, queryKey };
        },
        onError : (error, _CourseCommandId, context) => {
            queryClient.setQueriesData(context.queryKey, context.previousData);
            console.error(error)
        },
        onSettled : () => {
            queryClient.invalidateQueries({queryKey});
        },
        onSuccess: ()=> {
            console.log("لایک موفق بود")
        }
    })
    return (
        <div className=' border-[#DFDFDF] flex justify-center items-center'>
            <div className=' flex flex-col items-end gap-5'>
                <div className='w-full h-[140px] flex items-center gap-4 bg-[#F7F7FA] rounded-[10px]'>
                    <div className='flex flex-col items-end mr-[10px]'>
                        <h3 className='font-[400] text-[12px] md:text-[16px] text-[#1C1A4A]'>نویسنده</h3>
                        <h4 className='font-[500] text-[18px] md:text-[22px] text-[#1C1A4A]'>{teacherName}</h4>
                        <h2 className=' text-right font-[400] text-[9px] md:text-[14px]'>مهندس حسین نوری کادیجانی دارای مدرک کارشناسی مهندسی کامپیوتر – نرم‌افزار از دانشگاه تربیت دبیر شهید رجایی هستند. ایشان شش سال سابقه برنامه‌نویسی اندروید دارند و تاکنون برنامه‌های موفق و باکیفیتی را در مارکت‌های مطرح ایرانی منتشر کرده‌اند و پیوسته به دنبال یادگیری و کسب دانش بیشتر در این زمینه هستند.</h2>
                    </div>
                    <img src={imageAddress} className='lg:w-[20%] w-[75%] mr-[25px]' />
                </div>
                <p className='font-[600] text-[18px] md:text-[22px]'>نظر </p>
                {data?.map(item =>
                    <UserComment
                        key={item.id}
                        insertDate={item.insertDate.slice(0, 10)}
                        author={item.author}
                        disslikeCount={item.disslikeCount}
                        likeCount={item.likeCount}
                        describe={item.describe}
                        title={item.title}
                        pictureAddress={item.pictureAddress}
                        id={item.id}
                        CourseId={id}
                        likeMutation={likeMutation}
                        disLikeMutation= {disLikeMutation}
                        CourseCommandId={item.CourseCommandId}
                    />
                )}
                

                <div className=' w-full h-[270px] md:h-[390px] bg-[#F7F7FA] rounded-[10px] flex justify-center items-center'>
                    <CommentForm/>
                </div>
            </div>
        </div>
    );
};

export default CourseComment