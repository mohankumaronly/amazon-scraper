import React from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <nav className="max-w-7xl w-full mx-auto px-6 h-20 flex justify-between items-center shrink-0">
            <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 bg-orange-500 rounded-lg flex items-center justify-center shadow-md shadow-orange-200">
                    <Search className="text-white w-5 h-5" />
                </div>
                <span className="text-xl font-bold tracking-tight">AmzFlow</span>
            </div>
            <button className="text-sm font-semibold bg-white border border-slate-200 px-5 py-2.5 rounded-lg shadow-sm hover:bg-slate-50 transition-all"
            onClick={() => {
                navigate('/register')
            }}
            >
                Sign In
            </button>
        </nav>
    );
};

export default Navbar;