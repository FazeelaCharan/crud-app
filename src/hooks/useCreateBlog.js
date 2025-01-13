import { useState } from "react";
import createBlog from "../services/create-blog.service";

function useCreateBlog() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleCreateBlog = async (blogData) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await createBlog(blogData);
      return response;
    } catch (err) {
      setError(err.message || "An error occurred");
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    error,
    handleCreateBlog,
  };
}

export default useCreateBlog;
