import React from 'react';
import { Home, ArrowLeft, SearchX } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AuthLayout from '../Layouts/AuthLayout';
import AuthButton from '../components/AuthButton';

const NotFoundPage = () => {
    const navigate = useNavigate();

    return (
        <AuthLayout
            title="Page not found"
            subtitle="The link you followed may be broken, or the page may have been removed."
        >
            <div className="flex flex-col items-center py-8">
                <div className="relative mb-10">
                    <h1 className="text-[120px] font-black text-slate-100 leading-none select-none">
                        404
                    </h1>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-white p-4 rounded-2xl shadow-xl border border-slate-50 rotate-3">
                            <SearchX className="w-12 h-12 text-orange-500 animate-pulse" />
                        </div>
                    </div>
                </div>
                <div className="text-center space-y-6 w-full">
                    <p className="text-slate-500 text-sm px-6">
                        Oops! It looks like you've wandered into uncharted territory.
                        Let's get you back on track.
                    </p>
                    <div className="space-y-3">
                        <AuthButton
                            icon={Home}
                            onClick={() => navigate('/')}
                        >
                            Back to Home
                        </AuthButton>
                        <button
                            onClick={() => navigate(-1)}
                            className="w-full py-3 flex items-center justify-center gap-2 text-sm font-bold text-slate-400 hover:text-orange-600 transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Go to Previous Page
                        </button>
                    </div>
                </div>
            </div>
            <div className="mt-12 text-center border-t border-slate-50 pt-6">
                <p className="text-[11px] text-slate-400 uppercase tracking-widest font-bold">
                    AmzFlow Error Reporting System
                </p>
            </div>
        </AuthLayout>
    );
};

export default NotFoundPage;