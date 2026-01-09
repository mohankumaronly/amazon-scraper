import React, { useState } from 'react';
import DashboardLayout from '../Layouts/DashboardLayout';
import TrackedItemTable from '../components/DashboardComponents/TrackedItemTable';
import { SortAsc, Download, Tag, ArrowDownCircle, Target, Box } from 'lucide-react';

const demoProducts = [
    {
        name: "Sony WH-1000XM5 Wireless Noise Cancelling Headphones",
        asin: "B09XS7GNLJ",
        image: "https://m.media-amazon.com/images/I/711g1waxWpL._SX522_.jpg",
        currentPrice: 24990,
        targetPrice: 22000,
        category: "Electronics"
    },
    {
        name: "Apple MacBook Pro Laptop M3 Chip",
        asin: "B0CM5L169H",
        image: "https://m.media-amazon.com/images/I/51nwwZkt6gL._SX300_SY300_QL70_FMwebp_.jpg",
        currentPrice: 154900,
        targetPrice: 154900,
        category: "Electronics"
    },
    {
        name: "Nike Air Max Pulse Roam",
        asin: "B0CLS12345",
        image: "https://m.media-amazon.com/images/I/61m0f5V1Y6L._SY695_.jpg",
        currentPrice: 8000,
        targetPrice: 9000, 
        category: "Fashion"
    }
];

const MyTracks = () => {
    const [activeTab, setActiveTab] = useState('All Items');
    
    const totalItems = demoProducts.length;
    const priceDrops = demoProducts.filter(p => p.currentPrice < p.targetPrice).length;
    const atTarget = demoProducts.filter(p => p.currentPrice === p.targetPrice).length;

    const getFilteredProducts = () => {
        if (activeTab === 'All Items') return demoProducts;
        if (activeTab === 'Price Dropped') return demoProducts.filter(p => p.currentPrice < p.targetPrice);
        if (activeTab === 'At Target') return demoProducts.filter(p => p.currentPrice <= p.targetPrice);
        return demoProducts.filter(p => p.category === activeTab);
    };

    const filteredData = getFilteredProducts();

    return (
        <DashboardLayout>
            <div className="space-y-7 animate-in fade-in slide-in-from-bottom-4 duration-700">
                
                {/* 1. Enhanced Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div className="space-y-1">
                        <div className="flex items-center gap-2 text-orange-500 mb-1">
                            <Tag className="w-4 h-4" />
                            <span className="text-[10px] font-bold uppercase tracking-wider">Inventory Management</span>
                        </div>
                        <h1 className="text-3xl font-black text-slate-900 tracking-tight">My Tracks</h1>
                        <p className="text-slate-500 text-sm font-medium">Monitoring {totalItems} active price streams.</p>
                    </div>
                    
                    <div className="flex items-center gap-3">
                        <button className="group flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-600 hover:border-orange-200 hover:text-orange-600 transition-all shadow-sm">
                            <SortAsc className="w-4 h-4 text-slate-400 group-hover:text-orange-500" />
                            Sort By
                        </button>
                        <button className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 rounded-xl text-xs font-bold text-white hover:bg-orange-600 transition-all shadow-lg shadow-slate-200">
                            <Download className="w-4 h-4" />
                            Export Data
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { label: 'Active Tracks', val: totalItems, icon: Box, color: 'text-blue-600', bg: 'bg-blue-50' },
                        { label: 'Price Drops', val: priceDrops, icon: ArrowDownCircle, color: 'text-green-600', bg: 'bg-green-50' },
                        { label: 'On Target', val: atTarget, icon: Target, color: 'text-orange-600', bg: 'bg-orange-50' },
                    ].map((stat, i) => (
                        <div key={i} className="bg-white p-3 rounded-2xl border border-slate-100 flex items-center gap-3 shadow-sm">
                            <div className={`w-8 h-8 ${stat.bg} ${stat.color} rounded-lg flex items-center justify-center`}>
                                <stat.icon className="w-4 h-4" />
                            </div>
                            <div>
                                <p className="text-[10px] font-bold text-slate-400 uppercase leading-none mb-1">{stat.label}</p>
                                <p className="text-sm font-black text-slate-900">{stat.val}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* 3. Refined Filter Bar */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-1">
                    <div className="flex items-center gap-6 overflow-x-auto no-scrollbar">
                        {['All Items', 'Price Dropped', 'At Target', 'Electronics', 'Fashion'].map((tab) => (
                            <button 
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`pb-3 text-xs font-bold transition-all relative whitespace-nowrap ${
                                    activeTab === tab ? 'text-orange-600' : 'text-slate-400 hover:text-slate-600'
                                }`}
                            >
                                {tab}
                                {activeTab === tab && (
                                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500 rounded-full animate-in fade-in zoom-in duration-300"></div>
                                )}
                            </button>
                        ))}
                    </div>
                </div>


                <div className="pt-2">
                    <TrackedItemTable products={filteredData} />
                </div>
                
            </div>
        </DashboardLayout>
    );
};

export default MyTracks;