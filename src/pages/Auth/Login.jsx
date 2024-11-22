import { useContext, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../../contexts/AuthProvider";
import { FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const location = useLocation();
    const navigate = useNavigate();

    const { createUserWithGoogle, loginUser } = useContext(authContext);

    const handleLoginWithGoogle = () => {
        createUserWithGoogle()
            .then(result => {
                console.log(result.user);
                navigate("/");
            })
            .catch(error => {
                console.error(error.message);
            });
    };

    const handleLoginForm = (e) => {
        e.preventDefault();

        const form = e.currentTarget;
        const formData = new FormData(form);

        const email = formData.get("email");
        const password = formData.get("password");

        console.log(email, password);

        loginUser(email, password)
            .then(userCredential => {
                console.log(userCredential.user);
                navigate("/");
            })
            .catch(error => {
                console.error(error.message);
                alert(error.message);
            });
    };

    const navigateToForgetPassword = () => {
        const emailInput = document.getElementById('email');
        navigate("/auth/forgot-password", {
            state: {
                email: emailInput.value,
            }
        });
    }

    return (
        <section className="bg-gray-50 mt-6">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
                <Link to={"/"} className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
                    <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
                    Lingo Bingo
                </Link>
                <div className="w-full bg-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                            Sign in to your account
                        </h1>
                        <form onSubmit={handleLoginForm} className="space-y-4 md:space-y-6" action="#">
                            <div className="flex flex-col md:flex-row items-center justify-between gap-2">
                                <div onClick={handleLoginWithGoogle} className="flex items-center md:justify-center gap-2 w-full border border-gray-300 px-4 py-2 rounded-lg cursor-pointer">
                                    <FaGoogle className="text-xl" />
                                    <span className="text-sm font-medium">Log in with Google</span>
                                </div>
                                <div className="flex items-center md:justify-center gap-2 w-full border border-gray-300 px-4 py-2 rounded-lg cursor-pointer">
                                    <FaGithub className="text-xl" />
                                    <span className="text-sm font-medium">Log in with Github</span>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com" required />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300" />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="remember" className="text-gray-500">Remember me</label>
                                    </div>
                                </div>
                                <span onClick={navigateToForgetPassword} className="text-sm font-medium text-[#1e0e5c] hover:underline">Forgot password?</span>
                            </div>
                            <button type="submit" className="w-full bg-[#1e0e5c] text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>
                            <p className="text-sm font-light text-gray-500">
                                Don’t have an account yet? <Link to={"/auth/register"} className="font-medium text-[#1e0e5c] hover:underline">Sign up</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
