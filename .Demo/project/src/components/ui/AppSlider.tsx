import { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface SliderItem {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
}

const sliderItems: SliderItem[] = [
  {
    id: 'app001',
    title: 'Programming Hero',
    subtitle: 'Start your coding journey today',
    imageUrl: 'https://i.ibb.co.com/nNC17Syw/Bid2-min.png'
  },
  {
    id: 'app003',
    title: 'Minecraft',
    subtitle: 'Build your imagination',
    imageUrl: 'https://i.ibb.co.com/nNC17Syw/Bid2-min.png'
  },
  {
    id: 'app009',
    title: 'Genshin Impact',
    subtitle: 'Explore the vast world of Teyvat',
    imageUrl: 'https://i.ibb.co.com/nNC17Syw/Bid2-min.png'
  }
];

function AppSlider() {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <div className="relative">
      <Slider ref={sliderRef} {...settings}>
        {sliderItems.map((item) => (
          <div key={item.id} className="relative h-[400px] md:h-[500px]">
            <img 
              src={item.imageUrl} 
              alt={item.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">{item.title}</h2>
              <p className="text-lg md:text-xl mb-6">{item.subtitle}</p>
              <Link 
                to={`/apps/${item.id}`} 
                className="btn bg-primary-600 hover:bg-primary-700 text-white py-2 px-6 rounded-full w-fit"
              >
                See Details
              </Link>
            </div>
          </div>
        ))}
      </Slider>

      <button 
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/30 hover:bg-white/50 rounded-full flex items-center justify-center backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft className="text-white" />
      </button>
      
      <button 
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/30 hover:bg-white/50 rounded-full flex items-center justify-center backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight className="text-white" />
      </button>
    </div>
  );
}

export default AppSlider;