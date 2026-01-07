import React, { useState } from 'react';
import { CheckCircle2, ShieldCheck, XCircle, AlertCircle } from 'lucide-react';
import AuthLayout from '../Layouts/AuthLayout';
import AuthInput from '../components/AuthInputs';
import AuthButton from '../components/AuthButton';

const ResetPassword = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const isMinLength = password.length >= 8;
    const isMatch = password === confirmPassword && confirmPassword.length > 0;
    const canSubmit = isMinLength && isMatch;

    return (
        <AuthLayout
            title="Set new password"
            subtitle="Almost there. Choose a strong password to protect your account."
        >
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>

                <div className="relative">
                    <AuthInput 
                        label="New Password" 
                        type="password" 
                        placeholder="••••••••" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="absolute right-3 top-10">
                        {isMinLength ? (
                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                        ) : password.length > 0 ? (
                            <AlertCircle className="w-4 h-4 text-rose-400" />
                        ) : null}
                    </div>
                </div>

                <div className="relative">
                    <AuthInput 
                        label="Confirm New Password" 
                        type="password" 
                        placeholder="••••••••" 
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <div className="absolute right-3 top-10">
                        {confirmPassword.length > 0 && (
                            isMatch ? (
                                <CheckCircle2 className="w-4 h-4 text-green-500" />
                            ) : (
                                <XCircle className="w-4 h-4 text-rose-400" />
                            )
                        )}
                    </div>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl space-y-2 border border-slate-100">
                    <div className={`flex items-center gap-2 text-[12px] font-medium transition-colors ${isMinLength ? 'text-green-600' : 'text-slate-500'}`}>
                        <CheckCircle2 className={`w-3.5 h-3.5 ${isMinLength ? 'text-green-500' : 'text-slate-300'}`} />
                        At least 8 characters
                    </div>

                    {confirmPassword.length > 0 && (
                        <div className={`flex items-center gap-2 text-[12px] font-medium transition-colors ${isMatch ? 'text-green-600' : 'text-red-500'}`}>
                            {isMatch ? (
                                <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
                            ) : (
                                <XCircle className="w-3.5 h-3.5 text-red-400" />
                            )}
                            {isMatch ? 'Passwords match' : 'Passwords do not match'}
                        </div>
                    )}
                </div>
                
                <AuthButton 
                    disabled={!canSubmit}
                    type="submit"
                >
                    Update Password
                </AuthButton>
            </form>

            <div className="mt-8 flex items-center justify-center gap-2 text-slate-400">
                <ShieldCheck className={`w-4 h-4 transition-colors ${canSubmit ? 'text-green-500' : 'text-slate-300'}`} />
                <p className="text-[11px] font-medium text-center">
                    Your password will be updated across all sessions
                </p>
            </div>
        </AuthLayout>
    );
};

export default ResetPassword;