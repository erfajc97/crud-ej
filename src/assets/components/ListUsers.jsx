import { Avatar } from "@nextui-org/react";

import { users } from "./data";

const ListUsers = () => {
  return (
    <div className="flex justify-center items-center h-[calc(100vh-100px)]">
      <ul className="list-none flex flex-col gap-y-5 border-2 border-white rounded-md p-5">
        {users.map((user) => (
          <li
            className="text-white text-2xl font-bold flex gap-x-5 items-center border-b-2 border-white pb-5"
            key={user.id}
          >
            <Avatar src={user.image} />
            <p>{user.name}</p>
            <p>{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListUsers;
