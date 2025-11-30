import { BsCloudCheck } from "react-icons/bs";
export const DocumentInput = ({ title }: { title: string | undefined }) => {
  return (
    <div className="flex items-center gap-2">
      <span className="text-lg  px-1.5 cursor-pointer truncate">
        {title ?? "Untitled Document"}
      </span>
      <BsCloudCheck />
    </div>
  );
};
