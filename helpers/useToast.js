import React from "react";
import { useCallback } from "react";
import toast from "react-hot-toast";
import { MdOutlineHighlightOff, MdReport } from "react-icons/md";
const useToast = () => {
  const callToast = useCallback((status, message, title) => {
    if (status === "success") {
      toast.success(message);
    } else if (status === "warning") {
      toast.error(message, {
        icon: <MdReport className="text-yellow-500" />,
      });
    } else {
      toast.error(message, {
        icon: <MdOutlineHighlightOff className="text-red-500" />,
      });
    }
  }, []);

  return { callToast };
};

export default useToast;
