import React from 'react';
import { 
    CheckCircle2, 
    AlertTriangle, 
    ArrowDownRight, 
    History, 
    Package, 
    XCircle 
} from 'lucide-react';

const activities = [
    {
        id: 1,
        type: 'success',
        title: 'Scrape Completed',
        desc: "Sony WH-1000XM5 data updated",
        time: '2 mins ago',
        icon: CheckCircle2,
        color: 'text-green-500',
        bg: 'bg-green-50'
    },
    {
        id: 2,
        type: 'price_drop',
        title: 'Price Drop Alert',
        desc: "MacBook M3 hit your target ₹1,24,900",
        time: '1 hour ago',
        icon: ArrowDownRight,
        color: 'text-orange-500',
        bg: 'bg-orange-50'
    },
    {
        id: 3,
        type: 'stock',
        title: 'Stock Update',
        desc: "PlayStation 5 is back in stock",
        time: '5 hours ago',
        icon: Package,
        color: 'text-blue-500',
        bg: 'bg-blue-50'
    },
    {
        id: 4,
        type: 'error',
        title: 'Scrape Failed',
        desc: "Amazon block detected on ASIN: B08... ",
        time: '1 day ago',
        icon: XCircle,
        color: 'text-rose-500',
        bg: 'bg-rose-50'
    }
];

const ActivitySidebar = () => {
    return (
        <aside className="w-80 hidden xl:flex flex-col border-l border-slate-100 bg-white h-full">
            {/* Header */}
            <div className="p-6 border-b border-slate-50 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <History className="w-5 h-5 text-slate-400" />
                    <h3 className="font-bold text-slate-900">Recent Activity</h3>
                </div>
                <span className="text-[10px] font-bold text-orange-600 bg-orange-50 px-2 py-1 rounded-md uppercase tracking-wider">
                    Live
                </span>
            </div>

            {/* Activity List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-8">
                {activities.map((item, index) => (
                    <div key={item.id} className="relative flex gap-4 group">
                        {/* Timeline Line */}
                        {index !== activities.length - 1 && (
                            <div className="absolute left-4.25 top-10 w-0.5 h-10 bg-slate-50 group-hover:bg-slate-100 transition-colors"></div>
                        )}

                        {/* Status Icon */}
                        <div className={`w-9 h-9 rounded-xl ${item.bg} ${item.color} flex items-center justify-center shrink-0 shadow-sm`}>
                            <item.icon className="w-5 h-5" />
                        </div>

                        {/* Content */}
                        <div className="flex flex-col gap-1">
                            <p className="text-sm font-bold text-slate-900 leading-none">
                                {item.title}
                            </p>
                            <p className="text-xs text-slate-500 leading-relaxed pr-2">
                                {item.desc}
                            </p>
                            <span className="text-[10px] font-medium text-slate-400">
                                {item.time}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom Insight Card */}
            <div className="p-6">
                <div className="bg-linear-to-br from-slate-900 to-slate-800 rounded-2xl p-5 text-white">
                    <p className="text-xs text-slate-400 font-medium mb-1">Weekly Savings</p>
                    <h4 className="text-xl font-black">₹14,500</h4>
                    <div className="mt-3 flex items-center gap-2 text-[11px] text-green-400 font-bold">
                        <ArrowDownRight className="w-3 h-3" />
                        <span>12% more than last week</span>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default ActivitySidebar;