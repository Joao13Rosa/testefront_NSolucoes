import React, { useState, useEffect } from "react";
import "./style.css";

const UserPage = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    // Simulação de requisição para obter a lista de usuários
    fetch("/api/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  const handleSelectUser = (user) => {
    setSelectedUser(user);
    setEditMode(false);
  };

  /* const handleEditUser = () => {
    setEditMode(true);
  }; */

  /* const handleDeleteUser = () => {
    // Simulação de requisição para excluir o usuário
    fetch(`/api/users/${selectedUser.id}`, { method: "DELETE" }).then(() => {
      // Atualizar a lista de usuários após a exclusão
      const updatedUsers = users.filter((user) => user.id !== selectedUser.id);
      setUsers(updatedUsers);
      setSelectedUser(null);
      setEditMode(false);
    });
  }; */

  /* const handleSaveUser = (updatedUser) => {
    // Simulação de requisição para atualizar o usuário
    fetch(`/api/users/${selectedUser.id}`, {
      method: "PATCH",
      body: JSON.stringify(updatedUser),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      // Atualizar a lista de usuários após a edição
      const updatedUsers = users.map((user) =>
        user.id === selectedUser.id ? updatedUser : user
      );
      setUsers(updatedUsers);
      setSelectedUser(updatedUser);
      setEditMode(false);
    });
  }; */

  return (
    <div className="div-geral">
      <h1>Listagem de Usuários</h1>
      <div className="div-buttons">
        <button className="button-add">+</button>
        <input type="text" placeholder="Busca" />
        <button className="button-search">Buscar</button>
      </div>

      <ul>
        <div className="div-title-ul">
          <p className="p-ul">Nome</p>
          <p className="p-ul">Login</p>
          <p className="p-ul">E-mail</p>
          <p className="p-ul">Telefone</p>
          <p className="p-ul">Status</p>
          <p className="p-ul">Ações</p>
        </div>
        {users.map((user) => (
          <li key={user.id} onClick={() => handleSelectUser(user)}>
            <p className="p-li">{user.name}</p>
            <p className="p-li">{user.login}</p>
            <p className="p-li">{user.email}</p>
            <p className="p-li">{user.telephone}</p>
            <p className="p-li">{user.status}</p>
            <div className="div-actions">
              <p className="p-actions">Ver</p>
              <p className="p-actions">Edit</p>
              <p className="p-actions">Del</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserPage;
