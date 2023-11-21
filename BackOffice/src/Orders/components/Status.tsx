import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { CheckCircle2, PlusCircle, ThumbsUp, XCircle } from "lucide-react";

interface Props {
  status: string;
}

export function Status({ status }: Props) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          {status === "cancelled" ? (
            <>
              <XCircle className="text-red-700 ml-7 w-6 hidden md:block" />
              <p className="text-red-700 ml-3 md:hidden">{status}</p>
            </>
          ) : status === "confirmed" ? (
            <>
              <ThumbsUp className="text-blue-700 ml-7 w-6 hidden md:block" />
              <p className="text-blue-700 ml-3 md:hidden">{status}</p>
            </>
          ) : status === "completed" ? (
            <>
              <CheckCircle2 className="text-green-700 ml-7 w-6 hidden md:block" />
              <p className="text-green-700 ml-3 md:hidden">{status}</p>
            </>
          ) : (
            <>
              <PlusCircle className="text-gray-500 ml-7 w-6 hidden md:block" />
              <p className="text-gray-500 ml-3 md:hidden">{status}</p>
            </>
          )}
        </TooltipTrigger>
        <TooltipContent>
          <p>{status}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
