export function DoCard({ todo, usuwanieZadania, todoIndex, ukonczZadanie }) {
  return (
    <div className="w-full flex flex-col items-center py-4 px-6 border-b last:border-b-0">
      <p className="text-lg font-medium text-center">{todo.input}</p>
      <div className="flex space-x-4 mt-2">
        <button
          onClick={() => ukonczZadanie(todoIndex)} 
          disabled={todo.complete} 
          className={`px-4 py-2 text-lg font-medium text-white rounded-lg transition ${
            todo.complete 
              ? "bg-gray-400 cursor-not-allowed" 
              : "bg-gradient-to-r from-emerald-500 to-green-400 hover:from-emerald-600 hover:to-green-500"
          }`}
        >
          {todo.complete ? "Ukończone" : "Zrobione"}
        </button>
        <button
          className="px-4 py-2 text-lg font-medium bg-gradient-to-r from-rose-500 to-red-400 text-white rounded-lg hover:from-rose-600 hover:to-red-500 transition"
          onClick={() => usuwanieZadania(todoIndex)} 
        >
          Usuń
        </button>
      </div>
    </div>
  );
}
