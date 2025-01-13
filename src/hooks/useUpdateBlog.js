import updateBlog from "../services/update-blog.service";
import useBlogStore from "../store/blogStore";

const useUpdateBlog = () => {
  const { updateBlog: updateBlogInStore } = useBlogStore();

  const handleUpdateBlog = async (id, updatedData) => {
    try {
      const updatedBlog = await updateBlog(id, updatedData);
      updateBlogInStore(id, updatedBlog);
      return updatedBlog;
    } catch (error) {
      console.error("Error updating blog:", error);
      throw error;
    }
  };

  return { handleUpdateBlog };
};

export default useUpdateBlog;
