import { ArrowLeft, Send } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AuthLayout from '../Layouts/AuthLayout';
import AuthInput from '../components/AuthInputs';
import AuthButton from '../components/AuthButton';

const ForgotPassword = () => {
    const navigate = useNavigate();

    return (
        <AuthLayout
            title="Reset password"
            subtitle="Enter your email and we'll send you a link to get back into your account."
        >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <AuthInput
                    label="Email Address"
                    type="email"
                    placeholder="name@company.com"
                />

                <AuthButton icon={Send}>
                    Send Reset Link
                </AuthButton>
            </form>

            <div className="mt-8 pt-6 border-t border-slate-50 text-center">
                <span
                    onClick={() => navigate('/login')}
                    className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-orange-600 transition-colors cursor-pointer"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Sign In
                </span>
            </div>
            <div className="mt-8 text-center px-4">
                <p className="text-xs text-slate-400 leading-relaxed">
                    If you don't see the email within 5 minutes, please check your spam folder.
                </p>
            </div>
        </AuthLayout>
    );
};

export default ForgotPassword;