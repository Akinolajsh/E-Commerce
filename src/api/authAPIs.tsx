import axios from "axios";

const URL: string = "http://localhost:3400/api/v1";

export const registerUser = async (data: any) => {
  try {
    const config: any = {
      "content-type": "multipart/formdata",
    };

    return await axios.post(`${URL}/sign-up`, data, config).then((res: any) => {
      return res.data.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export const signInUser = async (data: any) => {
  try {
    return await axios.post(`${URL}/sign-in`, data).then((res: any) => {
      return res.data.data;
    });
  } catch (error) {
    console.log(error);
  }
};
