import { Link, NavLink } from "react-router-dom";
import {useState} from 'react';
function Sidebar() {
    const list = [1,2,3,4,5,6,7,8,9,10];
    const [clicked, setClicked] = useState("0");
    const sideBarToggle = (index,e) => {
        e.preventDefault();
        if(clicked === index) {
            return setClicked("0")
        }
        setClicked(index)
    }

    return (
        <nav className="side-nav">
            <a href="" className="intro-x flex items-center pl-5 pt-4">
                <img
                    alt="Rubick Tailwind HTML Admin Template"
                    className="w-6"
                    src="/img/logo.svg"
                />
                <span className="hidden xl:block text-white text-lg ml-3"> Rubick </span>
            </a>
            <div className="side-nav__devider my-6"></div>
            <ul>
                {
                    list.map((item, index) => {
                        return(
                            <li key={index}>
                            <a onClick={(e) => sideBarToggle(index,e)} href="#!" className={clicked === index ? 'side-menu side-menu--active side-menu--open':'side-menu'}>
                                <div className="side-menu__icon">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="feather feather-home"
                                    >
                                        <path
                                            d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
                                        ></path>
                                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                                    </svg>
                                </div>
                                <div className="side-menu__title">
                                    Dashboard
                                    <div className={clicked === index ? 'side-menu__sub-icon transform rotate-180':'side-menu__sub-icon'}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-chevron-down"
                                        >
                                            <polyline points="6 9 12 15 18 9"></polyline>
                                        </svg>
                                    </div>
                                </div>
                            </a>
                            <ul className={clicked === index ? 'side-menu__sub-open':''}>
                                <li>
                                    <Link to="about" className="side-menu side-menu--active">
                                        <div className="side-menu__icon">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="feather feather-activity"
                                            >
                                                <polyline
                                                    points="22 12 18 12 15 21 9 3 6 12 2 12"
                                                ></polyline>
                                            </svg>
                                        </div>
                                        <div className="side-menu__title">Overview 1</div>
                                    </Link>
                                </li>
                                <li>
                                    <a
                                        href="side-menu-light-dashboard-overview-2.html"
                                        className="side-menu"
                                    >
                                        <div className="side-menu__icon">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="feather feather-activity"
                                            >
                                                <polyline
                                                    points="22 12 18 12 15 21 9 3 6 12 2 12"
                                                ></polyline>
                                            </svg>
                                        </div>
                                        <div className="side-menu__title">Overview 2</div>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="side-menu-light-dashboard-overview-3.html"
                                        className="side-menu"
                                    >
                                        <div className="side-menu__icon">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="feather feather-activity"
                                            >
                                                <polyline
                                                    points="22 12 18 12 15 21 9 3 6 12 2 12"
                                                ></polyline>
                                            </svg>
                                        </div>
                                        <div className="side-menu__title">Overview 3</div>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        )
                    })
                }
               
                
            </ul>
        </nav>)
}

export default Sidebar;