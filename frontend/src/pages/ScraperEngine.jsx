import React, { useState, useEffect } from 'react';
import DashboardLayout from '../Layouts/DashboardLayout';
import { Globe, Cpu, List, Terminal, Loader2, Zap, AlertCircle, ShoppingCart } from 'lucide-react';

const ScraperEngine = () => {
    const [url, setUrl] = useState('');
    const [isScraping, setIsScraping] = useState(false);
    const [progress, setProgress] = useState(0);
    const [foundProduct, setFoundProduct] = useState(null);
    
    const [logs, setLogs] = useState([
        { id: 1, msg: "Engine standby. System ready.", type: "system" },
    ]);

    const addLog = (msg, type = "info") => {
        setLogs(prev => [{ id: Date.now(), msg, type }, ...prev].slice(0, 10));
    };

    const handleStartScrape = () => {
        if (!url) return;
        
        setIsScraping(true);
        setFoundProduct(null);
        setProgress(10);
        addLog(`Initiating request for URL...`, "process");

        setTimeout(() => {
            setProgress(40);
            addLog("Rotating IP address via Mumbai Proxy Cluster...", "process");
        }, 800);

        setTimeout(() => {
            setProgress(70);
            addLog("Bypassing bot detection. Extracting DOM elements...", "info");
        }, 1800);

        setTimeout(() => {
            setProgress(100);
            setIsScraping(false);
            addLog("Parsing successful. Product added to staging.", "success");
            setFoundProduct({
                name: "Sony WH-1000XM5 Wireless Headphones",
                price: "₹24,990",
                image: "https://m.media-amazon.com/images/I/711g1waxWpL._SX522_.jpg"
            });
        }, 3000);
    };

    return (
        <DashboardLayout>
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
                
                {/* Header with Engine Status Badge */}
                <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-1">
                        <h1 className="text-2xl font-black text-slate-900 tracking-tight">Scraper Engine</h1>
                        <p className="text-slate-500 text-sm font-medium">Inject Amazon URLs to begin real-time price monitoring.</p>
                    </div>
                    <div className="flex items-center gap-2 bg-green-50 px-3 py-1 rounded-full border border-green-100">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-[10px] font-bold text-green-600 uppercase">Engine Online</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    
                    <div className="lg:col-span-2 space-y-6">
                        {/* URL Input Area */}
                        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden">
                            {isScraping && (
                                <div className="absolute top-0 left-0 h-1 bg-orange-500 transition-all duration-500" style={{ width: `${progress}%` }} />
                            )}
                            
                            <label className="block text-sm font-bold text-slate-700 mb-4">Product Source URL</label>
                            <div className="flex flex-col md:flex-row gap-3">
                                <div className="relative flex-1">
                                    <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300" />
                                    <input 
                                        type="text" 
                                        placeholder="Paste Amazon link here..."
                                        className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-sm focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all outline-none"
                                        value={url}
                                        onChange={(e) => setUrl(e.target.value)}
                                    />
                                </div>
                                <button 
                                    onClick={handleStartScrape}
                                    disabled={isScraping || !url}
                                    className="flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 text-white font-black rounded-2xl hover:bg-orange-600 transition-all shadow-xl disabled:opacity-50 disabled:bg-slate-300"
                                >
                                    {isScraping ? <Loader2 className="w-5 h-5 animate-spin" /> : <Zap className="w-5 h-5" />}
                                    Analyze
                                </button>
                            </div>
                        </div>

                        {foundProduct && (
                            <div className="bg-white p-4 rounded-3xl border-2 border-orange-100 shadow-xl shadow-orange-50/50 flex items-center gap-6 animate-in zoom-in-95 duration-300">
                                <div className="w-20 h-20 bg-slate-50 rounded-2xl p-2 border border-slate-100 shrink-0">
                                    <img src={foundProduct.image} alt="" className="w-full h-full object-contain mix-blend-multiply" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h4 className="font-bold text-slate-900 text-sm truncate">{foundProduct.name}</h4>
                                    <p className="text-orange-600 font-black text-lg">{foundProduct.price}</p>
                                </div>
                                <button className="mr-4 bg-orange-500 text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-orange-600 transition-all">
                                    Track Item
                                </button>
                            </div>
                        )}

                        {/* Terminal Log */}
                        <div className="bg-slate-900 rounded-3xl p-6 shadow-2xl border border-slate-800">
                            <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
                                <div className="flex items-center gap-2">
                                    <Terminal className="w-4 h-4 text-orange-500" />
                                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Live Output</span>
                                </div>
                                <span className="text-[9px] text-slate-600 font-mono">STDOUT_V2</span>
                            </div>
                            <div className="space-y-2 h-32 overflow-y-auto font-mono text-[11px] no-scrollbar">
                                {logs.map(log => (
                                    <div key={log.id} className="flex gap-3">
                                        <span className="text-slate-700 shrink-0">{new Date(log.id).toLocaleTimeString()}</span>
                                        <span className={log.type === 'process' ? 'text-blue-400' : log.type === 'success' ? 'text-green-400' : 'text-slate-400'}>
                                            {log.type === 'success' && '✓ '}
                                            {log.msg}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Side Info */}
                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
                            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2 text-sm">
                                <List className="w-4 h-4 text-orange-500" />
                                Optimization Tips
                            </h3>
                            <div className="space-y-3">
                                <div className="p-3 bg-slate-50 rounded-xl flex gap-3">
                                    <AlertCircle className="w-4 h-4 text-orange-400 shrink-0" />
                                    <p className="text-[11px] text-slate-500 leading-relaxed">Ensure the URL includes the <b>/dp/</b> or <b>/gp/</b> product identifier for faster parsing.</p>
                                </div>
                                <div className="p-3 bg-slate-50 rounded-xl flex gap-3">
                                    <ShoppingCart className="w-4 h-4 text-blue-400 shrink-0" />
                                    <p className="text-[11px] text-slate-500 leading-relaxed">Currently supporting Amazon India, US, and UK marketplaces.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-linear-to-br from-slate-800 to-slate-900 p-6 rounded-3xl text-white">
                            <Cpu className="w-8 h-8 mb-3 text-orange-500" />
                            <h4 className="font-bold text-base mb-1">Compute Capacity</h4>
                            <p className="text-slate-400 text-xs mb-4">Your current plan allows 5 simultaneous scraping threads.</p>
                            <div className="w-full bg-slate-700 h-1 rounded-full overflow-hidden">
                                <div className="bg-orange-500 h-full w-[20%]" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default ScraperEngine;