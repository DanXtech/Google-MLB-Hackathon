import Section from "../components/Section";
import { features } from "../contsants";
import Button from "../components/Button";
import { useEffect } from "react";
// import { FaTools } from "react-icons/fa";
const Features = () => {

    useEffect(() => {
        scrollTo(0, 0)
    }, [])
    return (
        <Section
            className="pt-[8rem] -mt-[4rem]"
            crosses
            crossesOffset="lg:translate-y-[4rem]"
        >
            {/* Feature Header */}
            <div className="flex flex-col items-center gap-5 px-5 lg:px-20">

                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white uppercase">
                    Discover Our   <span className="text-amber-500">Features </span>
                    <span className="text-red-500">in</span>
                    <span className="text-blue-500"> BaseBall</span>  App Game
                </h2>
                <p className="text-lg lg:text-center  text-white flex-1 leading-relaxed  ">
                    Everything you need to enhance your MLB experience! Whether you're a die-hard baseball fan or just looking to have fun with your friends, our platform is designed to bring you closer to the game like never before. Dive into the excitement with real-time updates on games, scores, and player stats, ensuring you never miss a moment.

                    Our platform goes beyond the basics, offering interactive features that let you analyze game strategies, compare player performances, and track your favorite teams throughout the season. With personalized dashboards, you can tailor your experience to follow specific players, games, or even entire leagues.

                    Want to connect with friends and other baseball enthusiasts? Engage in lively discussions, share game predictions, and celebrate wins together through our built-in community chat feature. Compete in fantasy leagues, challenge your friends, and win exciting rewards as you prove your knowledge of the game.

                    Whether you're at home or on the go, our user-friendly interface ensures you stay connected to the action. Experience baseball like never before with advanced tools, exclusive insights, and a vibrant community of fans. Don’t just watch the game—live it, share it, and celebrate it with your friends today!
                </p>


                {/* Features Section */}

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 px-5 lg:px-20 mt-10">
                    {features.map((item) => (
                        <div key={item.id} className="relative rounded-lg p-5 overflow-hidden">
                            <div className=" bg-transparent rounded-lg p-5 shadow-lg border border-gray-300">
                                <span className={`text-3xl ${item.color}`}>{<item.icon />}</span>
                                <h3 className="text-xl font-semibold text-amber-500 mt-2">{item.title}</h3>
                                {item.description && (
                                    <p className="text-white mt-3">{item.description}</p>
                                )}
                                {item.sublist && (
                                    <ul className="text-white mt-3">
                                        {item.sublist.map((sub, index) => (
                                            <li key={index}>- {sub}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            {/* User Testimonials Section */}
            {/* <div className="bg-gray-100 py-10 mt-16">
                <h3 className="text-3xl font-semibold text-center text-gray-800">
                    What Users Are Saying
                </h3>
                <div className="flex flex-col md:flex-row gap-5 px-5 lg:px-20 mt-8">
                    <div className="flex-1 bg-white shadow-lg rounded-lg p-5">
                        <p className="text-gray-600 italic">
                            "This app revolutionized how I follow MLB games!"
                        </p>
                        <span className="block mt-3 text-right font-semibold text-gray-800">
                            - Baseball Fan
                        </span>
                    </div>
                    <div className="flex-1 bg-white shadow-lg rounded-lg p-5">
                        <p className="text-gray-600 italic">
                            "The player stats feature is a game-changer for fantasy league fans."
                        </p>
                        <span className="block mt-3 text-right font-semibold text-gray-800">
                            - Fantasy League Enthusiast
                        </span>
                    </div>
                </div>
            </div> */}

            {/* Call-to-Action Section */}
            <div className="flex flex-col items-center justify-center gap-5 mt-16  h-[200px] mx-10">
                <h3 className="text-3xl font-bold text-center text-white">
                    Ready to Dive In?
                </h3>
                <Button href="/register" className="px-6 py-3 bg-white  text-black rounded-lg hover:bg-transparent border">
                    Explore the App
                </Button>
            </div>
        </Section>
    );
};

export default Features;
