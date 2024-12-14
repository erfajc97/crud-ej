import { useState } from "react";
import "./App.css";
import ListUsers from "./components/ListUsers";
import { arrayUsers } from "./components/data";
import FormUser from "./components/FormUser";

// CRUD
// Create
// Read
// Update
// Delete

function App() {
  const [users, setUsers] = useState(arrayUsers);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleDeleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const handleSelectedUser = (id) => {
    setSelectedUser(id);
  };

  const handleUpdateUser = (id, userToUpdate) => {
    setUsers(users.map((user) => (user.id === id ? userToUpdate : user)));
  };

  const handleAddUser = (user) => {
    setUsers([...users, user]);
  };

  return (
    <div className="max-w-[1920px] h-screen mx-auto p-4 bg-gradient-to-r from-blue-500 to-purple-500">
      <h1 className="text-4xl font-bold text-white text-center">
        Listado de usuarios
      </h1>
      <div className="flex justify-center items-center gap-x-20 mt-24">
        <FormUser
          handleAddUser={handleAddUser}
          handleUpdateUser={handleUpdateUser}
          selectedUser={selectedUser}
        />
        <ListUsers
          users={users}
          handleDeleteUser={handleDeleteUser}
          handleSelectedUser={handleSelectedUser}
        />
      </div>
    </div>
  );
}

export default App;
