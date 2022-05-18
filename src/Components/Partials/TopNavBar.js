import { useEffect, useState } from 'react';
import OnOutsiceClick from 'react-outclick';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeToken } from './../../Helper';
import { setlogout } from './../../Store/actions/auth';

function TopNavbar() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [profile, setProfile] = useState(false);
    const [isNotificationOpen, notificationOpen] = useState(false);

    const userLogout = (e) => {
        e.preventDefault();
        removeToken();
        dispatch(setlogout());
        navigate('/');
    }

    const userProfile = (e) => {
        e.preventDefault();
        setProfile(!profile);
        notificationOpen(false);
    }

    useEffect(() => {
        return () => {
            clearState();
        }
    }, [])

    const clearState = () => {
        setProfile(false);
        notificationOpen(false);
    }

    return (
        <OnOutsiceClick
            onOutsideClick={(e) => {
                clearState();
            }}>
            <div className="top-bar">
                <nav aria-label="breadcrumb" className="-intro-x mr-auto hidden sm:flex">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#">Application</a></li>
                        <li className="breadcrumb-item active" aria-current="page">
                            Dashboard
                        </li>
                    </ol>
                </nav>
                <div className="intro-x relative mr-3 sm:mr-6">
                    <div className="search hidden sm:block">
                        <input
                            type="text"
                            className="search__input form-control border-transparent"
                            placeholder="Search..."
                        />
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
                            className="feather feather-search search__icon dark:text-slate-500"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                    </div>
                    <a className="notification sm:hidden" href="#!">
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
                            className="feather feather-search notification__icon dark:text-slate-500"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                    </a>
                    <div className="search-result">
                        <div className="search-result__content">
                            <div className="search-result__content__title">Pages</div>
                            <div className="mb-5">
                                <a href="#!" className="flex items-center">
                                    <div
                                        className="w-8 h-8 bg-success/20 dark:bg-success/10 text-success flex items-center justify-center rounded-full"
                                    >
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
                                            className="feather feather-inbox w-4 h-4"
                                        >
                                            <polyline
                                                points="22 12 16 12 14 15 10 15 8 12 2 12"
                                            ></polyline>
                                            <path
                                                d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
                                            ></path>
                                        </svg>
                                    </div>
                                    <div className="ml-3">Mail Settings</div>
                                </a>
                                <a href="#!" className="flex items-center mt-2">
                                    <div
                                        className="w-8 h-8 bg-pending/10 text-pending flex items-center justify-center rounded-full"
                                    >
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
                                            className="feather feather-users w-4 h-4"
                                        >
                                            <path
                                                d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
                                            ></path>
                                            <circle cx="9" cy="7" r="4"></circle>
                                            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                        </svg>
                                    </div>
                                    <div className="ml-3">Users &amp; Permissions</div>
                                </a>
                                <a href="#!" className="flex items-center mt-2">
                                    <div
                                        className="w-8 h-8 bg-primary/10 dark:bg-primary/20 text-primary/80 flex items-center justify-center rounded-full"
                                    >
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
                                            className="feather feather-credit-card w-4 h-4"
                                        >
                                            <rect
                                                x="1"
                                                y="4"
                                                width="22"
                                                height="16"
                                                rx="2"
                                                ry="2"
                                            ></rect>
                                            <line x1="1" y1="10" x2="23" y2="10"></line>
                                        </svg>
                                    </div>
                                    <div className="ml-3">Transactions Report</div>
                                </a>
                            </div>
                            <div className="search-result__content__title">Users</div>
                            <div className="mb-5">
                                <a href="#!" className="flex items-center mt-2">
                                    <div className="w-8 h-8 image-fit">
                                        <img
                                            alt="Rubick Tailwind HTML Admin Template"
                                            className="rounded-full"
                                            src="/img/profile-5.jpg"
                                        />
                                    </div>
                                    <div className="ml-3">Arnold Schwarzenegger</div>
                                    <div
                                        className="ml-auto w-48 truncate text-slate-500 text-xs text-right"
                                    >
                                        arnoldschwarzenegger@left4code.com
                                    </div>
                                </a>
                                <a href="#!" className="flex items-center mt-2">
                                    <div className="w-8 h-8 image-fit">
                                        <img
                                            alt="Rubick Tailwind HTML Admin Template"
                                            className="rounded-full"
                                            src="/img/profile-4.jpg"
                                        />
                                    </div>
                                    <div className="ml-3">Kevin Spacey</div>
                                    <div
                                        className="ml-auto w-48 truncate text-slate-500 text-xs text-right"
                                    >
                                        kevinspacey@left4code.com
                                    </div>
                                </a>
                                <a href="#!" className="flex items-center mt-2">
                                    <div className="w-8 h-8 image-fit">
                                        <img
                                            alt="Rubick Tailwind HTML Admin Template"
                                            className="rounded-full"
                                            src="/img/profile-3.jpg"
                                        />
                                    </div>
                                    <div className="ml-3">Kevin Spacey</div>
                                    <div
                                        className="ml-auto w-48 truncate text-slate-500 text-xs text-right"
                                    >
                                        kevinspacey@left4code.com
                                    </div>
                                </a>
                                <a href="#!" className="flex items-center mt-2">
                                    <div className="w-8 h-8 image-fit">
                                        <img
                                            alt="Rubick Tailwind HTML Admin Template"
                                            className="rounded-full"
                                            src="/img/profile-10.jpg"
                                        />
                                    </div>
                                    <div className="ml-3">Keanu Reeves</div>
                                    <div
                                        className="ml-auto w-48 truncate text-slate-500 text-xs text-right"
                                    >
                                        keanureeves@left4code.com
                                    </div>
                                </a>
                            </div>
                            <div className="search-result__content__title">Products</div>
                            <a href="#!" className="flex items-center mt-2">
                                <div className="w-8 h-8 image-fit">
                                    <img
                                        alt="Rubick Tailwind HTML Admin Template"
                                        className="rounded-full"
                                        src="/img/preview-4.jpg"
                                    />
                                </div>
                                <div className="ml-3">Nike Tanjun</div>
                                <div
                                    className="ml-auto w-48 truncate text-slate-500 text-xs text-right"
                                >
                                    Sport &amp; Outdoor
                                </div>
                            </a>
                            <a href="#!" className="flex items-center mt-2">
                                <div className="w-8 h-8 image-fit">
                                    <img
                                        alt="Rubick Tailwind HTML Admin Template"
                                        className="rounded-full"
                                        src="/img/preview-12.jpg"
                                    />
                                </div>
                                <div className="ml-3">Dell XPS 13</div>
                                <div
                                    className="ml-auto w-48 truncate text-slate-500 text-xs text-right"
                                >
                                    PC &amp; Laptop
                                </div>
                            </a>
                            <a href="#!" className="flex items-center mt-2">
                                <div className="w-8 h-8 image-fit">
                                    <img
                                        alt="Rubick Tailwind HTML Admin Template"
                                        className="rounded-full"
                                        src="/img/preview-3.jpg"
                                    />
                                </div>
                                <div className="ml-3">Nike Air Max 270</div>
                                <div
                                    className="ml-auto w-48 truncate text-slate-500 text-xs text-right"
                                >
                                    Sport &amp; Outdoor
                                </div>
                            </a>
                            <a href="#!" className="flex items-center mt-2">
                                <div className="w-8 h-8 image-fit">
                                    <img
                                        alt="Rubick Tailwind HTML Admin Template"
                                        className="rounded-full"
                                        src="/img/preview-8.jpg"
                                    />
                                </div>
                                <div className="ml-3">Apple MacBook Pro 13</div>
                                <div
                                    className="ml-auto w-48 truncate text-slate-500 text-xs text-right"
                                >
                                    PC &amp; Laptop
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="intro-x dropdown mr-auto sm:mr-6">
                    <div
                        onClick={() => {
                            notificationOpen(!isNotificationOpen);
                            setProfile(false);
                        }}
                        className="dropdown-toggle notification notification--bullet cursor-pointer"
                        role="button"
                        aria-expanded="false"
                        data-tw-toggle="dropdown"
                    >
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
                            className="feather feather-bell notification__icon dark:text-slate-500"
                        >
                            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                        </svg>
                    </div>
                    <div className={`notification-content pt-2 dropdown-menu absolute w-[350px] md:top-[-40px] md:right-[-90px] md:bottom-auto md:left-auto top-[-45px] left-[70px] m-0 translate-x-[-77.6px] translate-y-[64px] translate-z-0 ${isNotificationOpen ? 'show' : ''}`}>
                        <div className="notification-content__box dropdown-content">
                            <div className="notification-content__title">Notifications</div>
                            <div className="cursor-pointer relative flex items-center">
                                <div className="w-12 h-12 flex-none image-fit mr-1">
                                    <img
                                        alt="Rubick Tailwind HTML Admin Template"
                                        className="rounded-full"
                                        src="/img/profile-5.jpg"
                                    />
                                    <div
                                        className="w-3 h-3 bg-success absolute right-0 bottom-0 rounded-full border-2 border-white dark:border-darkmode-600"
                                    ></div>
                                </div>
                                <div className="ml-2 overflow-hidden">
                                    <div className="flex items-center">
                                        <a href="#!" className="font-medium truncate mr-5"
                                        >Arnold Schwarzenegger</a
                                        >
                                        <div
                                            className="text-xs text-slate-400 ml-auto whitespace-nowrap"
                                        >
                                            03:20 PM
                                        </div>
                                    </div>
                                    <div className="w-full truncate text-slate-500 mt-0.5">
                                        It is a long established fact that a reader will be
                                        distracted by the readable content of a page when looking
                                        at its layout. The point of using Lorem
                                    </div>
                                </div>
                            </div>
                            <div className="cursor-pointer relative flex items-center mt-5">
                                <div className="w-12 h-12 flex-none image-fit mr-1">
                                    <img
                                        alt="Rubick Tailwind HTML Admin Template"
                                        className="rounded-full"
                                        src="/img/profile-4.jpg"
                                    />
                                    <div
                                        className="w-3 h-3 bg-success absolute right-0 bottom-0 rounded-full border-2 border-white dark:border-darkmode-600"
                                    ></div>
                                </div>
                                <div className="ml-2 overflow-hidden">
                                    <div className="flex items-center">
                                        <a href="#!" className="font-medium truncate mr-5"
                                        >Kevin Spacey</a
                                        >
                                        <div
                                            className="text-xs text-slate-400 ml-auto whitespace-nowrap"
                                        >
                                            06:05 AM
                                        </div>
                                    </div>
                                    <div className="w-full truncate text-slate-500 mt-0.5">
                                        There are many variations of passages of Lorem Ipsum
                                        available, but the majority have suffered alteration in
                                        some form, by injected humour, or randomi
                                    </div>
                                </div>
                            </div>
                            <div className="cursor-pointer relative flex items-center mt-5">
                                <div className="w-12 h-12 flex-none image-fit mr-1">
                                    <img
                                        alt="Rubick Tailwind HTML Admin Template"
                                        className="rounded-full"
                                        src="/img/profile-3.jpg"
                                    />
                                    <div
                                        className="w-3 h-3 bg-success absolute right-0 bottom-0 rounded-full border-2 border-white dark:border-darkmode-600"
                                    ></div>
                                </div>
                                <div className="ml-2 overflow-hidden">
                                    <div className="flex items-center">
                                        <a href="#!" className="font-medium truncate mr-5"
                                        >Kevin Spacey</a
                                        >
                                        <div
                                            className="text-xs text-slate-400 ml-auto whitespace-nowrap"
                                        >
                                            01:10 PM
                                        </div>
                                    </div>
                                    <div className="w-full truncate text-slate-500 mt-0.5">
                                        Lorem Ipsum is simply dummy text of the printing and
                                        typesetting industry. Lorem Ipsum has been the industry's
                                        standard dummy text ever since the 1500
                                    </div>
                                </div>
                            </div>
                            <div className="cursor-pointer relative flex items-center mt-5">
                                <div className="w-12 h-12 flex-none image-fit mr-1">
                                    <img
                                        alt="Rubick Tailwind HTML Admin Template"
                                        className="rounded-full"
                                        src="/img/profile-10.jpg"
                                    />
                                    <div
                                        className="w-3 h-3 bg-success absolute right-0 bottom-0 rounded-full border-2 border-white dark:border-darkmode-600"
                                    ></div>
                                </div>
                                <div className="ml-2 overflow-hidden">
                                    <div className="flex items-center">
                                        <a href="#!" className="font-medium truncate mr-5"
                                        >Keanu Reeves</a
                                        >
                                        <div
                                            className="text-xs text-slate-400 ml-auto whitespace-nowrap"
                                        >
                                            05:09 AM
                                        </div>
                                    </div>
                                    <div className="w-full truncate text-slate-500 mt-0.5">
                                        It is a long established fact that a reader will be
                                        distracted by the readable content of a page when looking
                                        at its layout. The point of using Lorem
                                    </div>
                                </div>
                            </div>
                            <div className="cursor-pointer relative flex items-center mt-5">
                                <div className="w-12 h-12 flex-none image-fit mr-1">
                                    <img
                                        alt="Rubick Tailwind HTML Admin Template"
                                        className="rounded-full"
                                        src="/img/profile-6.jpg"
                                    />
                                    <div
                                        className="w-3 h-3 bg-success absolute right-0 bottom-0 rounded-full border-2 border-white dark:border-darkmode-600"
                                    ></div>
                                </div>
                                <div className="ml-2 overflow-hidden">
                                    <div className="flex items-center">
                                        <a href="#!" className="font-medium truncate mr-5"
                                        >John Travolta</a
                                        >
                                        <div
                                            className="text-xs text-slate-400 ml-auto whitespace-nowrap"
                                        >
                                            01:10 PM
                                        </div>
                                    </div>
                                    <div className="w-full truncate text-slate-500 mt-0.5">
                                        There are many variations of passages of Lorem Ipsum
                                        available, but the majority have suffered alteration in
                                        some form, by injected humour, or randomi
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="intro-x dropdown w-8 h-8">
                    <div
                        onClick={userProfile}
                        className="dropdown-toggle w-8 h-8 rounded-full overflow-hidden shadow-lg image-fit zoom-in"
                        role="button"
                        aria-expanded="true"
                        data-tw-toggle="dropdown"
                    >
                        <img
                            alt="Rubick Tailwind HTML Admin Template"
                            src="/img/profile-8.jpg"
                        />
                    </div>
                    <div className={profile ? 'dropdown-menu w-56 show userprofile-area sm:relative' : 'dropdown-menu w-56'} data-popper-placement="bottom-end">
                        <ul className="dropdown-content bg-primary text-white">
                            <li className="p-2">
                                <div className="font-medium">Arnold Schwarzenegger</div>
                                <div className="text-xs text-white/70 mt-0.5 dark:text-slate-500">
                                    Frontend Engineer
                                </div>
                            </li>
                            <li>
                                <hr className="dropdown-divider border-white/[0.08]" />
                            </li>
                            <li>
                                <a href="#!" className="dropdown-item hover:bg-white/5">
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
                                        className="feather feather-user w-4 h-4 mr-2"
                                    >
                                        <path
                                            d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                                        ></path>
                                        <circle cx="12" cy="7" r="4"></circle>
                                    </svg>
                                    Profile
                                </a>
                            </li>
                            <li>
                                <a href="#!" className="dropdown-item hover:bg-white/5">
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
                                        className="feather feather-edit w-4 h-4 mr-2"
                                    >
                                        <path
                                            d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                                        ></path>
                                        <path
                                            d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"
                                        ></path>
                                    </svg>
                                    Add Account
                                </a>
                            </li>
                            <li>
                                <a href="#!" className="dropdown-item hover:bg-white/5">
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
                                        className="feather feather-lock w-4 h-4 mr-2"
                                    >
                                        <rect
                                            x="3"
                                            y="11"
                                            width="18"
                                            height="11"
                                            rx="2"
                                            ry="2"
                                        ></rect>
                                        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                                    </svg>
                                    Reset Password
                                </a>
                            </li>
                            <li>
                                <a href="#!" className="dropdown-item hover:bg-white/5">
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
                                        className="feather feather-help-circle w-4 h-4 mr-2"
                                    >
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                                        <line x1="12" y1="17" x2="12.01" y2="17"></line>
                                    </svg>
                                    Help
                                </a>
                            </li>
                            <li>
                                <hr className="dropdown-divider border-white/[0.08]" />
                            </li>
                            <li>
                                <a onClick={userLogout} href="#" className="dropdown-item hover:bg-white/5">
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
                                        className="feather feather-toggle-right w-4 h-4 mr-2"
                                    >
                                        <rect
                                            x="1"
                                            y="5"
                                            width="22"
                                            height="14"
                                            rx="7"
                                            ry="7"
                                        ></rect>
                                        <circle cx="16" cy="12" r="3"></circle>
                                    </svg>
                                    Logout
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </OnOutsiceClick>
    )
}

export default TopNavbar;