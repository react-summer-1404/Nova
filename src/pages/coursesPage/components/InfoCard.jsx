import "../../../assets/styles/global.css"
const InfoCard = ({ title, children }) => {
  return (
    <div
      style={{ backgroundColor: "var(--color-bg-light)" }}
      className=" w-[310px] h-[343px] rounded-[10px]  flex-center"
    >
      <div className=" w-4/5 h-4/5 flex flex-col items-end  gap-5 ">
        <h2 className="font-semibold text-xl">{title}</h2>
        <div className=" overflow-hidden ">
          <div className="max-h-[210px]">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
