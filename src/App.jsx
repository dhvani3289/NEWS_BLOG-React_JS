import { BrowserRouter, Route, Routes } from "react-router-dom"
import Blog from "./pages/Blog/Blog"
import Header from "./pages/Header/Header"
import Home from "./pages/Home/Home"
import BlogDetails from "./pages/Blog_Details/BlogDetails"
import { Provider } from "react-redux"
import store from "./pages/Redux/store"
import Category from "./pages/Blog/Category"

function App() {

  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <Header />
          <Routes>
            <Route path="/" element={< Home />} />
            <Route path="/addBlog" element={<Blog />} />
            <Route path="/addCategory" element={<Category />} />
            <Route path="/blogDetails" element={<BlogDetails />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </>
  )
}

export default App
