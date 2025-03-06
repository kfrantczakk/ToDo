import { DoCard } from "./DoCard";

export function DoList({ zadania }) {
  const tab = "Wszystkie";
  const filtrujListe =
    tab === "Wszystkie"
      ? zadania
      : tab === "Ukończone"
      ? zadania.filter((val) => val.complete)
      : zadania.filter((val) => !val.complete);

  return (
    <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-6 mt-6">
      {filtrujListe.map((todo, index) => (
        <DoCard key={index} todo={todo} />
      ))}
    </div>
  );
}
