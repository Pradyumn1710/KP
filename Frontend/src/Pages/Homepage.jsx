import { TypeAnimation } from "react-type-animation";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Footer from "@/MyComponents/Footer";
//----------------------------------------------------------------------------------------------------

export default function Homepage() {
    return (
        <div>
            <div className="flex justify-between">
                <div><Navbar_left /></div>
                <div><Navbar_right /></div>
            </div>
            <Hero_Header />
            <Footer></Footer>
        </div>
    );
}

export function Hero_Header() {
    return (
        <div
            className="flex h-screen bg-cover bg-center"
            style={{ backgroundImage: "url('/backgroundHeroHeader.jpg')" }}
        >
            <Hero_Header_heading />
            <Image_hero />
        </div>
    );
}

export function Hero_Header_heading() {
    const navigate = useNavigate();

    const handleMapClick = () => {
        navigate('/map');
    };

    return (
        <div className="w-1/2 flex items-center justify-center">
            <div className="text-center">
                <div className="text-7xl font-bold mb-4">BabyVerse</div>
                <div className="text-2xl mb-8">
                    <SubHeading />
                </div>
                <div className="flex justify-center space-x-4">
                    <Button onClick={handleMapClick}>Let's Dive</Button>
                    <div className="p-2 pl-4 underline cursor-pointer">Explore</div>
                </div>
            </div>
        </div>
    );
}

const SubHeading = () => {
    return (
        <div style={{ width: '800px', margin: '0 auto' }}>
            <TypeAnimation
                sequence={[
                    'Celebrating 6 Years of Friendship',
                    1000,
                    'Celebrating 6 Months of Love',
                    1000,
                    'From Friends to Forever: A Love Story',
                    1000,
                    'Our Playlist, Our Love',
                    1000,
                    'From Friendship to Playlist',
                    1000,
                    'The Soundtrack of Us',
                    1000,
                ]}
                wrapper="div"
                speed={50}
                style={{
                    fontSize: '1.5em',
                    display: 'inline-block',
                    whiteSpace: 'nowrap', // Keeps text formatting as-is
                    lineHeight: '1.5em', // Adds spacing between lines
                }}
                repeat={Infinity}
            />
        </div>
    );
};

export function Image_hero() {
    return (
        <div className="w-1/2 flex items-center justify-center">
            <img
                className="w-[80%] h-auto object-cover"
                src="test/bbychan-fotor-bg-remover-20241030131252.png"
                alt="image"
            />
        </div>
    );
}

export function Navbar_left() {
    const [active, setActive] = useState(null);

    return (
        <div className="fixed top-4 inset-x-0 max-w-4xl mt-7 ml-16 z-50 bg-white shadow-md rounded-full bg-opacity-50 border border-transparent dark:bg-black dark:border-white/[0.2] rounded-tr-none">
            <div className="flex justify-between items-center py-1 px-4">
                <img src="test\Logo.png" alt="Logo" className="h-12 mx-2" // Change h-8 to h-12 for larger size
                    style={{ marginRight: 'auto', marginLeft: '0', alignSelf: 'center' }} // Align to left and center vertically
                />
                <div className="flex flex-1 justify-evenly items-center space-x-2">
                    <Link to="/" className="text-lg font-semibold text-black hover:underline">Home</Link>
                    <ScrollLink to="what-is-navix" smooth={true} duration={500} className="text-lg font-semibold text-black cursor-pointer hover:underline">
                        What is BabyVerse
                    </ScrollLink>
                    <ScrollLink to="why-navix" smooth={true} duration={500} className="text-lg font-semibold text-black cursor-pointer hover:underline">
                        Message
                    </ScrollLink>
                </div>
            </div>
        </div>
    );
}
export function Navbar_right() {
    const [active, setActive] = useState(null);

    return (
        <div className="fixed top-4 right-0 w-auto mt-7 mr-16 z-50 bg-white shadow-md rounded-full bg-opacity-50 border border-transparent dark:bg-black dark:border-white/[0.2] rounded-tl-none min-w-[200px] overflow-hidden">
            <div className="flex justify-between items-center py-1 px-4">
                <div>
                <TypeAnimation
                sequence={[
                    'Hi Kshipra',
                    1000,
                    'Hi Babygirl',
                    1000,
                ]}
                wrapper="div"
                speed={50}
                style={{
                    
                    fontSize: '1.5em',
                    display: 'inline-block',
                    whiteSpace: 'nowrap', // Keeps text formatting as-is
                    lineHeight: '1.5em', // Adds spacing between lines
                }}
                repeat={Infinity}
            />    
                </div>
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>

            </div>
        </div>
    );
}
