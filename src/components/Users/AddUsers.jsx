import React, { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUsers.module.css';

const AddUsers = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setErrror] = useState()

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setErrror({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values)"
      })
      return;
    }

    if (+enteredAge < 1) {
      setErrror({
        title: "Invalid Age",
        message: "Please enter a valid age (> 0)"
      })
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredAge('');
    setEnteredUsername('');
  };

  const usernameChangeHandler = (e) => {
    setEnteredUsername(e.target.value);
  };
  const ageChangeHandler = (e) => {
    setEnteredAge(e.target.value);
  };

  const errorHandler = () => {
    setErrror(null)
  }

  return (
    <div>

      {error && <ErrorModal title={error.title} message={error.message } onConfirm={errorHandler} />}
    <Card className={classes.input}>
      <form action="" onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={enteredUsername}
          onChange={usernameChangeHandler}
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          type="number"
          id="age"
          value={enteredAge}
          onChange={ageChangeHandler}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
    </div>
  );
};

export default AddUsers;
