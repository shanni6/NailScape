import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route element={<>Home</>} path="/" />

            </Routes>
            
            <Footer />
        </BrowserRouter>
    );
}

export default App;
