import { Link } from "react-router-dom";

const AppBar = () => {
  return (
    <div className="flex justify-between px-10 border-b py-3">
      <Link to={"/blogs"}>
        <div className="sm:text-xl sm:mt-1">Medium</div>
      </Link>

      <div className="flex gap-2">
        <Link to={"/publish"}>
          <button
            type="button"
            className="text-white bg-green-600 box-border border border-transparent hover:bg-success-strong focus:ring-4 focus:ring-success-medium shadow-xs font-medium leading-5 rounded-full text-sm px-3 py-2 focus:outline-none"
          >
            Publish
          </button>
        </Link>
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200">
          <span className="font-medium text-sm sm:text-xl">U</span>
        </div>
      </div>
    </div>
  );
};

export default AppBar;
