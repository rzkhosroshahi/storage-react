import React, {useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";

export default () => {
    let navigate = useNavigate();
    const handleNavigateFromHost = (e) => {
        navigate(e.detail.path);
    };
    useEffect(() => {
        addEventListener('changeRoute', handleNavigateFromHost);

        return function() {
            removeEventListener('changeRoute', handleNavigateFromHost);
        };
    }, []);
    addEventListener('changeRoute', (e) => console.log('e>>', e));

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
