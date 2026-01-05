import React from 'react';

const AuthInput = ({ label, rightLabel, type = "text", placeholder, ...props }) => {
  return (
    <div className="w-full text-left">
      <div className="flex justify-between items-center mb-2">
        <label className="block text-sm font-bold text-slate-700">{label}</label>
        {rightLabel && (
          <div className="text-[13px] font-semibold text-orange-600 hover:text-orange-700 transition-colors">
            {rightLabel}
          </div>
        )}
      </div>
      <input 
        type={type} 
        placeholder={placeholder}
        {...props}
        className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/5 transition-all text-sm"
      />
    </div>
  );
};

export default AuthInput;