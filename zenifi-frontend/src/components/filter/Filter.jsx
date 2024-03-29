import { FilterIcon, Grid, List } from "lucide-react";

export default function Filter() {
  return (
    <div className="flex gap-4 items-center">
      <div className="flex gap-4 justify-between items-center">
        <div className="rounded-full  text-center inline-flex items-center dark:bg-blue-600 border border-primary-700 dark:border-blue-600 cursor-pointer">
          <div className="bg-secondary-500 rounded-l-full border-r border-primary-700 dark:border-blue-600 py-1 px-1.5">
            <List className="w-4 h-4" color="#2D7DEB" />
          </div>
          <div className="py-1 px-1.5">
            <Grid className="w-4 h-4" />
          </div>
        </div>
      </div>
      <div>
        <button
          id="dropdownDefaultButton"
          data-dropdown-toggle="dropdown"
          className="text-white bg-transparent hover:bg-primary-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-2 py-1 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 border border-primary-700 dark:border-blue-600 dark:text-blue-300"
          type="button"
        >
          <div className="flex items-center gap-1 justify-center">
            <FilterIcon className="w-4 h-4" />
            <span>Filter</span>
          </div>
        </button>

        <div
          id="dropdown"
          className="z-10 hidden bg-secondary-500 divide-y divide-gray-100 rounded-xl shadow w-44 dark:bg-gray-700 backdrop-filter backdrop-blur-md"
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Settings
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
