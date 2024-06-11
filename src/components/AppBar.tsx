import HamburgerButton from "./HamburgerButton";
import SearchBar from "./SearchBar";

const AppBar = (props: any) => {
  return (
    <div>
      <div className="fixed w-full top-0 z-50 flex justify-between px-2.5 py-1.5 backdrop-blur-lg">
        <div className="flex gap-5 items-center">
          <div className="ml-4">
            <HamburgerButton
              isOpen={props.isOpen}
              handleClick={props.handleClick}
            />
          </div>
          <img src="/images/yt_logo_rgb_dark.png" alt="yt-logo" className="h-7" />
        </div>
        <div>
          <SearchBar />
        </div>
        <div>
          <button
            type="button"
            className="grid grid-cols-3 text-blue-400 bg-gray-800 hover:bg-gray-900 dark:border-gray-700 border focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full px-2 py-1 dark:bg-black dark:hover:bg-gray-700 dark:focus:ring-blue-700"
          >
            <div className="relative col-span-1 w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-700">
              <svg
                className="absolute w-10 h-10 text-gray-400 dark:text-black dark:border-blue-400 -left-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div className="col-span-2 px-1 pt-0.5 text-md">Sign in</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppBar;
