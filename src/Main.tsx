import React from "react";
import ReactDOM from "react-dom/client";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Home from './Home';
import Bucket from './Bucket';
import Help from './Help';
import "./index.scss";

const Main = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/storage" element={<Home />}>
                <Route path="bucket" element={<Bucket />} />
                <Route path="help" element={<Help />} />
            </Route>
        </Routes>
    </BrowserRouter>
);

let Root;
export const MountStorage = (selector: string) => {
    Root = ReactDOM.createRoot(document.getElementById(selector));
    Root.render(<Main />);
};
export const UnMountStorage = () => {
    Root.unmount();
};

export const boot = [
    MountStorage,
    UnMountStorage,
];
export default Main;
