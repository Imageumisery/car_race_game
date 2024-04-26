import { BrowserRouter } from "react-router-dom";
import RootRouter from "./routes/RootRouter";
import "./styles/main.scss";

function App() {
    return (
        <>
            <BrowserRouter>
                <RootRouter />
            </BrowserRouter>
        </>
    );
}

export default App;
