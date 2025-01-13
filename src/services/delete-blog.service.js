const deleteBlog = async (id) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      {
        method: "DELETE",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to delete the blog");
    }

    return { success: true, id }; // Return the ID of the deleted blog
  } catch (error) {
    console.error("Error deleting blog:", error);
    throw error;
  }
};

export default deleteBlog;
