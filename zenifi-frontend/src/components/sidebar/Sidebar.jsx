import {
  ChevronRight,
  Info,
  LayoutDashboard,
  LayoutList,
  MessageSquare,
  Settings,
  User,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center px-4 py-2 mt-2 ms-3 text-sm text-gray-500 rounded-3xl sm:hidden hover:bg-secondary-500 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-8 py-16 overflow-y-auto bg-primary-300 dark:bg-gray-800">
          <div className="flex gap-4 mb-12">
            <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full dark:bg-gray-700">
              <User className="w-8 h-8 rounded-full" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                Zenifi
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">Admin</p>
            </div>
          </div>
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className="flex items-center px-4 py-2 text-gray-900 rounded-3xl dark:text-white hover:bg-secondary-500 dark:hover:bg-gray-700 group"
              >
                <LayoutDashboard className="w-5 h-5" />
                <span className="ms-3">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                to="/tasks"
                className="flex items-center px-4 py-2 text-gray-900 rounded-3xl dark:text-white hover:bg-secondary-500 dark:hover:bg-gray-700 group"
              >
                <LayoutList className="w-5 h-5" />
                <span className="flex-1 ms-3 whitespace-nowrap">Tasks</span>
              </Link>
            </li>
            <li>
              <Link
                to="/customers"
                className="flex items-center px-4 py-2 text-gray-900 rounded-3xl dark:text-white hover:bg-secondary-500 dark:hover:bg-gray-700 group"
              >
                <User className="w-5 h-5" />
                <span className="flex-1 ms-3 whitespace-nowrap">Customers</span>
                <span className="inline-flex items-center justify-center">
                  <ChevronRight className="w-4 h-4" />
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/chats"
                className="flex items-center px-4 py-2 text-gray-900 rounded-3xl dark:text-white hover:bg-secondary-500 dark:hover:bg-gray-700 group"
              >
                <MessageSquare className="w-5 h-5" />
                <span className="flex-1 ms-3 whitespace-nowrap">Chats</span>
              </Link>
            </li>
            <li>
              <Link
                to="/disputes"
                className="flex items-center px-4 py-2 text-gray-900 rounded-3xl dark:text-white hover:bg-secondary-500 dark:hover:bg-gray-700 group"
              >
                <Info className="w-5 h-5" />
                <span className="flex-1 ms-3 whitespace-nowrap">Disputes</span>
              </Link>
            </li>
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <li>
              <Link
                to="/settings"
                className="flex items-center px-4 py-2 text-gray-900 rounded-3xl dark:text-white hover:bg-secondary-500 dark:hover:bg-gray-700 group"
              >
                <Settings className="w-5 h-5" />
                <span className="flex-1 ms-3 whitespace-nowrap">Settings</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
