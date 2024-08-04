import { useId } from 'react';

import classes from './SearchBox.module.css';

function SearchBox({ value, onChange }) {
  const searchId = useId();

  return (
    <div className={classes['search-box-container']}>
      <label htmlFor={searchId}>Find contacts by name</label>
      <input
        id={searchId}
        value={value}
        type="search"
        className={classes['search-box']}
        onChange={event => onChange(event.target.value)}
      />
    </div>
  );
}

export default SearchBox;
