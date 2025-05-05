import React, { useState, useEffect } from 'react';

const UserForm = ({ onSubmit, currentUser, setCurrentUser }) => {
  const [user, setUser] = useState({ name: '', email: '', phone: '' });
  const [errors, setErrors] = useState({ email: '', phone: '' });

  useEffect(() => {
    if (currentUser) {
      setUser(currentUser);
    }
  }, [currentUser]);

  const validate = () => {
    let emailError = '';
    let phoneError = '';

    if (!/\S+@\S+\.\S+/.test(user.email)) {
      emailError = 'Invalid Email';
    }

    if (!/^\d{10}$/.test(user.phone)) {
      phoneError = 'Invalid Phone Number';
    }

    if (emailError || phoneError) {
      setErrors({ email: emailError, phone: phoneError });
      return false;
    }

    setErrors({ email: '', phone: '' });
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(user);
      setUser({ name: '', email: '', phone: '' });
      setCurrentUser(null);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        required
      />
      {errors.email && <p className="error">{errors.email}</p>}
      <input
        type="text"
        placeholder="Phone"
        value={user.phone}
        onChange={(e) => setUser({ ...user, phone: e.target.value })}
        required
      />
      {errors.phone && <p className="error">{errors.phone}</p>}
      <button type="submit">{currentUser ? 'Update' : 'Add'} User</button>
    </form>
  );
};

export default UserForm;
