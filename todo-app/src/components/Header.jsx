export function Header({ zadania }) {
    const zadaniaLength = zadania.length;
    const isZadanieJedno = zadania.length !== 1;
    const zadCzyZada = isZadanieJedno ? "zadania" : "zadanie";
  
    return (
      <header className="w-full py-6">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-sky-500 to-cyan-400 bg-clip-text text-transparent text-center">
          Masz {zadaniaLength} {zadCzyZada}.
        </h1>
      </header>
    );
  }
  