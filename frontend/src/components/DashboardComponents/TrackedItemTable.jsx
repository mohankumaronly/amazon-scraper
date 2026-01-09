import React, { useState } from 'react';
import { MoreVertical, ExternalLink, Trash2, Edit3, Package, Search, X } from 'lucide-react';

const TrackedItemTable = ({ products = [] }) => {
    const [searchQuery, setSearchQuery] = useState("");

    // Filter logic: Checks if product name or ASIN includes the search text
    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.asin.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
            {/* Header with Integrated Search */}
            <div className="p-6 border-b border-slate-50 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                    <Package className="w-5 h-5 text-orange-500" />
                    <h3 className="font-bold text-slate-900">My Watch list</h3>
                    <span className="ml-2 text-xs font-medium text-slate-400 bg-slate-50 px-2 py-1 rounded-lg">
                        {filteredProducts.length} Results
                    </span>
                </div>

                {/* Search Bar */}
                <div className="relative w-full md:w-72 group">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-orange-500 transition-colors" />
                    <input 
                        type="text"
                        placeholder="Search name or ASIN..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-10 py-2 bg-slate-50 border border-slate-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
                    />
                    {searchQuery && (
                        <button 
                            onClick={() => setSearchQuery("")}
                            className="absolute right-3 top-1/2 -translate-y-1/2 p-0.5 hover:bg-slate-200 rounded-md transition-colors"
                        >
                            <X className="w-3 h-3 text-slate-500" />
                        </button>
                    )}
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-slate-50/50">
                            <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest">Product Details</th>
                            <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest">Pricing Status</th>
                            <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest">Goal Progress</th>
                            <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map((product) => {
                                const diff = product.currentPrice - product.targetPrice;
                                const percentAway = ((diff / product.targetPrice) * 100).toFixed(1);
                                const isGoalMet = diff <= 0;

                                return (
                                    <tr key={product.asin} className="hover:bg-slate-50/50 transition-colors group">
                                        <td className="px-6 py-5">
                                            <div className="flex items-center gap-4">
                                                <div className="w-14 h-14 rounded-xl bg-slate-100 p-1 shrink-0 border border-slate-200 overflow-hidden">
                                                    <img src={product.image} alt="" className="w-full h-full object-contain mix-blend-multiply" />
                                                </div>
                                                <div className="min-w-0">
                                                    <p className="text-sm font-bold text-slate-900 truncate max-w-62.5 mb-1">
                                                        {product.name}
                                                    </p>
                                                    <code className="text-[10px] font-bold bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">
                                                        {product.asin}
                                                    </code>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-5">
                                            <div className="space-y-1">
                                                <div className="text-lg font-black text-slate-900">₹{product.currentPrice.toLocaleString()}</div>
                                                <div className="text-xs font-medium text-slate-400 line-through">Target: ₹{product.targetPrice.toLocaleString()}</div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-5">
                                            <div className="flex flex-col gap-2 w-32">
                                                <div className="flex justify-between items-end">
                                                    <span className={`text-[10px] font-bold uppercase ${isGoalMet ? 'text-green-500' : 'text-orange-500'}`}>
                                                        {isGoalMet ? 'Goal Met!' : `${percentAway}% High`}
                                                    </span>
                                                </div>
                                                <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                                                    <div
                                                        className={`h-full rounded-full transition-all duration-1000 ${isGoalMet ? 'bg-green-500' : 'bg-orange-500'}`}
                                                        style={{ width: isGoalMet ? '100%' : `${Math.max(10, 100 - percentAway)}%` }}
                                                    ></div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-5 text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <button className="p-2 hover:bg-white hover:shadow-sm rounded-lg text-slate-400 hover:text-orange-500 transition-all">
                                                    <Edit3 className="w-4 h-4" />
                                                </button>
                                                <button className="p-2 hover:bg-white hover:shadow-sm rounded-lg text-slate-400 hover:text-rose-500 transition-all">
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                                <div className="relative group/menu">
                                                    <button className="p-2 hover:bg-white hover:shadow-sm rounded-lg text-slate-400 transition-all">
                                                        <MoreVertical className="w-4 h-4" />
                                                    </button>
                                                    <div className="absolute right-0 top-full mt-2 w-40 bg-white border border-slate-100 rounded-xl shadow-xl hidden group-hover/menu:block z-50 p-1">
                                                        <a href={`https://amazon.in/dp/${product.asin}`} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-3 py-2 text-xs font-bold text-slate-600 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors">
                                                            <ExternalLink className="w-3.5 h-3.5" />
                                                            View on Amazon
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })
                        ) : (
                            <tr>
                                <td colSpan="4" className="px-6 py-20 text-center">
                                    <div className="flex flex-col items-center gap-3">
                                        <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center">
                                            <Search className="w-6 h-6 text-slate-300" />
                                        </div>
                                        <p className="text-slate-500 text-sm font-medium">No products match your search.</p>
                                        <button onClick={() => setSearchQuery("")} className="text-orange-500 text-xs font-bold hover:underline">Clear Search</button>
                                    </div>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TrackedItemTable;