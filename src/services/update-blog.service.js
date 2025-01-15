import axiosInstance from "../config/axios";

const updateBlog = async (id, updatedData) => {
  try {
    const response = await axiosInstance.put(`/posts/${id}`, updatedData);

    // Return the response data
    return response.data;
  } catch (error) {
    console.error("Error updating blog:", error);
    throw error;
  }
};

export default updateBlog;
