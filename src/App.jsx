import "./App.css";
import ListUsers from "./assets/components/ListUsers";

function App() {
  return (
    <div className="max-w-[1920px] h-screen mx-auto p-4 bg-gradient-to-r from-blue-500 to-purple-500">
      <h1 className="text-4xl font-bold text-white text-center">
        Listado de usuarios
      </h1>
      <ListUsers />
    </div>
  );
}

export default App;
