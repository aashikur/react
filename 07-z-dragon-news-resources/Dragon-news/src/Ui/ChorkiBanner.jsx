// import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import Button from "./Button";

const ChorkiPromoBanner = ({ bannerUrl, thumbnailUrl }) => {
  return (
    <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg bg-black">
      {/* Background banner image */}
      <img
        src={`${bannerUrl}`}
        alt="Chorki banner"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      {/* Content */}
      <div className="relative z-10 flex items-center h-full px-6 md:px-12">
        {/* App thumbnail (1:1) */}
        <img 
            src={`${thumbnailUrl}`}
          className="w-40 rounded-xl border-2 border-white shadow-lg mr-4 md:mr-6"
        />

        {/* Text & button */}
        <div className="text-white space-y-2 text-left">
          <h2 className="text-2xl md:text-4xl font-bold">Chorki</h2>
          <p className="text-sm md:text-base max-w-md">
            Watch premium Bangla movies and web series—anytime, anywhere. Discover exclusive original content only on Chorki.
          </p>
          <Link to="/app/app001">
            <Button className="mt-2 bg-red-600 hover:bg-red-700 text-white rounded-full px-5 py-2">
              Watch Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChorkiPromoBanner;
