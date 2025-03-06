import { Header } from "./components/Header";
import { Tabs } from "./components/Tabs";
import { DoList } from "./components/DoList";
import { DoInput } from "./components/DoInput";

function App() {
  const zadania = [
    { input: "Dodaj swoje pierwsze zadanie!", complete: true },
    { input: "Zrób zakupy", complete: false },
    { input: "Posprzątaj pokój", complete: false },
    { input: "Zrób pranie", complete: false },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6">
      <Header zadania={zadania} />
      <Tabs zadania={zadania} />
      <DoList zadania={zadania} />
      <DoInput />
    </div>
  );
}

export default App;
