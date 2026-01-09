import React from 'react';
import {
    Home,
    BarChart2,
    Layers,
    Settings,
    LogOut,
    Search,
    Zap
} from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { logout } from '../../services/api.service';
// import { logout } from "../../context/AuthContext";



const DashboardSideBar = ({ isOpen, toggleSidebar }) => {
    const { logoutUser } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const menuItems = [
        { name: 'Dashboard', icon: Home, path: '/dashboard' },
        { name: 'Analytics', icon: BarChart2, path: '/analytics' },
        { name: 'My Tracks', icon: Layers, path: '/tracks' },
        { name: 'Scraper Engine', icon: Zap, path: '/scraper' },
        { name: 'Settings', icon: Settings, path: '/settings' },
    ];

    const handleNavigation = (path) => {
        navigate(path);
        if (window.innerWidth < 1024) {
            toggleSidebar();
        }
    };

    const handleLogout = async () => {
        try {
            await logout();
            logoutUser();
            navigate("/login");
        } catch (err) {
            console.error("Logout failed", err);
        }
    };


    return (
        <>

            {isOpen && (
                <div
                    className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-40 lg:hidden"
                    onClick={toggleSidebar}
                />
            )}

            <aside className={`
                fixed lg:static inset-y-0 left-0 z-50
                w-72 bg-white border-r border-slate-100
                transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}
                lg:translate-x-0 transition-transform duration-300 ease-in-out
                flex flex-col
            `}>

                <div className="h-20 flex items-center px-8">
                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 bg-orange-500 rounded-xl flex items-center justify-center shadow-lg shadow-orange-200">
                            <Search className="text-white w-5 h-5" />
                        </div>
                        <span className="text-xl font-black tracking-tight text-slate-900">
                            Amz<span className="text-orange-500">Flow</span>
                        </span>
                    </div>
                </div>

                <nav className="flex-1 px-4 py-6 space-y-2">
                    {menuItems.map((item) => {
                        const isActive = location.pathname === item.path;
                        return (
                            <button
                                key={item.name}
                                onClick={() => handleNavigation(item.path)}
                                className={`
                                    w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-bold transition-all group
                                    ${isActive
                                        ? 'bg-orange-50 text-orange-600 shadow-sm shadow-orange-100/50'
                                        : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'}
                                `}
                            >
                                <div className="flex items-center gap-3">
                                    <item.icon className={`w-5 h-5 transition-colors ${isActive ? 'text-orange-500' : 'text-slate-400 group-hover:text-slate-600'}`} />
                                    {item.name}
                                </div>
                                {isActive && (
                                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse"></div>
                                )}
                            </button>
                        );
                    })}
                </nav>

                <div className="p-4 border-t border-slate-50">
                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-rose-500 font-bold text-sm transition-colors rounded-xl hover:bg-rose-50/50"
                    >
                        <LogOut className="w-5 h-5" />
                        Logout
                    </button>
                </div>
            </aside>
        </>
    );
};

export default DashboardSideBar;