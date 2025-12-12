import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { IoEyeOutline } from "react-icons/io5";
import { seenNotification } from "../../../../../servises/api/notificationApi";
import toast from "react-hot-toast";

const NotifTable = ({ message, insertDate, id }) => {
  const queryClient = useQueryClient();
  const mutationSeen = useMutation({
    mutationFn: (id) => seenNotification(id),
    onSuccess: (data) => {
      const msg = data?.message;
      toast.success(msg);
      queryClient.invalidateQueries(["getNotification"]);
    },
    onError: (error) => {
      console.log("error===>", error);
      const msg = error?.response?.data?.message;
      toast.error(msg);
    },
  });
  return (
    <div className=" justify-center items-center gap-2 flex w-full  h-[40px] py-2 text-[10px] lg:text-[14px] font[600] text-navy even:bg-[#F7F7F7] odd:bg-[#C8C1ED4D] rounded-[5px] shadow-[0px_1px_10px_0px_rgba(0,0,0,0.25)] ">
      <div
        className="md:flex w-[100px] gap-2 "
        onClick={() => mutationSeen.mutate(id)}
      >
        <IoEyeOutline className="text-dark-purple w-5 h-5 cursor-pointer" />
      </div>

      <div className="w-[67%] grid grid-flow-col auto-cols-fr ">
        <div>{insertDate?.slice(0, 10)}</div>
        <p className="lg:whitespace-nowrap text-right">{message}</p>
      </div>

      <div className="lg:w-[4%] rounded-full h-[35px]"></div>
    </div>
  );
};

export default NotifTable;
