import React, { useState } from 'react'
import AddUsers from './components/Users/AddUsers'
import UsersList from './components/Users/UsersList'



const App = () => {
  const [userList, setUserList] = useState([])

  const AddUserHandle = (username,  userAge) => {
    setUserList((prevUserList) => {
      return [...prevUserList, {name: username, age: userAge, id: Math.random().toString}]
    })
  }
  console.log(userList);
  return (
    <div>
      <AddUsers onAddUser={AddUserHandle} />
      <UsersList users={userList} />
    </div>
  )
}

export default App