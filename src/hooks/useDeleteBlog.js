import deleteBlog from "../services/delete-blog.service";
import useBlogStore from "../store/blogStore";

const useDeleteBlog = () => {
  const { removeBlog } = useBlogStore();

  const handleDeleteBlog = async (id) => {
    try {
      const result = await deleteBlog(id);
      if (result.success) {
        removeBlog(id); // Update the store by removing the blog
      }
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  return { handleDeleteBlog };
};

export default useDeleteBlog;
