import { useEffect, useState } from "react";
import Tabs from "../components/tabs/Tabs";
import SearchBox from "../components/searchBox/SearchBox";
import TableComponent from "../components/tableComponent/TableComponent";
import data from "../assets/data.js";
import Pagination from "../components/pagination/Pagination.jsx";

export default function Homepage() {
  const [activeTab, setActiveTab] = useState("pending");
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const filtered = data.filter((item) => item.status === activeTab);
    setFilteredData(filtered);
  }, [activeTab]);

  useEffect(() => {
    const input = searchTerm.trim().toLowerCase();
    if (!input) {
      setFilteredData(data.filter((item) => item.status === activeTab));
      return;
    }
    const filtered = data.filter(
      (item) =>
        (item.name.toLowerCase().includes(input) ||
          item.email.toLowerCase().includes(input) ||
          item.phone_num.includes(input) ||
          item.time.toString().includes(input)) &&
        item.status === activeTab
    );
    setFilteredData(filtered);
  }, [searchTerm, activeTab]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4 bg-primary-300 rounded-xl p-6 rounded-xl">
        <Tabs activeTab={activeTab} changeActiveTab={handleTabChange} />
        <SearchBox setSearchTerm={setSearchTerm} />
        <TableComponent data={filteredData} />
      </div>
      <Pagination />
    </div>
  );
}
