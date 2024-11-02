import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({
    subsets: ["latin"],
    weight: ["600"],
  });

  interface HeaderProps{
    label:string;
  };

  export const Header = ({label,}: HeaderProps) => {
    return(
        <div className="space-y-5 text-center">
        <h1 className={cn(
          "text-2xl font-semibold text-black drop-shadow-md",
           font.className,
        )}>
         SyncSpace
        </h1>
        <p className=" text-sm">
            {label}
        </p>
        </div>
    );

  };