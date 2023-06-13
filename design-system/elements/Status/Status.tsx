import { IoHappyOutline, IoHelpOutline, IoSkullOutline } from "react-icons/io5";

export const Status = ({ status }: { status: string }) => {
  return (
    <span className="text-xl text-white">
      {status === "Dead" ? (
        <IoSkullOutline title="Is dead" className="text-xl text-white" />
      ) : status == "Alive" ? (
        <IoHappyOutline />
      ) : (
        <IoHelpOutline />
      )}
    </span>
  );
};
