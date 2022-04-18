import React, { FC } from 'react';
import { IUser } from '../../models/IUser';
import cl from './UsersItem.module.css'

interface UserItemProps {
  user: IUser;
  update: (user: IUser) => void;
  remove: (user: IUser) => void;
}

const UserItem: FC<UserItemProps> = ({ user, remove, update }) => {

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    remove(user)
  }

  const handleUpdate = (e: React.MouseEvent) => {
    const name = prompt() || ""
    update({ ...user, name })
  }

  return (
    <div
      onClick={handleUpdate}
      className={cl.user}>
      {user.name} <span className={cl.email}>{user.email}</span>
      <button onClick={handleRemove} >Delete</button>
    </div>
  );
};

export default UserItem;