import api from './BaseApi';
import {ImagesResponseFormat} from '../utilities';

export class ImagesAPI {
  static async getImages(): Promise<ImagesResponseFormat> {
    return api.get('/breed/hound/images');
  }
}
