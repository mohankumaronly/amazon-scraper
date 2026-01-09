import React from 'react';

const StatsCard = ({ title, value, icon: Icon, trend, colorClass, bgClass }) => {
    return (
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 group">
            <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-xl ${bgClass} ${colorClass} transition-transform group-hover:scale-110`}>
                    <Icon className="w-5 h-5" />
                </div>
                {trend && (
                    <span className={`text-[10px] font-bold px-2 py-1 rounded-lg ${trend.isPositive ? 'bg-green-50 text-green-600' : 'bg-rose-50 text-rose-600'}`}>
                        {trend.isPositive ? '↑' : '↓'} {trend.value}%
                    </span>
                )}
            </div>
            <div>
                <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">{title}</p>
                <h3 className="text-2xl font-black text-slate-900 mt-1">{value}</h3>
            </div>
        </div>
    );
};

export default StatsCard;