import { MdAdd } from "react-icons/md";

export function DoInput() {
  return (
    <div className="w-full max-w-2xl mx-auto flex items-center space-x-2 mt-6 bg-white p-4 rounded-xl shadow-lg">
      <input
        placeholder="Dodaj zadanie"
        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
      />
      <button className="p-3 rounded-lg bg-gradient-to-r from-sky-500 to-cyan-400 hover:from-sky-600 hover:to-cyan-500 transition">
        <MdAdd className="text-white" size={28} />
      </button>
    </div>
  );
}
