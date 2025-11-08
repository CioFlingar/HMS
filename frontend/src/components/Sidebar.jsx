import { Link } from "react-router-dom";

const Sidebar = () => (
  <div className="w-64 bg-white shadow-md p-4">
    <h2 className="text-2xl font-bold mb-6 text-center">HMS</h2>
    <nav className="flex flex-col space-y-2">
      <Link to="/dashboard" className="hover:bg-gray-200 p-2 rounded">
        Dashboard
      </Link>
      <Link to="#" className="hover:bg-gray-200 p-2 rounded">
        OPD
      </Link>
      <Link to="/departments" className="hover:bg-gray-200 p-2 rounded ml-6">
        Department
      </Link>
    </nav>
  </div>
);

export default Sidebar;
