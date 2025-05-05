import React, { useState } from "react";
import UserList from "./UserList";
import UserForm from "./UserForm";
import "./styles.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  const updateUser = (updatedUser) => {
    const updatedUsers = users?.map((user, index) =>

      {
        if (index === currentUser.index) {
          return updatedUser;
        } else {
          return user;
        }
      }
    );
    setUsers(updatedUsers);
    setCurrentUser(null);
  };

  const deleteUser = (index) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      console.log("users", users);
      const updatedUsers = users.filter((_, i) => i !== index);
      setUsers(updatedUsers);
    }
  };

  const handleSubmit = (user) => {
    if (currentUser) {
      updateUser(user);
    } else {
      addUser(user);
    }
  };

  const handleEdit = (index) => {
    setCurrentUser({ ...users[index], index });
  };

  return (
    <div className="container">
      <h1>User Management</h1>
      <UserForm
        onSubmit={handleSubmit}
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
      />
      <UserList users={users} onEdit={handleEdit} onDelete={deleteUser} />
    </div>
  );
};

export default App;
