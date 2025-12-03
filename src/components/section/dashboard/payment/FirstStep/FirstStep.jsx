import React from "react";
import { YellowButton } from "../../../../ui";
import { MdOutlineCancel } from "react-icons/md";
import { FiArrowLeft } from "react-icons/fi";
import { Link, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getCourseDetail } from "../../../../../servises/api/coursesDetail/getDetail";
import { payStep1 } from "../../../../../servises/api/payment";
import toast from "react-hot-toast";
import { Spinner } from "@heroui/spinner";

const FirstStep = () => {
  const { CourseId: courseId } = useParams();
const navigate =useNavigate()
  const [searchParams] =useSearchParams()

  const Authority = searchParams.get("Authority");
  const { data, isLoading } = useQuery({
    queryKey: ["FirstStepPaymentCourses", courseId],
    queryFn: () => getCourseDetail(courseId),
    enabled: !!courseId,
  });



 
  // console.log("CourseId:", courseId);
  // console.log("reservedId:", reservedId);
  
  if (isLoading) return<Spinner
  size="lg"
  labelColor="primary"
  label="درحال بارگزاری "
  variant="wave"
/>;

  return (
    <div className="w-screen flex">
      <div className=" w-3/4 flex-center ">
        <div className="p-10 w-[60%] flex flex-col gap-5  shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
          <h2 className="font-bold text-xl">اطلاعات دوره</h2>
          <div className="text-text-gray">
            <div className="flex justify-between border-b border-[hsl(0,0%,90%)] p-5">
              <h3>{data?.title}</h3>
              <h3>:نام دوره</h3>
            </div>
            <div className="flex justify-between border-b border-[#e6e6e6]  p-5">
              <h3>{data?.teacherName}</h3>
              <h3>:نام استاد</h3>
            </div>
            <div className="flex justify-between border-b border-[#e6e6e6] p-5">
              <h3>{data?.startTime?.slice(0, 10)}</h3>
              <h3>: تاریخ شروع دوره</h3>
            </div>
            <div className="flex justify-between border-b border-[#e6e6e6]  p-5">
              <div className="flex gap-2">
                <h3>هزار تومان</h3>
                <h3 className="text-green-500">{data?.cost}</h3>
              </div>
              <h3>:مبلغ قابل پرداخت</h3>
            </div>
          </div>

          <div className="flex-center gap-6 ">
            <YellowButton
              bgColor={"var(--color-border-gray)"}
              height={"35px"}
              text={"لغو"}
              icon={<MdOutlineCancel size={20} />}
              onClick={() => {
                navigate("/dashboard/reservedcourses");
              }}
            />
            <YellowButton
              height={"35px"}
              text={"پرداخت"}
              icon={<FiArrowLeft size={20} />}
              onClick={() => payMutation.mutate(reservedId)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstStep;
