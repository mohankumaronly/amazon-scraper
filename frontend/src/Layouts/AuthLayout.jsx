import Footer from '../components/Footer';
import AuthNavbar from '../components/AuthNavbar';

const AuthLayout = ({ children, title, subtitle }) => {
  return (
    <div className="bg-[#F9FAFB] min-h-screen flex flex-col font-sans text-slate-900">
      <AuthNavbar />
      <main className="flex-1 flex items-center justify-center px-6 py-10">
        <div className="w-full max-w-110">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-extrabold tracking-tight mb-3">{title}</h1>
            <p className="text-slate-500">{subtitle}</p>
          </div>
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-100">
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AuthLayout;