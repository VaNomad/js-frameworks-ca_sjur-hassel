import { Triangle } from "react-loader-spinner";

export default function Spinner() {
  return (
    <div className="h-screen flex justify-center items-center">
      <Triangle height={100} width={100} color="green" />
    </div>
  );
}