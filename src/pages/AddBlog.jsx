import { useState } from "react";
import useBlogStore from "../store/blogStore";
import useCreateBlog from "../hooks/useCreateBlog";

const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const { addBlog } = useBlogStore(); // Zustand function to update global state
  const { handleCreateBlog, isLoading } = useCreateBlog();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newBlog = { title, body };

    try {
      console.log("Creating Blog:", newBlog);
      const createdBlog = await handleCreateBlog(newBlog);
      console.log("Created Blog:", createdBlog);
      addBlog(createdBlog);
      alert("blog added successfully");
      console.log(newBlog); // Update Zustand state
      setTitle("");
      setBody("");
      console.log("Current blogs in store:", useBlogStore.getState().blogs);
    } catch (error) {
      console.error("Error adding blog:", error);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-md p-6 max-w-lg w-full">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">
          Add a New Blog
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-gray-700 font-medium mb-2"
            >
              Blog Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter blog title"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="body"
              className="block text-gray-700 font-medium mb-2"
            >
              Blog Body
            </label>
            <textarea
              id="body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              placeholder="Enter blog content"
              rows="6"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
              disabled={isLoading}
            >
              {isLoading ? "Adding..." : "Add Blog"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBlog;
