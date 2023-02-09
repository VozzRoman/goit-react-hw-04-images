import { Component } from 'react';
import css from '../Modal/ModalStyle.module.css';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  static propTypes = {
    closeModal: PropTypes.func.isRequired,
    img: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      console.log('close');
      this.props.closeModal();
    }
  };

  handleBackDrop = e => {
    console.log(e.currentTarget);
    console.log(e.target);
    if (e.currentTarget === e.target) {
      this.props.closeModal();
    }
  };

  render() {
    const { img, tags } = this.props;
    return createPortal(
      <div className={css.Overlay} onClick={this.handleBackDrop}>
        <div className={css.Modal}>
          <img src={img} alt={tags} />
        </div>
      </div>,
      modalRoot
    );
  }
}
