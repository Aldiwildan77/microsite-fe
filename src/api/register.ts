import { AxiosError } from 'axios';
import {
  IRegisterAttributes,
  IResponse,
} from '../interface/api/registerInput.interface';
import { server } from './server';

export const register = async (input: IRegisterAttributes) => {
  try {
    const res = await server.post<IResponse>('/api/users', input);
    const resObj: IResponse = {
      statusCode: res.status,
      message: res.data.message,
      data: res.data.data,
    };
    return resObj;
  } catch (e) {
    if (e instanceof AxiosError) {
      return e.response?.data;
    }
    throw e;
  }
};
