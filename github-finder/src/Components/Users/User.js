import React from 'react';

const User = (props) => {
  return (
    <div class='user-card'>
      <img src={props.user.avatar_url} alt='Github User Img' />

      <label>Login</label>
      <input type='text' disabled value={props.user.login} />

      <div className='user-card-buttons'>
        <a
          href={props.user.followers_url}
          target='_blank'
          rel='noreferrer'
          className='bg-dark text-dark'>
          Details
        </a>

        <a href={props.user.html_url} target='_blank' rel='noreferrer'>
          Github
        </a>
      </div>
    </div>
  );
};

export default User;
