import React, { useState } from 'react';
import { ArrowRight, Lock } from 'lucide-react';
import AuthInput from '../components/AuthInputs';
import AuthLayout from '../Layouts/AuthLayout';
import AuthButton from '../components/AuthButton';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate();

    // 1. Initialize local state
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // 2. Simple validation: Ensure email has @ and password is not empty
    const canSubmit = email.includes('@') && password.trim().length > 0;

    return (
        <AuthLayout
            title="Welcome back"
            subtitle="Enter your details to access your dashboard."
        >
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <AuthInput
                    label="Email Address"
                    type="email"
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <AuthInput
                    label="Password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    rightLabel={
                        <span 
                            onClick={() => navigate('/forgot-password')}
                            className="cursor-pointer hover:underline"
                        >
                            Forgot password?
                        </span>
                    }
                />

                <div className="flex items-center gap-2 py-1">
                    <input
                        type="checkbox"
                        id="remember"
                        className="w-4 h-4 rounded border-slate-300 text-orange-500 focus:ring-orange-500 cursor-pointer"
                    />
                    <label htmlFor="remember" className="text-xs text-slate-500 font-medium cursor-pointer">
                        Remember this device
                    </label>
                </div>

                {/* 3. Button is disabled until 'canSubmit' is true */}
                <AuthButton 
                    icon={ArrowRight}
                    disabled={!canSubmit}
                >
                    Sign In
                </AuthButton>
            </form>

            <div className="mt-8 pt-6 border-t border-slate-50 text-center">
                <p className="text-sm text-slate-500">
                    New to AmzFlow?{' '}
                    <span
                        className="text-orange-600 font-bold hover:underline cursor-pointer"
                        onClick={() => navigate('/register')}
                    >
                        Create account
                    </span>
                </p>
            </div>

            <div className="mt-8 flex items-center justify-center gap-2 text-slate-400">
                <Lock className="w-3 h-3" />
                <p className="text-[10px] uppercase tracking-widest font-semibold text-center">
                    Secure encrypted login connection
                </p>
            </div>
        </AuthLayout>
    );
};

export default LoginPage;