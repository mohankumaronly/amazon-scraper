// src/components/DashboardComponents/StatsGrid.jsx
import React from 'react';
import { Layers, TrendingDown, Zap, Clock } from 'lucide-react';
import StatsCard from './StatsCard';

const StatsGrid = () => {
    const dashboardStats = [
        {
            title: "Total Tracks",
            value: "1,284",
            icon: Layers,
            trend: { value: 12, isPositive: true },
            colorClass: "text-blue-600",
            bgClass: "bg-blue-50"
        },
        {
            title: "Price Drops",
            value: "42",
            icon: TrendingDown,
            trend: { value: 8, isPositive: true },
            colorClass: "text-orange-600",
            bgClass: "bg-orange-50"
        },
        {
            title: "Total Scrapes",
            value: "12,402",
            icon: Zap,
            trend: { value: 3, isPositive: false },
            colorClass: "text-purple-600",
            bgClass: "bg-purple-50"
        },
        {
            title: "Next Sync",
            value: "04:12 min",
            icon: Clock,
            colorClass: "text-emerald-600",
            bgClass: "bg-emerald-50"
        }
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {dashboardStats.map((stat, index) => (
                <StatsCard key={index} {...stat} />
            ))}
        </div>
    );
};

export default StatsGrid;