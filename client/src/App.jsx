import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route element={<>Home</>} path="/" />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
