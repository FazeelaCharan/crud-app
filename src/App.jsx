// import React from "react";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import Footer from "./components/Footer";

// const App = () => {
//   return (
//     <div>
//       <div className="bg-blue-300 min-h-screen">
//         <Navbar />
//         <Home />
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default App;

import { RouterProvider } from "react-router";
import router from "./routes/router";

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
