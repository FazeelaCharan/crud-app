import axiosInstance from "../config/axios";

const getBlogs = async () => {
  const response = await axiosInstance.get("/posts");
  return response?.data;
};

export default getBlogs;
