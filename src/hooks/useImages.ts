import {useQuery} from 'react-query';
import {ImagesAPI} from '../api/ImagesAPI';
import {ImagesResponseFormat} from '../utilities';

const fetchImages = async () => {
  const movies: Promise<ImagesResponseFormat> = ImagesAPI.getImages();
  return movies;
};

const useImages = () => useQuery('images', fetchImages);
export default useImages;
