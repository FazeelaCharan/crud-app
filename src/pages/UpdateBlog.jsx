import React, { useState } from "react";
import useUpdateBlog from "../hooks/useUpdateBlog";

// eslint-disable-next-line react/prop-types
const UpdateBlogForm = ({ blog, onClose }) => {
  const [title, setTitle] = useState(blog.title);
  const [body, setBody] = useState(blog.body);
  const { handleUpdateBlog } = useUpdateBlog();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await handleUpdateBlog(blog.id, { title, body });
      alert("Blog updated successfully!");
      onClose();
    } catch (error) {
      console.error("Error updating blog:", error);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-lg w-full">
      <h1 className="text-2xl font-bold mb-4">Update Blog</h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Body</label>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            rows="6"
            className="w-full px-4 py-2 border rounded-lg"
          ></textarea>
        </div>
        <div className="text-right">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Update Blog
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateBlogForm;
