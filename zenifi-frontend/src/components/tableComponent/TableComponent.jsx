import React, { useState, useEffect } from "react";

export default function TableComponent({ data }) {
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    console.log(selectedItems);
  }, [selectedItems]);

  // Select all items when the data changes
  useEffect(() => {
    setSelectedItems([]);
  }, [data]);

  const handleSelectAll = (e) => {
    setSelectedItems(e.target.checked ? [...data] : []);
  };

  const handleSelect = (e, item) => {
    setSelectedItems((prevSelectedItems) => {
      if (e.target.checked) {
        return [...prevSelectedItems, item];
      } else {
        return prevSelectedItems.filter(
          (selectedItem) => selectedItem.name !== item.name
        );
      }
    });
  };

  return (
    <div className="relative overflow-x-auto ">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-secondary-300 dark:bg-gray-700 dark:text-gray-400 rounded-xl">
          <tr className="rounded-xl">
            <th scope="col" className="p-4 py-6 rounded-l-xl">
              <div className="flex items-center">
                <input
                  id="checkbox-all-search"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-500 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  onChange={handleSelectAll}
                  checked={selectedItems.length === data.length}
                />
                <label htmlFor="checkbox-all-search" className="sr-only">
                  Select all
                </label>
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Phone number
            </th>
            <th scope="col" className="px-6 py-3">
              Time
            </th>
            <th scope="col" className="px-6 py-3 rounded-r-xl">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr
              className="bg-white dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              key={item.name}
            >
              <td className="w-4 p-4 bg-primary-300">
                <div className="flex items-center">
                  <input
                    id={`checkbox-table-${item.name}`}
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-500 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    onChange={(e) => handleSelect(e, item)}
                    checked={selectedItems.includes(item)}
                  />
                  <label
                    htmlFor={`checkbox-table-${item.name}`}
                    className="sr-only"
                  >
                    Select item
                  </label>
                </div>
              </td>
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white bg-primary-300">
                {item.name}
              </td>
              <td className="px-6 py- bg-primary-300">{item.email}</td>
              <td className="px-6 py- bg-primary-300">{item.phone_num}</td>
              <td className="px-6 py- bg-primary-300">{item.time}</td>
              <td className="px-6 py- bg-primary-300">{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
