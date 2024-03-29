import Sidebar from "../sidebar/Sidebar";

export default function Layout({ children }) {
  return (
    <div>
      <Sidebar />
      <div className="sm:ml-64 p-6 bg-primary-300 min-h-screen flex flex-col">
        <div className="p-6 bg-white rounded-xl h-fit flex flex-col flex-1">
          <div className="flex-1">{children}</div>
        </div>
      </div>
    </div>
  );
}
