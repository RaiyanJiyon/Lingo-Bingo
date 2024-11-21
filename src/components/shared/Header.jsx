import { Link, NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="navbar bg-[#1e0e5c] text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <NavLink to={"/"} className={({ isActive }) => isActive ? 'text-black font-bold underline' : 'text-black font-normal'}>Home</NavLink>
                        <NavLink to={"/start-learning"} className={({ isActive }) => isActive ? 'text-black font-bold underline' : 'text-black font-normal'}>Start Learning</NavLink>
                        <NavLink to={"/tutorials"} className={({ isActive }) => isActive ? 'text-black font-bold underline' : 'text-black font-normal'}>Tutorials</NavLink>
                        <NavLink to={"/about-us"} className={({ isActive }) => isActive ? 'text-black font-bold underline' : 'text-black font-normal'}>About Us</NavLink>
                    </ul>
                </div>
                <Link to={"/"} className="btn btn-ghost text-xl">Lingo Bingo</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-4">
                    <NavLink to={"/"} className={({ isActive }) => isActive ? 'font-bold underline' : 'font-normal'}>Home</NavLink>
                    <NavLink to={"/start-learning"} className={({ isActive }) => isActive ? 'font-bold underline' : 'font-normal'}>Start Learning</NavLink>
                    <NavLink to={"/tutorials"} className={({ isActive }) => isActive ? 'font-bold underline' : 'font-normal'}>Tutorials</NavLink>
                    <NavLink to={"/about-us"} className={({ isActive }) => isActive ? 'font-bold underline' : 'font-normal'}>About Us</NavLink>
                </ul>
            </div>
            <div className="navbar-end">
                <Link to={"/auth/login"} className="px-4 py-1 rounded-3xl bg-[#1e0e5c] text-white font-semibold border-2 border-[#7461be] hover:bg-white hover:text-black">Login</Link>
            </div>
        </div>
    );
};

export default Header;