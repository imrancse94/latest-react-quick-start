function MobileMenu(){
    return (
        <div className="mobile-menu md:hidden">
                <div className="mobile-menu-bar">
                    <a href="" className="flex mr-auto">
                        <img
                            alt="Rubick Tailwind HTML Admin Template"
                            className="w-6"
                            src="/img/logo.svg"
                        />
                    </a>
                    <a href="#!" id="mobile-menu-toggler">
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
                            className="feather feather-bar-chart-2 w-8 h-8 text-white transform -rotate-90"
                        >
                            <line x1="18" y1="20" x2="18" y2="10"></line>
                            <line x1="12" y1="20" x2="12" y2="4"></line>
                            <line x1="6" y1="20" x2="6" y2="14"></line>
                        </svg>
                    </a>
                </div>
                <ul className="border-t border-white/[0.08] py-5 hidden">
                    <li>
                        <a href="#!" className="menu menu--active">
                            <div className="menu__icon">
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
                                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                                </svg>
                            </div>
                            <div className="menu__title">
                                Dashboard
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
                                    className="feather feather-chevron-down menu__sub-icon transform rotate-180"
                                >
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </div>
                        </a>
                        <ul className="menu__sub-open">
                            <li>
                                <a href="index.html" className="menu menu--active">
                                    <div className="menu__icon">
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
                                    <div className="menu__title">Overview 1</div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-light-dashboard-overview-2.html" className="menu">
                                    <div className="menu__icon">
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
                                    <div className="menu__title">Overview 2</div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-light-dashboard-overview-3.html" className="menu">
                                    <div className="menu__icon">
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
                                    <div className="menu__title">Overview 3</div>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#!" className="menu">
                            <div className="menu__icon">
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
                                    className="feather feather-box"
                                >
                                    <path
                                        d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
                                    ></path>
                                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                                    <line x1="12" y1="22.08" x2="12" y2="12"></line>
                                </svg>
                            </div>
                            <div className="menu__title">
                                Menu Layout
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
                                    className="feather feather-chevron-down menu__sub-icon"
                                >
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </div>
                        </a>
                        <ul className="">
                            <li>
                                <a href="index.html" className="menu menu--active">
                                    <div className="menu__icon">
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
                                    <div className="menu__title">Side Menu</div>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="simple-menu-light-dashboard-overview-1.html"
                                    className="menu menu--active"
                                >
                                    <div className="menu__icon">
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
                                    <div className="menu__title">Simple Menu</div>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="top-menu-light-dashboard-overview-1.html"
                                    className="menu menu--active"
                                >
                                    <div className="menu__icon">
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
                                    <div className="menu__title">Top Menu</div>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="side-menu-light-inbox.html" className="menu">
                            <div className="menu__icon">
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
                                    className="feather feather-inbox"
                                >
                                    <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
                                    <path
                                        d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
                                    ></path>
                                </svg>
                            </div>
                            <div className="menu__title">Inbox</div>
                        </a>
                    </li>
                    <li>
                        <a href="side-menu-light-file-manager.html" className="menu">
                            <div className="menu__icon">
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
                                    className="feather feather-hard-drive"
                                >
                                    <line x1="22" y1="12" x2="2" y2="12"></line>
                                    <path
                                        d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
                                    ></path>
                                    <line x1="6" y1="16" x2="6.01" y2="16"></line>
                                    <line x1="10" y1="16" x2="10.01" y2="16"></line>
                                </svg>
                            </div>
                            <div className="menu__title">File Manager</div>
                        </a>
                    </li>
                    <li>
                        <a href="side-menu-light-point-of-sale.html" className="menu">
                            <div className="menu__icon">
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
                                    className="feather feather-credit-card"
                                >
                                    <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                                    <line x1="1" y1="10" x2="23" y2="10"></line>
                                </svg>
                            </div>
                            <div className="menu__title">Point of Sale</div>
                        </a>
                    </li>
                    <li>
                        <a href="side-menu-light-chat.html" className="menu">
                            <div className="menu__icon">
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
                                    className="feather feather-message-square"
                                >
                                    <path
                                        d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                                    ></path>
                                </svg>
                            </div>
                            <div className="menu__title">Chat</div>
                        </a>
                    </li>
                    <li>
                        <a href="side-menu-light-post.html" className="menu">
                            <div className="menu__icon">
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
                                    className="feather feather-file-text"
                                >
                                    <path
                                        d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                                    ></path>
                                    <polyline points="14 2 14 8 20 8"></polyline>
                                    <line x1="16" y1="13" x2="8" y2="13"></line>
                                    <line x1="16" y1="17" x2="8" y2="17"></line>
                                    <polyline points="10 9 9 9 8 9"></polyline>
                                </svg>
                            </div>
                            <div className="menu__title">Post</div>
                        </a>
                    </li>
                    <li>
                        <a href="side-menu-light-calendar.html" className="menu">
                            <div className="menu__icon">
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
                                    className="feather feather-calendar"
                                >
                                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                    <line x1="16" y1="2" x2="16" y2="6"></line>
                                    <line x1="8" y1="2" x2="8" y2="6"></line>
                                    <line x1="3" y1="10" x2="21" y2="10"></line>
                                </svg>
                            </div>
                            <div className="menu__title">Calendar</div>
                        </a>
                    </li>
                    <li className="menu__devider my-6"></li>
                    <li>
                        <a href="#!" className="menu">
                            <div className="menu__icon">
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
                                    className="feather feather-edit"
                                >
                                    <path
                                        d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                                    ></path>
                                    <path
                                        d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"
                                    ></path>
                                </svg>
                            </div>
                            <div className="menu__title">
                                Crud
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
                                    className="feather feather-chevron-down menu__sub-icon"
                                >
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </div>
                        </a>
                        <ul className="">
                            <li>
                                <a href="side-menu-light-crud-data-list.html" className="menu">
                                    <div className="menu__icon">
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
                                    <div className="menu__title">Data List</div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-light-crud-form.html" className="menu">
                                    <div className="menu__icon">
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
                                    <div className="menu__title">Form</div>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#!" className="menu">
                            <div className="menu__icon">
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
                                    className="feather feather-users"
                                >
                                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="9" cy="7" r="4"></circle>
                                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                </svg>
                            </div>
                            <div className="menu__title">
                                Users
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
                                    className="feather feather-chevron-down menu__sub-icon"
                                >
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </div>
                        </a>
                        <ul className="">
                            <li>
                                <a href="side-menu-light-users-layout-1.html" className="menu">
                                    <div className="menu__icon">
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
                                    <div className="menu__title">Layout 1</div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-light-users-layout-2.html" className="menu">
                                    <div className="menu__icon">
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
                                    <div className="menu__title">Layout 2</div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-light-users-layout-3.html" className="menu">
                                    <div className="menu__icon">
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
                                    <div className="menu__title">Layout 3</div>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#!" className="menu">
                            <div className="menu__icon">
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
                                    className="feather feather-trello"
                                >
                                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                    <rect x="7" y="7" width="3" height="9"></rect>
                                    <rect x="14" y="7" width="3" height="5"></rect>
                                </svg>
                            </div>
                            <div className="menu__title">
                                Profile
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
                                    className="feather feather-chevron-down menu__sub-icon"
                                >
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </div>
                        </a>
                        <ul className="">
                            <li>
                                <a href="side-menu-light-profile-overview-1.html" className="menu">
                                    <div className="menu__icon">
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
                                    <div className="menu__title">Overview 1</div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-light-profile-overview-2.html" className="menu">
                                    <div className="menu__icon">
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
                                    <div className="menu__title">Overview 2</div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-light-profile-overview-3.html" className="menu">
                                    <div className="menu__icon">
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
                                    <div className="menu__title">Overview 3</div>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#!" className="menu">
                            <div className="menu__icon">
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
                                    className="feather feather-layout"
                                >
                                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                    <line x1="3" y1="9" x2="21" y2="9"></line>
                                    <line x1="9" y1="21" x2="9" y2="9"></line>
                                </svg>
                            </div>
                            <div className="menu__title">
                                Pages
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
                                    className="feather feather-chevron-down menu__sub-icon"
                                >
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </div>
                        </a>
                        <ul className="">
                            <li>
                                <a href="#!" className="menu">
                                    <div className="menu__icon">
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
                                    <div className="menu__title">
                                        Wizards
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
                                            className="feather feather-chevron-down menu__sub-icon"
                                        >
                                            <polyline points="6 9 12 15 18 9"></polyline>
                                        </svg>
                                    </div>
                                </a>
                                <ul className="">
                                    <li>
                                        <a href="side-menu-light-wizard-layout-1.html" className="menu">
                                            <div className="menu__icon">
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
                                                    className="feather feather-zap"
                                                >
                                                    <polygon
                                                        points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"
                                                    ></polygon>
                                                </svg>
                                            </div>
                                            <div className="menu__title">Layout 1</div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="side-menu-light-wizard-layout-2.html" className="menu">
                                            <div className="menu__icon">
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
                                                    className="feather feather-zap"
                                                >
                                                    <polygon
                                                        points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"
                                                    ></polygon>
                                                </svg>
                                            </div>
                                            <div className="menu__title">Layout 2</div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="side-menu-light-wizard-layout-3.html" className="menu">
                                            <div className="menu__icon">
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
                                                    className="feather feather-zap"
                                                >
                                                    <polygon
                                                        points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"
                                                    ></polygon>
                                                </svg>
                                            </div>
                                            <div className="menu__title">Layout 3</div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#!" className="menu">
                                    <div className="menu__icon">
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
                                    <div className="menu__title">
                                        Blog
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
                                            className="feather feather-chevron-down menu__sub-icon"
                                        >
                                            <polyline points="6 9 12 15 18 9"></polyline>
                                        </svg>
                                    </div>
                                </a>
                                <ul className="">
                                    <li>
                                        <a href="side-menu-light-blog-layout-1.html" className="menu">
                                            <div className="menu__icon">
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
                                                    className="feather feather-zap"
                                                >
                                                    <polygon
                                                        points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"
                                                    ></polygon>
                                                </svg>
                                            </div>
                                            <div className="menu__title">Layout 1</div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="side-menu-light-blog-layout-2.html" className="menu">
                                            <div className="menu__icon">
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
                                                    className="feather feather-zap"
                                                >
                                                    <polygon
                                                        points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"
                                                    ></polygon>
                                                </svg>
                                            </div>
                                            <div className="menu__title">Layout 2</div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="side-menu-light-blog-layout-3.html" className="menu">
                                            <div className="menu__icon">
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
                                                    className="feather feather-zap"
                                                >
                                                    <polygon
                                                        points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"
                                                    ></polygon>
                                                </svg>
                                            </div>
                                            <div className="menu__title">Layout 3</div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#!" className="menu">
                                    <div className="menu__icon">
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
                                    <div className="menu__title">
                                        Pricing
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
                                            className="feather feather-chevron-down menu__sub-icon"
                                        >
                                            <polyline points="6 9 12 15 18 9"></polyline>
                                        </svg>
                                    </div>
                                </a>
                                <ul className="">
                                    <li>
                                        <a href="side-menu-light-pricing-layout-1.html" className="menu">
                                            <div className="menu__icon">
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
                                                    className="feather feather-zap"
                                                >
                                                    <polygon
                                                        points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"
                                                    ></polygon>
                                                </svg>
                                            </div>
                                            <div className="menu__title">Layout 1</div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="side-menu-light-pricing-layout-2.html" className="menu">
                                            <div className="menu__icon">
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
                                                    className="feather feather-zap"
                                                >
                                                    <polygon
                                                        points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"
                                                    ></polygon>
                                                </svg>
                                            </div>
                                            <div className="menu__title">Layout 2</div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#!" className="menu">
                                    <div className="menu__icon">
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
                                    <div className="menu__title">
                                        Invoice
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
                                            className="feather feather-chevron-down menu__sub-icon"
                                        >
                                            <polyline points="6 9 12 15 18 9"></polyline>
                                        </svg>
                                    </div>
                                </a>
                                <ul className="">
                                    <li>
                                        <a href="side-menu-light-invoice-layout-1.html" className="menu">
                                            <div className="menu__icon">
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
                                                    className="feather feather-zap"
                                                >
                                                    <polygon
                                                        points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"
                                                    ></polygon>
                                                </svg>
                                            </div>
                                            <div className="menu__title">Layout 1</div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="side-menu-light-invoice-layout-2.html" className="menu">
                                            <div className="menu__icon">
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
                                                    className="feather feather-zap"
                                                >
                                                    <polygon
                                                        points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"
                                                    ></polygon>
                                                </svg>
                                            </div>
                                            <div className="menu__title">Layout 2</div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#!" className="menu">
                                    <div className="menu__icon">
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
                                    <div className="menu__title">
                                        FAQ
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
                                            className="feather feather-chevron-down menu__sub-icon"
                                        >
                                            <polyline points="6 9 12 15 18 9"></polyline>
                                        </svg>
                                    </div>
                                </a>
                                <ul className="">
                                    <li>
                                        <a href="side-menu-light-faq-layout-1.html" className="menu">
                                            <div className="menu__icon">
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
                                                    className="feather feather-zap"
                                                >
                                                    <polygon
                                                        points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"
                                                    ></polygon>
                                                </svg>
                                            </div>
                                            <div className="menu__title">Layout 1</div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="side-menu-light-faq-layout-2.html" className="menu">
                                            <div className="menu__icon">
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
                                                    className="feather feather-zap"
                                                >
                                                    <polygon
                                                        points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"
                                                    ></polygon>
                                                </svg>
                                            </div>
                                            <div className="menu__title">Layout 2</div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="side-menu-light-faq-layout-3.html" className="menu">
                                            <div className="menu__icon">
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
                                                    className="feather feather-zap"
                                                >
                                                    <polygon
                                                        points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"
                                                    ></polygon>
                                                </svg>
                                            </div>
                                            <div className="menu__title">Layout 3</div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="login-light-login.html" className="menu">
                                    <div className="menu__icon">
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
                                    <div className="menu__title">Login</div>
                                </a>
                            </li>
                            <li>
                                <a href="login-light-register.html" className="menu">
                                    <div className="menu__icon">
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
                                    <div className="menu__title">Register</div>
                                </a>
                            </li>
                            <li>
                                <a href="main-light-error-page.html" className="menu">
                                    <div className="menu__icon">
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
                                    <div className="menu__title">Error Page</div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-light-update-profile.html" className="menu">
                                    <div className="menu__icon">
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
                                    <div className="menu__title">Update profile</div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-light-change-password.html" className="menu">
                                    <div className="menu__icon">
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
                                    <div className="menu__title">Change Password</div>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="menu__devider my-6"></li>
                    <li>
                        <a href="#!" className="menu">
                            <div className="menu__icon">
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
                                    className="feather feather-inbox"
                                >
                                    <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
                                    <path
                                        d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
                                    ></path>
                                </svg>
                            </div>
                            <div className="menu__title">
                                Components
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
                                    className="feather feather-chevron-down menu__sub-icon"
                                >
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </div>
                        </a>
                        <ul className="">
                            <li>
                                <a href="#!" className="menu">
                                    <div className="menu__icon">
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
                                    <div className="menu__title">
                                        Table
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
                                            className="feather feather-chevron-down menu__sub-icon"
                                        >
                                            <polyline points="6 9 12 15 18 9"></polyline>
                                        </svg>
                                    </div>
                                </a>
                                <ul className="">
                                    <li>
                                        <a href="side-menu-light-regular-table.html" className="menu">
                                            <div className="menu__icon">
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
                                                    className="feather feather-zap"
                                                >
                                                    <polygon
                                                        points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"
                                                    ></polygon>
                                                </svg>
                                            </div>
                                            <div className="menu__title">Regular Table</div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="side-menu-light-tabulator.html" className="menu">
                                            <div className="menu__icon">
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
                                                    className="feather feather-zap"
                                                >
                                                    <polygon
                                                        points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"
                                                    ></polygon>
                                                </svg>
                                            </div>
                                            <div className="menu__title">Tabulator</div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#!" className="menu">
                                    <div className="menu__icon">
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
                                    <div className="menu__title">
                                        Overlay
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
                                            className="feather feather-chevron-down menu__sub-icon"
                                        >
                                            <polyline points="6 9 12 15 18 9"></polyline>
                                        </svg>
                                    </div>
                                </a>
                                <ul className="">
                                    <li>
                                        <a href="side-menu-light-modal.html" className="menu">
                                            <div className="menu__icon">
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
                                                    className="feather feather-zap"
                                                >
                                                    <polygon
                                                        points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"
                                                    ></polygon>
                                                </svg>
                                            </div>
                                            <div className="menu__title">Modal</div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="side-menu-light-slide-over.html" className="menu">
                                            <div className="menu__icon">
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
                                                    className="feather feather-zap"
                                                >
                                                    <polygon
                                                        points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"
                                                    ></polygon>
                                                </svg>
                                            </div>
                                            <div className="menu__title">Slide Over</div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="side-menu-light-notification.html" className="menu">
                                            <div className="menu__icon">
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
                                                    className="feather feather-zap"
                                                >
                                                    <polygon
                                                        points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"
                                                    ></polygon>
                                                </svg>
                                            </div>
                                            <div className="menu__title">Notification</div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="side-menu-light-accordion.html" className="menu">
                                    <div className="menu__icon">
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
                                    <div className="menu__title">Accordion</div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-light-button.html" className="menu">
                                    <div className="menu__icon">
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
                                    <div className="menu__title">Button</div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-light-alert.html" className="menu">
                                    <div className="menu__icon">
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
                                    <div className="menu__title">Alert</div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-light-progress-bar.html" className="menu">
                                    <div className="menu__icon">
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
                                    <div className="menu__title">Progress Bar</div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-light-tooltip.html" className="menu">
                                    <div className="menu__icon">
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
                                    <div className="menu__title">Tooltip</div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-light-dropdown.html" className="menu">
                                    <div className="menu__icon">
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
                                    <div className="menu__title">Dropdown</div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-light-typography.html" className="menu">
                                    <div className="menu__icon">
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
                                    <div className="menu__title">Typography</div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-light-icon.html" className="menu">
                                    <div className="menu__icon">
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
                                    <div className="menu__title">Icon</div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-light-loading-icon.html" className="menu">
                                    <div className="menu__icon">
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
                                    <div className="menu__title">Loading Icon</div>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#!" className="menu">
                            <div className="menu__icon">
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
                                    className="feather feather-sidebar"
                                >
                                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                    <line x1="9" y1="3" x2="9" y2="21"></line>
                                </svg>
                            </div>
                            <div className="menu__title">
                                Forms
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
                                    className="feather feather-chevron-down menu__sub-icon"
                                >
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </div>
                        </a>
                        <ul className="">
                            <li>
                                <a href="side-menu-light-regular-form.html" className="menu">
                                    <div className="menu__icon">
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
                                    <div className="menu__title">Regular Form</div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-light-datepicker.html" className="menu">
                                    <div className="menu__icon">
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
                                    <div className="menu__title">Datepicker</div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-light-tom-select.html" className="menu">
                                    <div className="menu__icon">
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
                                    <div className="menu__title">Tom Select</div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-light-file-upload.html" className="menu">
                                    <div className="menu__icon">
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
                                    <div className="menu__title">File Upload</div>
                                </a>
                            </li>
                            <li>
                                <a href="#!" className="menu">
                                    <div className="menu__icon">
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
                                    <div className="menu__title">
                                        Wysiwyg Editor
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
                                            className="feather feather-chevron-down menu__sub-icon"
                                        >
                                            <polyline points="6 9 12 15 18 9"></polyline>
                                        </svg>
                                    </div>
                                </a>
                                <ul className="">
                                    <li>
                                        <a
                                            href="side-menu-light-wysiwyg-editor-classic.html"
                                            className="menu"
                                        >
                                            <div className="menu__icon">
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
                                                    className="feather feather-zap"
                                                >
                                                    <polygon
                                                        points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"
                                                    ></polygon>
                                                </svg>
                                            </div>
                                            <div className="menu__title">Classic</div>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="side-menu-light-wysiwyg-editor-inline.html"
                                            className="menu"
                                        >
                                            <div className="menu__icon">
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
                                                    className="feather feather-zap"
                                                >
                                                    <polygon
                                                        points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"
                                                    ></polygon>
                                                </svg>
                                            </div>
                                            <div className="menu__title">Inline</div>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="side-menu-light-wysiwyg-editor-balloon.html"
                                            className="menu"
                                        >
                                            <div className="menu__icon">
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
                                                    className="feather feather-zap"
                                                >
                                                    <polygon
                                                        points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"
                                                    ></polygon>
                                                </svg>
                                            </div>
                                            <div className="menu__title">Balloon</div>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="side-menu-light-wysiwyg-editor-balloon-block.html"
                                            className="menu"
                                        >
                                            <div className="menu__icon">
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
                                                    className="feather feather-zap"
                                                >
                                                    <polygon
                                                        points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"
                                                    ></polygon>
                                                </svg>
                                            </div>
                                            <div className="menu__title">Balloon Block</div>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="side-menu-light-wysiwyg-editor-document.html"
                                            className="menu"
                                        >
                                            <div className="menu__icon">
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
                                                    className="feather feather-zap"
                                                >
                                                    <polygon
                                                        points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"
                                                    ></polygon>
                                                </svg>
                                            </div>
                                            <div className="menu__title">Document</div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="side-menu-light-validation.html" className="menu">
                                    <div className="menu__icon">
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
                                    <div className="menu__title">Validation</div>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#!" className="menu">
                            <div className="menu__icon">
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
                                    className="feather feather-hard-drive"
                                >
                                    <line x1="22" y1="12" x2="2" y2="12"></line>
                                    <path
                                        d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
                                    ></path>
                                    <line x1="6" y1="16" x2="6.01" y2="16"></line>
                                    <line x1="10" y1="16" x2="10.01" y2="16"></line>
                                </svg>
                            </div>
                            <div className="menu__title">
                                Widgets
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
                                    className="feather feather-chevron-down menu__sub-icon"
                                >
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </div>
                        </a>
                        <ul className="">
                            <li>
                                <a href="side-menu-light-chart.html" className="menu">
                                    <div className="menu__icon">
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
                                    <div className="menu__title">Chart</div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-light-slider.html" className="menu">
                                    <div className="menu__icon">
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
                                    <div className="menu__title">Slider</div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-light-image-zoom.html" className="menu">
                                    <div className="menu__icon">
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
                                    <div className="menu__title">Image Zoom</div>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
    );
}

export default MobileMenu;