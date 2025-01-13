import getBlogs from "../services/get-blogs.service";
import useBlogStore from "../store/blogStore";

function useBlogs() {
  // Destructure blogs and setBlogs from the Zustand store
  const { blogs, setBlogs } = useBlogStore();

  // Function to fetch and update blogs
  const getAllBlogs = async () => {
    const response = await getBlogs(); // Fetch blogs (e.g., from an API)
    setBlogs(response); // Update the Zustand store with fetched blogs
  };

  return {
    blogs, // Access blogs state from store
    getAllBlogs, // Function to fetch blogs
  };
}

export default useBlogs;
