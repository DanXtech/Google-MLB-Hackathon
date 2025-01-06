import { useRef } from "react";
import AuthImage from "../../assets/Red-and-Black-Monogram-Sports-Baseball-Club-Logo.png";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

const Signup = () => {
    const parallaxRef = useRef(null);

    return (
        <section
            style={{
                backgroundImage: `url(${AuthImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
            className="h-screen w-full bg-black relative"
        >
            {/* Overlay for deep black effect */}
            <div className="absolute inset-0 bg-[#1B1B2E] bg-opacity-90"></div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-center items-center p-4 lg:p-10 text-white">
                <h2 className="text-xl mb-4 text-center lg:text-3xl lg:mb-8 font-black uppercase">
                    Start your journey with baseball gaming championship
                </h2>

                <div className="flex items-center w-full max-w-lg lg:max-w-2xl">
                    <div className="w-full py-8 px-6 bg-[#2C2C44] bg-opacity-70 rounded-lg border-4">
                        {/* Form Header */}
                        <div className="flex items-center gap-3 pb-6">
                            <span className="bg-white h-10 w-10 rounded-full"></span>
                            <h3 className="text-xl lg:text-2xl font-bold capitalize">
                                Register to start Playering with Friends
                            </h3>
                        </div>

                        {/* Form Fields */}
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col lg:flex-row gap-2">
                                <input
                                    type="text"
                                    className="bg-transparent border p-3 flex-1 rounded-lg text-sm lg:text-base"
                                    placeholder="Enter Your Username"
                                    required
                                />
                                <input
                                    type="email"
                                    className="bg-transparent border p-3 flex-1 rounded-lg text-sm lg:text-base"
                                    placeholder="Enter Your Email"
                                    required
                                />
                            </div>
                            <div className="flex flex-col lg:flex-row gap-2">
                                <select
                                    className="bg-[#5ba32e] text-white p-3 flex-1 rounded-lg text-sm lg:text-base"
                                >
                                    <option value="en">English</option>
                                    <option value="es">Spanish</option>
                                    <option value="jp">Japanese</option>
                                </select>
                                <input
                                    type="password"
                                    className="bg-transparent border p-3 flex-1 rounded-lg text-sm lg:text-base"
                                    placeholder="Enter Your Password"
                                    required
                                />
                            </div>

                            <p className="">Have an account <Link to="/login"><i>Login ?</i></Link> </p>

                            {/* Submit Button */}
                            <Button className="border rounded-lg py-3 w-full text-sm lg:text-base">
                                Sign Up
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Signup;
