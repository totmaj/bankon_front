import BackEndReq from "./Api";

export const login = async (params: any) => {
  try {
    const response = await BackEndReq.post("/auth/login", params);
    return response.data;
  } catch (e) {}
};

export const signup = async (params: any) => {
  try {
    const response = await BackEndReq.post(`/auth/register`, params);
    return response.data;
  } catch (e) {}
};
