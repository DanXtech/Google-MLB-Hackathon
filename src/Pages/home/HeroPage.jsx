import { useEffect, useRef } from "react";
import Section from "../../components/Section";

import StartSection from "./StartSection";
import HeroIntroduction from "./HeroIntroduction";

const HeroPage = () => {
    const parallaxRef = useRef(null);

    // useEffect(() => {
    //     scrollTo(0, 0)
    // }, [])

    return (
        <Section
            className="pt-[8rem] -mt-[4rem]"
            crosses
            crossesOffset="lg:translate-y-[4rem]"

        >
            <div className="relative px-5 lg:px-7" ref={parallaxRef} >
                <div className="relative z-1 max-w-[90%] mx-auto text-center mb-8 md:mb-16 lg:mb-[5rem]">
                    <div className="flex flex-col gap-14">
                        {/* Main Heading */}
                        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white uppercase mb-5 lg:mb-12">
                            Welcome to <span className="text-amber-500">Major </span>
                            <span className="text-red-500">Baseball</span>
                            <span className="text-blue-500"> League</span> Championship
                        </h1>

                        {/* First Section */}
                        <HeroIntroduction />


                        <hr className="border-gray-500 my-8" />

                        {/* Second Section */}

                        <StartSection />


                        <hr className="border-gray-500  mt-20" />
                        <div>
                            <h2 className="text-3xl font-semibold my-10">Check for new Update in our Socal Media</h2>

                            <button className="px-8 py-4 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700">
                                Join the Community
                            </button>
                        </div>


                    </div>
                </div>
            </div>
        </Section>
    );
};

export default HeroPage;
