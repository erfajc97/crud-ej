import "./App.css";
import ListUsers from "./components/ListUsers";
import { arrayUsers } from "./components/data";
import FormToCreate from "./components/FormToCreate";
import { useState } from "react";
import FormUpdate from "./components/FormtoUpdate";

function App() {
  const [users, setUsers] = useState(arrayUsers);
  const [idSelected, setIdSelected] = useState(null);

  const handleDelete = (id) => {
    const listModificada = users.filter((item) => item.id != id);
    setUsers(listModificada);
  };

  const handleAdd = (objeto) => {
    setUsers([...users, objeto]);
  };
  const handleSelectedId = (id) => {
    setIdSelected(id);
  };
  const handleUpDate = (objeto) => {
    const userModificado = users.map((item) =>
      item.id == idSelected ? objeto : item
    );
    setUsers(userModificado);
  };

  return (
    <div className="max-w-[1920px] h-screen mx-auto p-4 bg-gradient-to-r from-blue-500 to-purple-500 ">
      <h1 className="text-4xl font-bold text-white text-center">
        Listado de usuarios
      </h1>
      <div className="flex items-center flex-row-reverse justify-center gap-x-12 ">
        <ListUsers
          xx={users}
          deleteFunc={handleDelete}
          selectedId={handleSelectedId}
        />
        <FormToCreate addObject={handleAdd} />
        <FormUpdate handleUpDate={handleUpDate} />
      </div>
    </div>
  );
}

export default App;
