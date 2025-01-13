import React, { useState } from "react";
import BlogCard from "../components/BlogCard";

import useBlogStore from "../store/blogStore";
import useDeleteBlog from "../hooks/useDeleteBlog";
import UpdateBlogForm from "./UpdateBlog";

const Home = () => {
  const blogs = useBlogStore((state) => state.blogs);
  console.log(blogs);
  const { handleDeleteBlog } = useDeleteBlog();
  const [editingBlog, setEditingBlog] = useState(null);

  const handleEdit = (id) => {
    const blogToEdit = blogs.find((blog) => blog.id === id);
    setEditingBlog(blogToEdit);
  };

  const handleCloseEdit = () => setEditingBlog(null);

  return (
    <div className="container mx-auto p-4 bg-blue-300">
      <h1 className="text-3xl font-bold text-center my-6 text-white">
        My Life. My Blogs.
      </h1>
      {editingBlog && (
        <UpdateBlogForm blog={editingBlog} onClose={handleCloseEdit} />
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {blogs.length > 0 ? (
          blogs.map((blog, index) => (
            <BlogCard
              key={index}
              title={blog.title}
              id={blog.id}
              description={blog.body}
              onDelete={handleDeleteBlog}
              onEdit={handleEdit}
            />
          ))
        ) : (
          <p className="text-white text-center col-span-full">
            No blogs available. Please check back later!
          </p>
        )}
      </div>
    </div>
  );
};

export default Home;
