export function Tabs({ zadania, wybranaKategoria, wybierzKategorie }) {
  const tabs = ["Wszystkie", "Nieukończone", "Ukończone"];

  return (
    <nav className="w-full flex justify-center space-x-6 mt-6">
      {tabs.map((tab, index) => {
        const liczbaZadan =
          tab === "Wszystkie"
            ? zadania.length
            : tab === "Nieukończone"
            ? zadania.filter((val) => !val.complete).length
            : zadania.filter((val) => val.complete).length;

        return (
          <button
            key={index}
            onClick={() => wybierzKategorie(tab)} 
            className={`px-4 py-2 text-lg font-medium border-b-2 border-transparent hover:border-sky-500 transition ${
              tab === wybranaKategoria ? "border-sky-500 font-bold" : ""
            }`}
          >
            {tab} <span className="text-gray-500">({liczbaZadan})</span>
          </button>
        );
      })}
    </nav>
  );
}
