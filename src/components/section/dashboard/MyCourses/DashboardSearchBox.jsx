import {Input} from "@heroui/react";
import { CiSearch } from "react-icons/ci";

export default function DashboardSearchBox({placeholder}) {
  return (
    <div className="w-[340px] h-[280px] shadow-lg text-right">
      <Input
        isClearable
        classNames={{
          label: "text-black/50 dark:text-white/90",
          input: [
            "bg-transparent",
            "text-black/90 dark:text-white/90",
            "placeholder:text-default-700/50 dark:placeholder:text-white/60",
          ],
          innerWrapper: "bg-transparent",
          inputWrapper: [
            "shadow-sm",
            "bg-default-200/50",
            "dark:bg-default/60",
            "backdrop-blur-xl",
            "backdrop-saturate-200",
            "hover:bg-default-200/70",
            "dark:hover:bg-default/70",
            "group-data-[focus=true]:bg-default-200/50",
            "dark:group-data-[focus=true]:bg-default/60",
            "cursor-text!",
          ],
        }}
        
        placeholder={placeholder}
        radius="lg"
        startContent={
          <CiSearch className=" w-5 h-5 text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none shrink-0" />
        }
      />
    </div>
  );
}
