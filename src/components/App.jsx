import { useState, useEffect } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { fecthServerApi } from 'api/apiService';
import { Modal } from './Modal/Modal';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import Notiflix from 'notiflix';

export const App = () => {
  const [search, setSearch] = useState('');
  const [picture, setPicture] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalHits, setTotalHits] = useState(0);
  const [visibility, setVisibility] = useState(false);
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);
  const [tags, setTags] = useState('');

  useEffect(() => {
    if (search === '') {
      return;
    }
    setLoading(true);
    const fetchData = async () => {
      try {
        const data = await fecthServerApi(search, currentPage);
        if (data.hits.length < 1) {
          return Notiflix.Notify.info(
            'Sorry, but no images matching your search query. Enter correct value.'
          );
        }
        setPicture(prevPicture => {
          return [...prevPicture, ...data.hits];
        });
        setTotalHits(data.total);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData(search, currentPage);
  }, [search, currentPage]);

  const handlerFromForm = search => {
    console.log(search);
    setSearch(search);
    setPicture([]);
    setCurrentPage(1);
    setImage('');
  };

  const showToggleModal = (image, tags) => {
    setVisibility(prevState => !prevState);
    setImage(image);
    setTags(tags);
  };

  const loadMOreButton = () => {
    setCurrentPage(preVcurrentPage => {
      return preVcurrentPage + 1;
    });
  };
  return (
    <>
      <Searchbar onSubmit={handlerFromForm} />

      <ImageGallery dataPicture={picture} clickOnPic={showToggleModal} />
      {loading && <Loader />}
      {picture.length >= 12 && (
        <Button
          disabled={totalHits === picture.length}
          onClick={loadMOreButton}
          textChenge={
            totalHits === picture.length ? 'No more picture' : 'Load More'
          }
        />
      )}

      {visibility && (
        <Modal
          closeModal={showToggleModal}
          img={image}
          tags={tags}
          state={visibility}
        />
      )}
    </>
  );
};

// export class App extends Component {
//   state = {
//     search: '',
//     picture: [],
//     currentPage: 1,
//     totalHits: 0,
//     visibility: false,
//     image: '',
//     loading: false,
//     tags: '',
//   };
//   async componentDidUpdate(prevProps, prevState) {
//     const { search, currentPage } = this.state;
//     if (prevState.search !== search || prevState.currentPage !== currentPage) {
//       // console.log('prevState.currentPage', prevState.currentPage);
//       // console.log('this.state.currentPage', this.state.currentPage);
//       // console.log('prevState.search', prevState.search);
//       // console.log('this.state.search', this.state.search);
//       this.setState({
//         loading: true,
//       });
//       try {
//         const data = await fecthServerApi(search, currentPage);
//         if (data.hits.length < 1) {
//           return Notiflix.Notify.info(
//             'Sorry, but no images matching your search query. Enter correct value.'
//           );
//         }
//         this.setState(prevState => {
//           return {
//             picture: [...prevState.picture, ...data.hits],
//             totalHits: data.total,
//           };
//         });
//       } catch (error) {
//         console.log('Fetch is not working, error');
//       } finally {
//         this.setState({
//           loading: false,
//         });
//       }
//     }
//   }
//   handlerFromForm = search => {
//     //  console.log(search);
//     this.setState({
//       currentPage: 1,
//       image: '',
//       search,
//       picture: [],
//     });
//   };

//   showToggleModal = (image, tags) => {
//     this.setState(prevState => {
//       return {
//         visibility: !prevState.visibility,
//         image,
//         tags,
//       };
//     });
//   };

//   loadMOreButton = () => {
//     this.setState(prevState => {
//       return {
//         currentPage: prevState.currentPage + 1,
//       };
//     });
//   };

//   render() {
//     //  const { picture, loading, image, tags, visibility, totalHits } = this.state;
//     return (
//       <>
//         <Searchbar onSubmit={this.handlerFromForm} />

//         {/* <ImageGallery dataPicture={picture} clickOnPic={this.showToggleModal} />
//         {loading && <Loader />}
//         {picture.length >= 12 && (
//           <Button
//             disabled={this.state.totalHits === picture.length}
//             onClick={this.loadMOreButton}
//             textChenge={
//               totalHits === picture.length ? 'No more picture' : 'Load More'
//             }
//           />
//         )} */}

//         {/* {visibility && (
//           <Modal
//             closeModal={this.showToggleModal}
//             img={image}
//             tags={tags}
//             state={visibility}
//           />
//         )} */}
//       </>
//     );
//   }
// }
