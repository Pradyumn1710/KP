import { TypeAnimation } from "react-type-animation";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Homepage() {
  return (
    <div>
      <Hero_Header />
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
