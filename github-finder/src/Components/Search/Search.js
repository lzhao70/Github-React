import React from 'react';

const Search = (props) => {
  return (
    <div>
      <form className='search-form'>
        <input type='text' placeholder='Search Users...' />
        <input type='button' value='Search' className='bg-dark text-dark' />
      </form>
    </div>
  );
};

export default Search;
