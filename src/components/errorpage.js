import { Link, useRouteError } from "react-router-dom";
import "../index.css";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="h-screen bg-gray-200 flex flex-col text-center justify-center items-center">
      <h1 className="font-bold text-lg text-gray-800">Oops!</h1>
      <p className="italic">Sorry, an unexpected error has occurred.</p>
      <p className="text-lg">
        <i>{error.statusText || error.message}</i>
      </p>
      <div className="p-4 text-gray-900 italic font-bold cursor-pointer mt-8">
        <Link to="/">--{">"}Take me to Fireworks home</Link>
      </div>
    </div>
  );
}
