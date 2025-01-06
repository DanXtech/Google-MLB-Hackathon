import { useEffect, useState } from "react";
import HeroImageVedio from "../../assets/Hero-baseball-vedio.mp4";
import Button from "../../components/Button";
import { FaBaseballBall } from "react-icons/fa";

const StartSection = () => {
    const [firstColorBall, setSecoundColorBall] = useState(0);

    // Define the array of colors
    const firstColors = ['red', 'blue', 'yellow', 'green', 'purple', 'orange'];
    const secoundColors = ['red', 'blue', 'yellow', 'green', 'purple', 'orange'];

    useEffect(() => {
        // Set an interval to change the color index
        const interval = setInterval(() => {
            setSecoundColorBall((prevIndex) => (prevIndex + 1) % firstColors.length);
            setSecoundColorBall((prevIndex) => (prevIndex + 1) % secoundColors.length);
        }, 1000);// Change color every second

        // Clear the interval when the component unmounts
        return () => clearInterval(interval);
    }, [firstColors.length, secoundColors.lenght]);

    return (
        <div className="flex flex-col lg:flex-row items-center gap-6 mt-8   relative">
            {/* Video Section */}
            {/* <div className="flex-1 border p-5 lg:p-10 rounded-br-[60px] rounded-tl-[50px] shadow-lg"> */}
            <div className="flex-1 border p-5 lg:p-10 rounded-br-[60px] rounded-tl-[50px] shadow-lg">
                <video
                    src={HeroImageVedio}
                    autoPlay
                    loop
                    muted
                    className="rounded-lg shadow-lg bg-white w-full h-auto"
                />
            </div>

            {/* Text Section */}
            <div className="flex-1 text-left">
                <h2 className="text-lg md:text-3xl text-green-500 font-bold">
                    Major Baseball Gaming Project
                </h2>
                <p className="text-sm lg:text-[16px] text-gray-300 mt-4 leading-relaxed text-justify">
                    This is Google’s <span className="text-bright-sun-300">Baseball Gaming</span> project
                    for everyone to enjoy and play with friends. The Major Baseball League Championship Companion is a cutting-edge web
                    application designed to be the ultimate destination for baseball enthusiasts.
                    <br />
                    <br />
                    Dive into an immersive experience where you can track your favorite teams, engage with dynamic game stats,
                    and challenge friends to exciting gameplay. Whether you’re strategizing for a big win or simply enjoying the thrill of the game,
                    this platform has everything you need to start playing and having fun instantly. Don't wait join the action today!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                    <Button href="/register" className="bg-transparent border-white border text-white rounded-tr-2xl">
                        Start Gaming
                    </Button>
                    <Button href="/features" className="bg-transparent border-white border text-white rounded-tr-2xl">
                        Explore Features
                    </Button>
                </div>

                <div className="">
                    <FaBaseballBall
                        style={{ color: firstColors[firstColorBall] }}
                        className="absolute -bottom-20 left-0 text-5xl hidden lg:block"
                    />
                    <FaBaseballBall
                        // style={{ color: colors[(colorIndex + 1) % colors.length] }}
                        style={{ color: secoundColors[firstColorBall] }}
                        className="absolute -top-20 right-0 text-5xl hidden lg:block"
                    />

                </div>

            </div>
        </div>
    );
};

export default StartSection;
