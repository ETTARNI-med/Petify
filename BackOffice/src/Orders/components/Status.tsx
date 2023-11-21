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
            <XCircle className="text-red-700 w-6" />
          ) : status === "confirmed" ? (
            <ThumbsUp className="text-blue-700 w-6" />
          ) : status === "completed" ? (
            <CheckCircle2 className="text-green-700 w-6" />
          ) : (
            <PlusCircle className="text-gray-500 w-6" />
          )}
        </TooltipTrigger>
        <TooltipContent>
          <p>{status}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
