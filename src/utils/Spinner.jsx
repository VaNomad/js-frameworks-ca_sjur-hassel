import { Triangle } from "react-loader-spinner";

export default function Spinner() {
  return (
    <div className="h-screen flex justify-center items-center text-green-600">
      <Triangle height={200} width={200} />
    </div>
  );
}