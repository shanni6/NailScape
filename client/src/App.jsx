import "./App.scss";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Blog from "./pages/Blog/Blog";
import Blogs from "./pages/Blogs/Blogs";
import Contact from "./pages/Contact/Contact";
import Create from "./pages/Create/Create";
import Edit from "./pages/Edit/Edit";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <main className="max-w-2xl mx-auto">
                <Routes>
                    <Route element={<Navigate to="/blogs" />} path="/" />
                    <Route element={<Blogs />} path="/blogs" />
                    <Route element={<Blog />} path="/blogs/:id" />
                    <Route element={<Edit />} path="/blogs/:id/edit" />
                    <Route element={<Create />} path="/blogs/create" />
                    <Route element={<Contact />} path="/contact" />
                </Routes>
            </main>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
