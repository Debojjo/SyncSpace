import {  CheckCircledIcon } from "@radix-ui/react-icons";

interface FormSuccessProps {
  message?: string;
}

export const FormSuccess = ({
  message,
}: FormSuccessProps) => {
  if (!message) return null;

  return (
    <div className="bg-lime-500/35 p-3 rounded-lg flex items-center gap-x-2 text-sm text-emerald-950">
      <CheckCircledIcon className="h-4 w-4" />
      <p>{message}</p>
    </div>
  );
};