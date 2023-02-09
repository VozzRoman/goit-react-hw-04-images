import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import css from '../ImageGallery/ImageGalleryStyle.module.css';
import PropTypes from 'prop-types';

export const ImageGallery = ({ dataPicture, clickOnPic }) => {
  return (
    <ul className={css.ImageGallery}>
      {dataPicture.map(el => {
        const { id } = el;
        return (
          // <li> Лишки по заданию в разметке ImageGalleryItem
          <ImageGalleryItem key={id} el={el} clickOnItemPic="" />
          // </li>
        );
      })}
    </ul>
  );
};

ImageGallery.propTypes = {
  //   clickOnPic: PropTypes.func.isRequired,
  dataPicture: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
