import {Link} from "react-router-dom";

const Layout = () =>{
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/post">Post User</Link>
                </li>
                <li>
                    <Link to="/get">Get all User</Link>
                </li>
            </ul>
        </nav>
    )
};

//結尾 打了才能被呼叫
export default Layout;