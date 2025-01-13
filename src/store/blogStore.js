// import { create } from "zustand";

// const useBlogStore = create((set) => ({
//   blogs: [], // Initial state

//   // Action to set blogs
//   setBlogs: (newBlogs) => set({ blogs: newBlogs }),

//   // Action to add a blog
//   addBlog: (newBlog) =>
//     set((state) => ({
//       blogs: [...state.blogs, newBlog],
//     })),
// }));

// export default useBlogStore;
// import { create } from "zustand";

// const useBlogStore = create((set) => ({
//   blogs: JSON.parse(localStorage.getItem("blogs")) || [], // Load blogs from localStorage

//   // Action to set blogs
//   setBlogs: (newBlogs) => {
//     localStorage.setItem("blogs", JSON.stringify(newBlogs)); // Save to localStorage
//     set({ blogs: newBlogs });
//   },

//   // Action to add a blog
//   addBlog: (newBlog) =>
//     set((state) => {
//       const updatedBlogs = [...state.blogs, newBlog];
//       localStorage.setItem("blogs", JSON.stringify(updatedBlogs)); // Save to localStorage
//       return { blogs: updatedBlogs };
//     }),
// }));

// export default useBlogStore;

import { create } from "zustand";

const useBlogStore = create((set) => ({
  blogs: JSON.parse(localStorage.getItem("blogs")) || [],

  setBlogs: (newBlogs) => {
    localStorage.setItem("blogs", JSON.stringify(newBlogs));
    set({ blogs: newBlogs });
  },

  addBlog: (newBlog) =>
    set((state) => {
      const updatedBlogs = [...state.blogs, newBlog];
      localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
      return { blogs: updatedBlogs };
    }),

  removeBlog: (id) =>
    set((state) => {
      const updatedBlogs = state.blogs.filter((blog) => blog.id !== id);
      localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
      return { blogs: updatedBlogs };
    }),
  updateBlog: (id, updatedBlog) =>
    set((state) => {
      const updatedBlogs = state.blogs.map((blog) =>
        blog.id === id ? { ...blog, ...updatedBlog } : blog
      );
      localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
      return { blogs: updatedBlogs };
    }),
}));

export default useBlogStore;
