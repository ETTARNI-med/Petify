import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  CheckCircle2,
  PlusCircle,
  ShieldQuestion,
  ThumbsUp,
  XCircle,
} from "lucide-react";

interface Props {
  status: string;
}

export function Status({ status }: Props) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          {status === "cancelled" ? (
            <div className="w-fit">
              <XCircle className="text-red-700 ml-7 w-6 hidden md:block" />
              <p className="text-red-700 ml-3 md:hidden">{status}</p>
            </div>
          ) : status === "confirmed" ? (
            <div className="w-fit">
              <ThumbsUp className="text-blue-700 ml-7 w-6 hidden md:block" />
              <p className="text-blue-700 ml-3 md:hidden">{status}</p>
            </div>
          ) : status === "completed" ? (
            <div className="w-fit">
              <CheckCircle2 className="text-green-700 ml-7 w-6" />
              <p className="text-green-700 ml-3 md:hidden">{status}</p>
            </div>
          ) : status === "open" ? (
            <div className="w-fit">
              <PlusCircle className="text-gray-500 ml-7 w-6 hidden md:block" />
              <p className="text-gray-500 ml-3 md:hidden">{status}</p>
            </div>
          ) : (
            <div className="w-fit">
              <ShieldQuestion className="text-gray-500 ml-7 w-6 hidden md:block" />
              <p className="text-gray-500 ml-3 md:hidden">unknown</p>
            </div>
          )}
        </TooltipTrigger>
        <TooltipContent className="ml-6">
          <p>{status}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
