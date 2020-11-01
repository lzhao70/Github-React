import React from 'react';
import User from './User';
import Spinner from '../Spinner/Spinner';

const Users = (props) => {
  return (
    <div class='container'>
      {props.isLoading ? (
        <Spinner />
      ) : (
        <div className='user-card-container'>
          {props.users.map((user) => (
            <User user={user} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Users;
