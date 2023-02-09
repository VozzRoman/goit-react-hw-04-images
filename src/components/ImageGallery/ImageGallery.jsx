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
          <ImageGalleryItem key={id} el={el} clickOnItemPic={clickOnPic} />
          // </li>
        );
      })}
    </ul>
  );
};

ImageGallery.propTypes = {
  clickOnPic: PropTypes.func.isRequired,
  dataPicture: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
// // export class ImageGallery extends Component {
// //   render() {
// //     return (
// <>
//   {/* <ul className={css.ImageGallery}>
//           {this.props.dataPicture.map(el => {
//             return (
//               <ImageGalleryItem
//                 key={el.id}
//                 el={el}
//                 clickOnItemPic={this.props.clickOnPic}
//               />
//             );
//           })}
//         </ul> */}
// </>;
// //     );
// //   }
// // }
