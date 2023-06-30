import Axios, {AxiosRequestConfig, AxiosResponse} from 'axios';
import Config from 'react-native-config';

const axios = Axios.create({
  baseURL: Config.BASE_URL,
});
class Api {
  async get<O>(url: string): Promise<O> {
    const response = await axios.get<O>(url);
    return this.onResponseSuccess(response);
  }

  private onResponseSuccess<O>(response: AxiosResponse<O>): O {
    if (response.status >= 200 && response.status < 300) {
      return response.data;
    }

    throw new Error(response.statusText);
  }
}

export default new Api();
