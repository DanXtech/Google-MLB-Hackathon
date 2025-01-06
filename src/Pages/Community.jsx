import Section from "../components/Section";
import { FaUsers, FaCommentDots, FaTrophy, FaHandshake } from "react-icons/fa";
import { communityInfo } from "../contsants";
import { useEffect } from "react";

const Community = () => {
    useEffect(() => (
        scrollTo(0, 0)
    ), [])
    return (
        <Section
            className="pt-[8rem] -mt-[4rem]"
            crosses
            crossesOffset="lg:translate-y-[4rem]"
        >
            {/* Community Header */}
            <div className="flex flex-col items-center gap-5 text-center">
                <h2 className="text-4xl font-bold">Join Our Community</h2>
                <p className="text-lg text-gray-400">
                    Connect with baseball fans worldwide and share your passion for the game!
                </p>
            </div>

            {/* Community Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-5 lg:px-20 mt-10">




                {
                    communityInfo.map((item, index) => (
                        <div className="flex flex-col items-center bg-transparent p-6 rounded-lg shadow-md border" key={index}>
                            <span className={`text-3xl ${item.color}`}> <item.icons /></span>
                            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                            <p className="text-white text-center">
                                {item.subText}
                            </p>
                        </div>
                    ))
                }

            </div>

            {/* Call-to-Action */}
            <div className="flex flex-col items-center mt-16">
                <h3 className="text-2xl font-bold mb-4">Ready to Join?</h3>
                <p className="text-lg text-gray-400 mb-6 text-center">
                    Become part of a vibrant community that shares your passion for baseball.
                </p>
                <button className="px-8 py-4 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700">
                    Join the Community
                </button>
            </div>
        </Section>
    );
};

export default Community;
