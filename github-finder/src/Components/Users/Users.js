import React from 'react';
import User from './User';
import Spinner from '../Spinner/Spinner';

const Users = (props) => {
  return (
    <div class='container'>
      {props.isLoading ? (
        <Spinner />
      ) : (
        props.users.map((user) => <User user={user} />)
      )}
    </div>
  );
};

export default Users;
