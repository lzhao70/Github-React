import React from 'react';

const User = (props) => {
  return (
    <div class='user-card'>
      <label>Login Name</label>
      <p>{props.user.login}</p>
    </div>
  );
};

export default User;
