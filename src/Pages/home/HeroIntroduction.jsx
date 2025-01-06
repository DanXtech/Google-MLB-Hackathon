
import GamingCard from "../../Ui/GamingCard";
import baseball from "../../assets/baseball.png"
import HeroImageDes from "../../assets/Hero-baseball-Image.png";
import { FaBaseballBall } from "react-icons/fa";
import { useEffect, useState } from "react";
const HeroIntroduction = () => {
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

        <div className="flex flex-col lg:flex-row items-center gap-6 relative ">
            <div className="flex flex-col items-start text-left flex-1">
                <h2 className="text-lg md:text-3xl text-green-500 font-bold">
                    Enjoy Gaming with Friends All Over the Country
                </h2>
                <p className="text-sm lg:text-[16px] text-gray-300 mt-4 leading-relaxed text-justify">
                    Get real-time MLB updates, player stats, and game insights all in one place! Stay connected with your favorite teams and players while competing and having fun with friends, no matter where they are. Our platform brings you closer to the action with live updates, in-depth analytics, and engaging features designed for every baseball enthusiast.
                    <br />
                    <br />
                    Whether you're catching up on the latest scores, diving into player stats, or strategizing with friends, we've got everything you need to take your MLB experience to the next level. Join a vibrant community of fans, share your passion for the game, and create unforgettable memories together!
                </p>

                <div className="">
                    <FaBaseballBall
                        style={{ color: firstColors[firstColorBall] }}
                        className="absolute -bottom-5 left-0 text-5xl hidden lg:block"
                    />
                    <FaBaseballBall
                        // style={{ color: colors[(colorIndex + 1) % colors.length] }}
                        style={{ color: secoundColors[firstColorBall] }}
                        className="absolute -top-56 right-0 text-5xl hidden lg:block"
                    />

                </div>


            </div>
            <div className="flex-1 border p-5 lg:p-10 rounded-tl-3xl rounded-br-3xl">
                <img
                    src={HeroImageDes}
                    alt="Introduction"
                    className="rounded-lg shadow-lg bg-white w-full h-auto"
                />
            </div>
        </div>
    )
}

export default HeroIntroduction