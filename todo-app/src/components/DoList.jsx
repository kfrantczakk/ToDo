import { DoCard } from "./DoCard";

export function DoList({ zadania, wybranaKategoria, usuwanieZadania, ukonczZadanie }) {
  const filtrujListe =
    wybranaKategoria === "Wszystkie"
      ? zadania
      : wybranaKategoria === "Ukończone"
      ? zadania.filter((val) => val.complete)
      : zadania.filter((val) => !val.complete);

  return (
    <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-6 mt-6">
      {filtrujListe.map((todo, todoIndex) => (
        <DoCard 
          key={todoIndex} 
          todo={todo} 
          todoIndex={todoIndex}
          usuwanieZadania={usuwanieZadania} 
          ukonczZadanie={ukonczZadanie} 
        />
      ))}
    </div>
  );
}
