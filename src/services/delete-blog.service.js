import axiosInstance from "../config/axios";

const deleteBlog = async (id) => {
  try {
    const response = await axiosInstance.delete(`/posts/${id}`);
    console.log(response);
    return { success: true, id }; // Return the ID of the deleted blog
  } catch (error) {
    console.error("Error deleting blog:", error);
    throw error;
  }
};

export default deleteBlog;
