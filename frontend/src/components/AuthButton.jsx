import React from 'react';

const AuthButton = ({ children, icon: Icon, ...props }) => {
  return (
    <button 
      {...props}
      className="w-full bg-orange-500 text-white py-4 rounded-xl font-bold text-lg hover:bg-orange-600 transition-all shadow-lg shadow-orange-200 active:scale-[0.98] flex items-center justify-center gap-2"
    >
      {children}
      {Icon && <Icon className="w-5 h-5" />}
    </button>
  );
};

export default AuthButton;