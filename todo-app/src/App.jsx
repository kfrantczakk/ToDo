import { Header } from "./components/Header";
import { Tabs } from "./components/Tabs";
import { DoList } from "./components/DoList";
import { DoInput } from "./components/DoInput";
import { useState } from "react";

function App() {
  const [zadania, dodajZad] = useState([
    { input: "Dodaj swoje pierwsze zadanie!", complete: true },
    { input: "Zrób zakupy", complete: false },
    { input: "Posprzątaj pokój", complete: false },
  ]);

  const [wybranaKategoria, wybierzKategorie] = useState("Wszystkie");

  function dodawanieZadania(noweZad) {
    const noweZadanie = [...zadania, { input: noweZad, complete: false }];
    dodajZad(noweZadanie);
  }

  function ukonczZadania(index) {
    let noweZadanie = []
  }

  function usuwanieZadania(index){
    let noweZadanie = zadania.filter((val, valIndex) => {
      return valIndex !== index;
    });
    dodajZad(noweZadanie);
  }

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6">
      <Header zadania={zadania} />
      <Tabs wybranaKategoria={wybranaKategoria} wybierzKategorie={wybierzKategorie} zadania={zadania} />
      <DoList usuwanieZadania={usuwanieZadania} zadania={zadania} wybranaKategoria={wybranaKategoria} />
      <DoInput dodawanieZadania={dodawanieZadania} />
    </div>
  );
}

export default App;
