import { useState } from "react";
import { IUser } from "../../models/IUser";
import { userAPI } from "./userAPI"
import UserItem from "./UserItem";


export const UserContainer = () => {
  const [limit, setLimit] = useState(100);
  const { data: users, isLoading, error } = userAPI.useFetchAllUsersQuery(limit);
  const [createUser, { isLoading: isCreateLoading, error: createError }] = userAPI.useCreateUserMutation();
  const [updateUser, { isLoading: isUdateUserLoading, error: updateUserError }] = userAPI.useUpdateUserMutation();
  const [deleteUser, { error: deleteUserError }] = userAPI.useDeleteUserMutation();


  const handleCreate = async (e: { stopPropagation: () => void; }) => {
    e.stopPropagation()
    const name = prompt();
    await createUser({ name, email: `${name}@gmail.com` } as IUser)
  } 

  const handleUpdate = (user: IUser) => {
    updateUser(user)
  };

  const handleRemove = (user: IUser) => {
    deleteUser(user)
  }


  return (
    <div>
      <strong style={{ marginLeft: "10%", display: "block" }}> Список пользователей:</strong>

      <div style={{ display: "flex", margin: "15px 5%" }}>

        <select value={limit} onChange={(e) => setLimit(+e.target.value)} >
          <option value="''">All</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>

        <button
          onClick={handleCreate}
          style={{ marginLeft: "20px" }}
        >Add user</button>
      </div>
      {deleteUserError && deleteUserError && <h4>Delete User ERROR</h4>}
      {isUdateUserLoading && isUdateUserLoading && <h4>updateUserLoading...</h4>}
      {updateUserError && updateUserError && <h4>updaateUserError</h4>}
      {createError && createError && <h4>CreateError</h4>}
      {isCreateLoading && isCreateLoading && <h4>CreateLoading</h4>}
      {isLoading && isLoading && <h4>Loading...</h4>}
      {error && error && <h5>Error!!!</h5>}

      <ol>
     
        {users && users.map((user, i) =>
          <li key={user.id}>
            <UserItem user={user} remove={handleRemove} update={handleUpdate} />
          </li>
        )}
         
      </ol>

    </div>
  )
}
