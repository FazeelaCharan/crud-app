const updateBlog = async (id, updatedData) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData),
      }
    );
    return await response.json();
  } catch (error) {
    console.error("Error updating blog:", error);
    throw error;
  }
};

export default updateBlog;
