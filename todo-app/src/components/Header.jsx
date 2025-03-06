export function Header({ zadania }) {
  const zadaniaLength = zadania.length;
  
  let zadCzyZada;
  if (zadaniaLength === 1) {
      zadCzyZada = "zadanie";
  } else if (zadaniaLength % 10 >= 2 && zadaniaLength % 10 <= 4 && (zadaniaLength < 10 || zadaniaLength > 20)) {
      zadCzyZada = "zadania";
  } else {
      zadCzyZada = "zadań";
  }

  return (
    <header className="w-full py-6">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-sky-500 to-cyan-400 bg-clip-text text-transparent text-center">
        Masz {zadaniaLength} {zadCzyZada}.
      </h1>
    </header>
  );
}
