import { useNavigate } from "react-router-dom";
import { logout } from "../services/api.service";
import { useAuth } from "../context/AuthContext";
import {LogOut} from 'lucide-react'

const Dashboard = () => {
  const navigate = useNavigate();
  const { logoutUser } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();      // backend clears cookies
      logoutUser();        // frontend clears auth state
      navigate("/login");  // routing now works
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-slate-50">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-black text-slate-900 tracking-tight">
          Welcome Back
        </h1>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 px-8 py-3.5 bg-white hover:bg-red-50 text-slate-700 hover:text-red-600 font-bold rounded-2xl border border-slate-200 shadow-sm transition-all active:scale-95 group"
        >
          <LogOut className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Sign out
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
