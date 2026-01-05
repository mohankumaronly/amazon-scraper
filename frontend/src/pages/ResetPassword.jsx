import React, { useState } from 'react';
import { CheckCircle2, ShieldCheck, XCircle } from 'lucide-react';
import AuthLayout from '../Layouts/AuthLayout';
import AuthInput from '../components/AuthInputs';
import AuthButton from '../components/AuthButton';

const ResetPassword = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // Logic: Must be 8+ chars AND exactly match
    const isMinLength = password.length >= 8;
    const isMatch = password === confirmPassword && confirmPassword.length > 0;
    const canSubmit = isMinLength && isMatch;

    return (
        <AuthLayout
            title="Set new password"
            subtitle="Almost there. Choose a strong password to protect your account."
        >
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <AuthInput 
                    label="New Password" 
                    type="password" 
                    placeholder="••••••••" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <AuthInput 
                    label="Confirm New Password" 
                    type="password" 
                    placeholder="••••••••" 
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />

                <div className="bg-slate-50 p-4 rounded-xl space-y-2 border border-slate-100">
                    {/* Requirement 1: Length */}
                    <div className={`flex items-center gap-2 text-[12px] font-medium transition-colors ${isMinLength ? 'text-green-600' : 'text-slate-500'}`}>
                        <CheckCircle2 className={`w-3.5 h-3.5 ${isMinLength ? 'text-green-500' : 'text-slate-300'}`} />
                        At least 8 characters
                    </div>

                    {/* Requirement 2: Match (Only shows when user starts typing in confirm field) */}
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

                {/* The button is now locked based on the canSubmit variable */}
                <div className={!canSubmit ? "opacity-50 cursor-not-allowed" : ""}>
                    <AuthButton 
                        disabled={!canSubmit}
                        type="submit"
                    >
                        Update Password
                    </AuthButton>
                </div>
            </form>

            <div className="mt-8 flex items-center justify-center gap-2 text-slate-400">
                <ShieldCheck className="w-4 h-4" />
                <p className="text-[11px] font-medium text-center">
                    Your password will be updated across all sessions
                </p>
            </div>
        </AuthLayout>
    );
};

export default ResetPassword;