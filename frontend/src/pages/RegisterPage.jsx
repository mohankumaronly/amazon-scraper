import React, { useState } from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import AuthLayout from '../Layouts/AuthLayout';
import AuthInput from '../components/AuthInputs';
import AuthButton from '../components/AuthButton';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
    const navigate = useNavigate();

    // 1. Initialize state for all fields
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: ''
    });

    // 2. Simple validation logic
    // Checks if name is entered, email includes '@', and password is 8+ chars
    const canSubmit = 
        formData.fullName.trim().length > 0 && 
        formData.email.includes('@') && 
        formData.password.length >= 8;

    const handleChange = (e, field) => {
        setFormData({ ...formData, [field]: e.target.value });
    };

    return (
        <AuthLayout
            title="Create your account"
            subtitle="Join 500+ sellers extracting data daily."
        >
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <AuthInput 
                    label="Full Name" 
                    placeholder="John Doe" 
                    value={formData.fullName}
                    onChange={(e) => handleChange(e, 'fullName')}
                />
                
                <AuthInput 
                    label="Email Address" 
                    type="email" 
                    placeholder="name@company.com" 
                    value={formData.email}
                    onChange={(e) => handleChange(e, 'email')}
                />
                
                <AuthInput 
                    label="Password" 
                    type="password" 
                    placeholder="••••••••" 
                    value={formData.password}
                    onChange={(e) => handleChange(e, 'password')}
                />

                <div className="flex items-start gap-2 py-2 text-left">
                    <ShieldCheck className={`w-4 h-4 mt-1 shrink-0 ${canSubmit ? 'text-green-500' : 'text-slate-300'}`} />
                    <p className="text-xs text-slate-500 leading-relaxed">
                        Your data is encrypted and secure. We never share your history.
                    </p>
                </div>

                {/* 3. Button is disabled until 'canSubmit' is true */}
                <AuthButton 
                    icon={ArrowRight} 
                    disabled={!canSubmit}
                >
                    Create Account
                </AuthButton>
            </form>

            <div className="mt-8 pt-6 border-t border-slate-50 text-center">
                <p className="text-sm text-slate-500">
                    Already have an account?{' '}
                    <span 
                        onClick={() => navigate('/login')}
                        className="text-orange-600 font-bold hover:underline cursor-pointer"
                    >
                        Sign In
                    </span>
                </p>
            </div>
        </AuthLayout>
    );
};

export default RegisterPage;