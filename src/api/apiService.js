import axios from 'axios';

export const fecthServerApi = async (searchQery, page) => {
  try {
    const { data } = await axios.get(
      `https://pixabay.com/api/?q=${searchQery}&page=${page}&key=31129543-53dedf11cf0639b43ae86da60&image_type=photo&orientation=horizontal&per_page=12`
    );
    //   const response = await fetch(
    //     `https://pixabay.com/api/?q=${searchQery}&page=${page}&key=31129543-53dedf11cf0639b43ae86da60&image_type=photo&orientation=horizontal&per_page=12`
    //   );
    //   const data = response.json();
    return data;
  } catch (error) {
    console.log('API not workin', error);
  }
};
