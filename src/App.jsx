import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// Layouts & Pages
import RootLayout from "./Layout/RootLayout";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Blogs from "./Pages/Blogs/Blogs";
import Services from "./Pages/Services/Services";
import BlogDetail from "./BlogDetails/Blogdetails.jsx";
import BlogForm from "./PrivateRoute/BlogForm";
import NotFound from "./Error/Notfound"; // Make sure this file exists

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* Main Website Layout */}
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="blogs/:id" element={<BlogDetail />} />
          <Route path="services" element={<Services />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* Protected or Standalone Route */}
        <Route path="/blink/consultants/exe/blog/create" element={<BlogForm />} />
      </>
    )
  );

  return (
    <RouterProvider router={router} future={{ v7_startTransition: true }} />
  );
}

export default App;
