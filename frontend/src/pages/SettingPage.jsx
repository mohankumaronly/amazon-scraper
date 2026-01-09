import React, { useState } from 'react';
import DashboardLayout from '../Layouts/DashboardLayout';
import { User, Bell, Shield, Sliders, Save, Mail, Smartphone, Globe } from 'lucide-react';

const SettingPage = () => {
    const [activeTab, setActiveTab] = useState('notifications');

    const sections = [
        { id: 'profile', label: 'Profile', icon: User },
        { id: 'notifications', label: 'Notifications', icon: Bell },
        { id: 'tracking', label: 'Tracking', icon: Sliders },
        { id: 'security', label: 'Security', icon: Shield },
    ];

    return (
        <DashboardLayout>
            <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <div className="flex flex-col gap-1">
                    <h1 className="text-2xl font-black text-slate-900">Settings</h1>
                    <p className="text-slate-500 text-sm font-medium">Manage your account preferences and alert configurations.</p>
                </div>

                <div className="flex flex-col md:flex-row gap-8 mt-8">
                    {/* Sidebar Tabs */}
                    <div className="w-full md:w-48 flex flex-row md:flex-col gap-2 overflow-x-auto pb-2 md:pb-0">
                        {sections.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => setActiveTab(item.id)}
                                className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-xs font-bold transition-all whitespace-nowrap ${
                                    activeTab === item.id 
                                    ? 'bg-slate-900 text-white shadow-lg shadow-slate-200' 
                                    : 'text-slate-500 hover:bg-white hover:text-slate-900'
                                }`}
                            >
                                <item.icon className="w-4 h-4" />
                                {item.label}
                            </button>
                        ))}
                    </div>

                    {/* Content Area */}
                    <div className="flex-1 bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                        {activeTab === 'notifications' && (
                            <div className="space-y-6 animate-in fade-in duration-300">
                                <div>
                                    <h3 className="font-black text-slate-900 mb-1">Alert Channels</h3>
                                    <p className="text-xs text-slate-400">Where should we send price drop updates?</p>
                                </div>
                                
                                <div className="space-y-4">
                                    {[
                                        { label: 'Email Notifications', sub: 'Weekly digest and instant drops', icon: Mail },
                                        { label: 'Browser Alerts', sub: 'Flash messages when price hits target', icon: Globe },
                                        { label: 'Push Notifications', sub: 'Real-time alerts on your mobile', icon: Smartphone }
                                    ].map((pref, i) => (
                                        <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-slate-400">
                                                    <pref.icon className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <p className="text-sm font-bold text-slate-900">{pref.label}</p>
                                                    <p className="text-[11px] text-slate-400">{pref.sub}</p>
                                                </div>
                                            </div>
                                            <div className="w-12 h-6 bg-orange-500 rounded-full relative">
                                                <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm" />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {activeTab === 'tracking' && (
                            <div className="space-y-6 animate-in fade-in duration-300">
                                <div>
                                    <h3 className="font-black text-slate-900 mb-1">Scraper Config</h3>
                                    <p className="text-xs text-slate-400">Adjust how the engine monitors your items.</p>
                                </div>
                                
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase">Scan Frequency</label>
                                        <select className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl text-sm font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20">
                                            <option>Every 6 Hours (Fast)</option>
                                            <option>Every 12 Hours (Balanced)</option>
                                            <option>Every 24 Hours (Eco)</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className="mt-10 pt-6 border-t border-slate-50 flex justify-end">
                            <button className="flex items-center gap-2 px-6 py-3 bg-orange-500 text-white font-black rounded-2xl hover:bg-orange-600 transition-all shadow-lg shadow-orange-100">
                                <Save className="w-4 h-4" />
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default SettingPage;