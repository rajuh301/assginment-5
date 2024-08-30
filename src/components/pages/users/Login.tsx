import { useDispatch } from 'react-redux'; // Ensure you import this
import Footer from '../Footer';
import { useState } from 'react';
import { useLoginMutation } from '../../../redux/features/Auth/authApi';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { verifyToken } from '../../utils/verifyfyToken';
import { setUser, TUser } from '../../../redux/features/slices/authSlice';
import Navbar from '../Navbar';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [login] = useLoginMutation();
    const navigate = useNavigate();
    const dispatch = useDispatch();



    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        const toastId = toast.loading('Logging in');

        try {


            const res = await login({ email, password }).unwrap();

            const updateToken = res.token;

            const user = verifyToken(updateToken) as TUser;

            dispatch(setUser({ user: user, token: updateToken }));

            toast.success('Logged in', { id: toastId, duration: 2000 });

            toast.success('Logged in successfully', { id: toastId, duration: 2000 });

            if (res?.data?.role) {

                navigate(`/admin`);
            }
            if (res?.data?.role === 'user') {

                navigate(`/`);
            }


        } catch (error: any) {
            toast.dismiss(toastId); 
            if (error?.status === 401) {
                toast.error('Invalid credentials. Please try again.');
            } else {
                toast.error('An error occurred. Please try again later.');
            }
        }

    };

    return (
        <div className="max-w-[1440px] mx-auto w-full">
            <Navbar />
            {/* --------------- Content -------------------- */}
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col md:flex-row max-w-4xl w-full">
                    {/* Image Section */}
                    <div className="hidden md:block md:w-1/2">
                        <img
                            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlvrLLro525B37OxCbSq4iuK-YDiqKxCBeWg&s'
                            alt="Shopping cart with phone"
                            className="object-cover h-full w-full"
                        />
                    </div>

                    {/* Form Section */}
                    <div className="w-full md:w-1/2 p-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-8">Log in to Exclusive</h2>
                        <form onSubmit={handleLogin}>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700">
                                    Email or Phone Number
                                </label>
                                <input
                                    type="text"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                                    placeholder="Enter your email or phone number"
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="password" className="block text-gray-700">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                                    placeholder="Enter your password"
                                    required
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <button
                                    type="submit"
                                    className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 focus:outline-none focus:bg-red-700"
                                >
                                    Log In
                                </button>
                                <a href="#" className="text-red-500 hover:underline">
                                    Forgot Password?
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* --------------- Content -------------------- */}
            <Footer />
        </div>
    );
};

export default Login;
