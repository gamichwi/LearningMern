import React from "react";

import UserList from "../components/UsersList";
const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Frank Stein",
      image:
        "https://images.pexels.com/photos/2128807/pexels-photo-2128807.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      places: 3
    }
  ];
  return <UserList item={USERS}/>;
};

export default Users;
