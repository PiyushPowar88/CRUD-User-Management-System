import React from 'react';

const UserList = ({ users, onEdit, onDelete }) => {
  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <p>{user.name} - {user.email} - {user.phone}</p>
            <div>
              <button onClick={() => onEdit(index)}>Edit</button>
              <button onClick={() => onDelete(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
