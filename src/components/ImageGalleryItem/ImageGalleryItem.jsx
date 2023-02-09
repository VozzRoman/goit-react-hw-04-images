import css from '../ImageGalleryItem/ImageGalleryItemStyle.module.css';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ el, clickOnItemPic }) => {
  //   console.log(el);
  const { webformatURL, tags, largeImageURL } = el;
  return (
    <li
      className={css.ImageGallerytem}
      onClick={() => clickOnItemPic(largeImageURL, tags)}
    >
      <img
        className={css.ImageGalleryItemImage}
        src={webformatURL}
        alt={tags}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  clickOnItemPic: PropTypes.func.isRequired,
  el: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
};
