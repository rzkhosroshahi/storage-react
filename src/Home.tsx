import React from 'react';
import { Outlet, Link } from "react-router-dom";

export default () => {
    return (
        <div>
            <h1>Storage ReactJs App</h1>
            <nav>
                <ul>
                    <li><Link to="bucket">Bucket</Link></li>
                    <li><Link to="help">Help</Link></li>
                </ul>
            </nav>
            <div className="content">
                <Outlet />
            </div>
        </div>
    )
}
