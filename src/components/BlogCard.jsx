import React from "react";

const BlogCard = ({ title, description, onDelete, id, onEdit }) => {
  return (
    <>
      <div className="border rounded-lg shadow-md p-4 bg-white">
        <img
          src="https://images.unsplash.com/photo-1558470598-a5dda9640f68?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt={title}
          className="w-full h-40 object-cover rounded-md mb-4"
        />
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <button
          onClick={() => onDelete(id)}
          className="bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-500"
        >
          Delete
        </button>
        <button
          onClick={() => onEdit(id)}
          className="bg-green-400 text-white px-4 py-2 rounded hover:bg-green-500"
        >
          Edit
        </button>
      </div>
    </>
  );
};

export default BlogCard;
