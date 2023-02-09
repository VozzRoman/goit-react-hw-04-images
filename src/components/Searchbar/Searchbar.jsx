import { useState } from 'react';
import css from '../Searchbar/SearchbarStlye.module.css';
import Notiflix from 'notiflix';
import PropTypes from 'prop-types';

export const Searchbar = ({ onSubmit }) => {
  const [search, setSearch] = useState('');

  const handlerOncahnge = e => {
    console.log(e.currentTarget.value);
    setSearch(e.currentTarget.value.toLowerCase());
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (search === '') {
      Notiflix.Notify.info('The field is empty, please enter value');
      return;
    }
    onSubmit(search);
    setSearch('');
  };

  return (
    <header className={css.Searchbar}>
      <form onSubmit={handleSubmit} className={css.SearchForm}>
        <button type="submit" className={css.SearchFormButton}>
          <span className={css.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          onChange={handlerOncahnge}
          name="search"
          value={search}
          className={css.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

Searchbar.propTtypes = {
  onSubmit: PropTypes.func.isRequired,
};
