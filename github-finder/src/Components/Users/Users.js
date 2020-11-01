import React from 'react';
import User from './User';
import Spinner from '../Spinner/Spinner';
import Search from '../Search/Search';

const Users = (props) => {
  return (
    <div class='container'>
      {props.isLoading ? (
        <Spinner />
      ) : (
        <div>
          <Search />
          <div className='user-card-container'>
            {props.users.map((user) => (
              <User user={user} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Users;
