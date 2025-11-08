import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const Department = () => {
  const [departments, setDepartments] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [form, setForm] = useState({
    name: "",
    description: "",
    status: "Active",
  });
  const [editingId, setEditingId] = useState(null);
  const [page, setPage] = useState(1);
  const itemsPerPage = 5;
  const apiURL = process.env.REACT_APP_API_URL;

  const fetchDepartments = async () => {
    try {
      const res = await axios.get(`${apiURL}/departments/`);
      setDepartments(res.data);
      setFiltered(res.data);
    } catch (err) {
      toast.error("Failed to fetch departments!");
    }
  };

  useEffect(() => {
    fetchDepartments();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await axios.put(`${apiURL}/departments/${editingId}/`, form);
        toast.success("Department updated!");
      } else {
        await axios.post(`${apiURL}/departments/`, form);
        toast.success("Department added!");
      }
      setForm({ name: "", description: "", status: "Active" });
      setEditingId(null);
      fetchDepartments();
    } catch {
      toast.error("Error saving department!");
    }
  };

  const handleEdit = (dept) => {
    setForm({
      name: dept.name,
      description: dept.description,
      status: dept.status,
    });
    setEditingId(dept.id);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this department?"))
      return;
    try {
      await axios.delete(`${apiURL}/departments/${id}/`);
      toast.success("Department deleted!");
      fetchDepartments();
    } catch {
      toast.error("Delete failed!");
    }
  };

  const handleSearch = (term) => {
    setSearch(term);
    const filteredData = departments.filter((dept) =>
      dept.name.toLowerCase().includes(term.toLowerCase())
    );
    setFiltered(filteredData);
    setPage(1);
  };

  // Pagination calculations
  const startIndex = (page - 1) * itemsPerPage;
  const paginated = filtered.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(filtered.length / itemsPerPage);

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1">
        <Topbar />
        <div className="p-6 grid grid-cols-3 gap-4">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white p-5 rounded shadow border border-gray-200"
          >
            <h2 className="text-xl font-bold mb-4 text-gray-700">
              {editingId ? "Edit Department" : "Add Department"}
            </h2>

            <h2 className="text-l text-gray-700 mb-0/5">Dept. Name</h2>
            <input
              type="text"
              placeholder="e.g. Human Resources"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full mb-3 p-2 border rounded focus:ring focus:ring-blue-200"
              required
            />
            <h2 className="text-l text-gray-700 mb-0.5">Description</h2>
            <textarea
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
              className="w-full mb-2 p-2 border rounded focus:ring focus:ring-blue-200"
            />
            <h2 className="text-l text-gray-700 mb-0.5">Status</h2>
            <select
              value={form.status}
              onChange={(e) => setForm({ ...form, status: e.target.value })}
              className="w-full mb-4 p-2 border rounded"
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>

            <button className="w-full bg-lime-500 text-white py-2 rounded hover:bg-lime-700 transition">
              {editingId ? "Update" : "Add"}
            </button>
          </form>

          {/* Table */}
          <div className="col-span-2 bg-white p-5 rounded shadow border border-gray-200">
            <div className="flex justify-between mb-4 items-center">
              <h2 className="text-xl font-bold text-gray-700">Departments</h2>
              <input
                type="text"
                placeholder="Search by name..."
                value={search}
                onChange={(e) => handleSearch(e.target.value)}
                className="border rounded p-2 w-1/3"
              />
            </div>

            <table className="w-full text-left border">
              <thead>
                <tr className="bg-gray-100 text-gray-700">
                  <th className="p-2 border">ID</th>
                  <th className="p-2 border">Name</th>
                  <th className="p-2 border">Description</th>
                  <th className="p-2 border">Status</th>
                  <th className="p-2 border text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {paginated.length > 0 ? (
                  paginated.map((dept) => (
                    <tr key={dept.id} className="hover:bg-gray-50">
                      <td className="p-2 border">{dept.id}</td>
                      <td className="p-2 border font-medium">{dept.name}</td>
                      <td className="p-2 border">{dept.description}</td>
                      <td
                        className={`p-2 border font-semibold ${
                          dept.status === "Active"
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {dept.status}
                      </td>
                      <td className="p-2 border text-center space-x-2">
                        <button
                          onClick={() => handleEdit(dept)}
                          className="px-3 py-1 bg-yellow-400 text-sm rounded hover:bg-yellow-500"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(dept.id)}
                          className="px-3 py-1 bg-red-500 text-sm text-white rounded hover:bg-red-600"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="p-4 text-center text-gray-500">
                      No departments found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>

            {/* Pagination */}
            <div className="flex justify-center mt-4 space-x-2">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i + 1)}
                  className={`px-3 py-1 rounded ${
                    page === i + 1
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Department;
