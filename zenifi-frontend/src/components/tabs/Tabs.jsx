export default function Tabs({ activeTab, changeActiveTab }) {
  return (
    <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
      <li
        className="me-2 cursor-pointer"
        onClick={() => changeActiveTab("pending")}
      >
        <div
          className={`${
            activeTab === "pending"
              ? "inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500"
              : "inline-block p-4 rounded-t-lg hover:text-gray-600 dark:hover:text-gray-300"
          }`}
        >
          Pending
        </div>
      </li>
      <li
        className="me-2 cursor-pointer"
        onClick={() => changeActiveTab("cancelled")}
      >
        <div
          className={`${
            activeTab === "cancelled"
              ? "inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500"
              : "inline-block p-4 rounded-t-lg hover:text-gray-600 dark:hover:text-gray-300"
          }`}
        >
          Cancelled
        </div>
      </li>
    </ul>
  );
}
