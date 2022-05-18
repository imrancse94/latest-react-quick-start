import Sidebar from './../Partials/Sidebar';
import MobileMenu from './../Partials/MobileMenu';
import TopNavBar from './../Partials/TopNavBar';
import { Outlet } from 'react-router-dom';

function AppLayout() {
    return (
            <div className="py-5">
                <MobileMenu />
                <div className="flex">
                    <Sidebar />
                    <div className="content">
                        <TopNavBar/>
                        <Outlet />
                    </div>
                </div>
            </div>
    )
}

export default AppLayout;