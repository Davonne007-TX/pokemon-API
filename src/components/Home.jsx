import { Link } from "react-router-dom";
import "./css/Home-TopHeader.css";

export function Home() {
  return (
    <>
      <div className="flex justify-center items-center bg-cover bg-no-repeat bg-center h-screen bg-image font-mono text-4xl">
        <p className="mb-60">Select and Choose Your Pokemon</p>
        <Link
          to="/pokemon"
          className="bg-bright mb-20 text-md p-2 rounded-full"
        >
          Go..!
        </Link>
      </div>
    </>
  );
}
