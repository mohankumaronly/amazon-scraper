import React, { useState } from 'react';
import { ArrowRight, Lock, CheckCircle2, AlertCircle } from 'lucide-react';
import AuthInput from '../components/AuthInputs';
import AuthLayout from '../Layouts/AuthLayout';
import AuthButton from '../components/AuthButton';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isPasswordFilled = password.length > 0;

    const canSubmit = isEmailValid && isPasswordFilled;

    return (
        <AuthLayout
            title="Welcome back"
            subtitle="Enter your details to access your dashboard."
        >
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>

                <div className="relative">
                    <AuthInput
                        label="Email Address"
                        type="email"
                        placeholder="name@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {email && (
                        <div className="absolute right-3 top-10">
                            {isEmailValid ?
                                <CheckCircle2 className="w-4 h-4 text-green-500" /> :
                                <AlertCircle className="w-4 h-4 text-rose-400" />
                            }
                        </div>
                    )}
                </div>

                <AuthInput
                    label="Password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    rightLabel={
                        <span
                            onClick={() => navigate('/forgot-password')}
                            className="cursor-pointer hover:underline text-orange-600 font-medium"
                        >
                            Forgot password?
                        </span>
                    }
                />

                <div className="flex items-center justify-between py-1">
                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            id="remember"
                            className="w-4 h-4 rounded border-slate-300 text-orange-500 focus:ring-orange-500 cursor-pointer"
                        />
                        <label htmlFor="remember" className="text-xs text-slate-500 font-medium cursor-pointer">
                            Remember this device
                        </label>
                    </div>
                </div>

                <AuthButton
                    icon={ArrowRight}
                    disabled={!canSubmit}
                >
                    Sign In
                </AuthButton>
            </form>

            <div className="mt-8 pt-6 border-t border-slate-100 text-center">
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
                <Lock className={`w-3 h-3 ${canSubmit ? 'text-green-500' : 'text-slate-400'}`} />
                <p className="text-[10px] uppercase tracking-widest font-semibold text-center">
                    {canSubmit ? 'System ready for login' : 'Secure encrypted login connection'}
                </p>
            </div>
        </AuthLayout>
    );
};

export default LoginPage;