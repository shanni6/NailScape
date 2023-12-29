import "./App.scss";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Blog from "./pages/Blog/Blog";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <main>
                <Routes>
                    <Route element={<Navigate to="/blog" />} path="/" />
                    <Route element={<Blog />} path="/blog" />
                </Routes>
            </main>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
