import { Component } from 'react';
import css from '../Searchbar/SearchbarStlye.module.css';
import Notiflix from 'notiflix';
import PropTypes from 'prop-types';
export class Searchbar extends Component {
  static propTtypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    search: '',
  };

  handlerOncahnge = e => {
    this.setState({
      search: e.currentTarget.value,
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.search);
    if (this.state.search === '') {
      Notiflix.Notify.info('The field is empty, please enter value');
      return;
    }
    this.props.onSubmit(this.state.search);
    this.setState({ search: '' });
  };

  render() {
    return (
      <header className={css.Searchbar}>
        <form onSubmit={this.handleSubmit} className={css.SearchForm}>
          <button type="submit" className={css.SearchFormButton}>
            <span className={css.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            onChange={this.handlerOncahnge}
            name="search"
            value={this.state.search}
            className={css.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
