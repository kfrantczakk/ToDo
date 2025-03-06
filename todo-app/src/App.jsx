import { Header } from "./components/Header";
import { Tabs } from "./components/Tabs";
import { DoList } from "./components/DoList";
import { DoInput } from "./components/DoInput";
import { useState, useEffect } from "react";

function App() {
  const [zadania, dodajZad] = useState([
    { input: "Dodaj swoje pierwsze zadanie!", complete: true },
  ]);

  const [wybranaKategoria, wybierzKategorie] = useState("Wszystkie");

  function dodawanieZadania(noweZad) {
    const noweZadanie = [...zadania, { input: noweZad, complete: false }];
    dodajZad(noweZadanie);
    zapiszDane(noweZadanie)
  }

  function ukonczZadanie(index) {
    const noweZadania = zadania.map((zadanie, i) => 
      i === index ? { ...zadanie, complete: true } : zadanie
    );
    dodajZad(noweZadania)
    zapiszDane(noweZadania)
  }

  function usuwanieZadania(index) {
    const noweZadania = zadania.filter((_, i) => i !== index);
    dodajZad(noweZadania)
    zapiszDane(noweZadania)
  }

  function zapiszDane(aktualneZadania) {
    localStorage.setItem('todo-app', JSON.stringify({zadania: aktualneZadania}))
  }

  useEffect(() => {
    if (!localStorage || !localStorage.getItem('todo-app')) { 
      return;
    }
    let db = JSON.parse(localStorage.getItem('todo-app'));
    dodajZad(db.zadania); 
  }, []);
  

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6">
      <Header zadania={zadania} />
      <Tabs wybranaKategoria={wybranaKategoria} wybierzKategorie={wybierzKategorie} zadania={zadania} />
      <DoList 
        zadania={zadania} 
        wybranaKategoria={wybranaKategoria} 
        usuwanieZadania={usuwanieZadania} 
        ukonczZadanie={ukonczZadanie} 
      />
      <DoInput dodawanieZadania={dodawanieZadania} />
    </div>
  );
}

export default App;
