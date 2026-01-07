import React from 'react';

const AuthButton = ({ children, icon: Icon, disabled, ...props }) => {
  return (
    <button 
      {...props}
      disabled={disabled}
      className={`w-full py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2
        ${disabled 
          ? 'bg-gray-300 text-gray-500 cursor-not-allowed shadow-none' 
          : 'bg-orange-500 text-white hover:bg-orange-600 shadow-lg shadow-orange-200 active:scale-[0.98] cursor-pointer'
        }`}
    >
      {children}
      {Icon && <Icon className="w-5 h-5" />}
    </button>
  );
};

export default AuthButton;