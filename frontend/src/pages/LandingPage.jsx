import React from 'react';
import { Download, BarChart3, ShieldCheck, Play, Copyright } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {

    const navigate = useNavigate();

    return (
        <div className="bg-[#F9FAFB] lg:h-screen lg:overflow-hidden font-sans text-slate-900 flex flex-col">
            <Navbar />
            <main className="flex-1 flex flex-col lg:justify-center items-center px-6 py-8 lg:py-0 overflow-y-auto lg:overflow-visible">
                <header className="max-w-5xl w-full text-center mb-12 lg:mb-16 shrink-0">
                    <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 lg:mb-8 leading-tight">
                        <span className="block lg:inline whitespace-nowrap">Get Amazon product data</span> <br className="hidden lg:block" />
                        <span className="text-orange-500">without the headache.</span>
                    </h1>

                    <p className="text-base lg:text-xl text-slate-500 mb-8 lg:mb-10 max-w-2xl mx-auto leading-relaxed">
                        The easiest way to track prices, monitor competitors, and export reviews into clean spreadsheets. No coding required.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button className="w-full sm:w-auto bg-orange-500 text-white px-8 lg:px-10 py-4 rounded-xl font-bold text-base lg:text-lg hover:bg-orange-600 transition-all shadow-lg shadow-orange-200 active:scale-95"
                            onClick={() => {
                                navigate('/register')
                            }}
                        >
                            Get started for free
                        </button>
                        <button className="w-full sm:w-auto bg-white text-slate-700 border border-slate-200 px-8 lg:px-10 py-4 rounded-xl font-bold text-base lg:text-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                            <Play className="w-4 h-4 fill-slate-700" /> Watch Demo
                        </button>
                    </div>
                </header>

                <section className="max-w-6xl w-full pb-10 lg:pb-0">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-12">
                        <div className="flex flex-col items-center text-center p-8 bg-white rounded-2xl border border-slate-100 shadow-sm">
                            <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                                <ShieldCheck className="w-7 h-7" />
                            </div>
                            <h3 className="text-lg font-bold mb-2">Anti-Block Tech</h3>
                            <p className="text-slate-500 text-sm">Automated proxies & CAPTCHA solving.</p>
                        </div>

                        <div className="flex flex-col items-center text-center p-8 bg-white rounded-2xl border border-slate-100 shadow-sm">
                            <div className="w-14 h-14 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center mb-4">
                                <Download className="w-7 h-7" />
                            </div>
                            <h3 className="text-lg font-bold mb-2">One-Click Export</h3>
                            <p className="text-slate-500 text-sm">Instant CSV, Excel, or JSON downloads.</p>
                        </div>

                        <div className="flex flex-col items-center text-center p-8 bg-white rounded-2xl border border-slate-100 shadow-sm">
                            <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-4">
                                <BarChart3 className="w-7 h-7" />
                            </div>
                            <h3 className="text-lg font-bold mb-2">Live Tracking</h3>
                            <p className="text-slate-500 text-sm">Monitor price drops in real-time.</p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default LandingPage;