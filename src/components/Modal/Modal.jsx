import css from '../Modal/ModalStyle.module.css';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ img, tags, closeModal }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        console.log('close');
        closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal]);

  const handleBackDrop = e => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };
  return createPortal(
    <div className={css.Overlay} onClick={handleBackDrop}>
      <div className={css.Modal}>
        <img src={img} alt={tags} />
      </div>
    </div>,
    modalRoot
  );
};

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  img: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
