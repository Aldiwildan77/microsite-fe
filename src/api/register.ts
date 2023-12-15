import { AxiosError } from "axios";
import { IApiResponse } from "../interface/api/response.interface";
import { server } from "./server";
import {
  IRegisterAttributes,
  IResponse,
} from "../interface/api/registerInput.interface";

export const register = async (input: IRegisterAttributes) => {
  try {
    const res = await server.post<IApiResponse>("/api/users", input);
    const resObj: IResponse = {
      statusCode: res.status,
      message: res.data.message,
    };
    return resObj;
  } catch (e) {
    if (e instanceof AxiosError) {
      throw new Error(`Error : ${e.message}`);
    }
    throw e;
  }
};
