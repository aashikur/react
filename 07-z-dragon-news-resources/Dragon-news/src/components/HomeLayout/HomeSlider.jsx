import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const HomeSlider = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 3
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div>
            <div className="container">
                <div className="carousel w-full h-96">
                    <div id="slide1" className="carousel-item relative w-full border bg-amber-300">
                        {/* <img src="https://i.ibb.co/6mY0J4K/slider1.jpg" className="w-full" /> */}
                        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 top-1/4">
                            <h1 className='text-5xl font-bold text-white'>Welcome to Our Website</h1>
                        </div>
                        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 top-1/2">
                            <p className='text-white'>Discover amazing content and connect with others.</p>
                        </div>
                        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 top-3/4">
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item bg-green-200 relative w-full">
                        {/* <img src="https://i.ibb.co/6mY0J4K/slider2.jpg" className="w-full" /> */}
                        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 top-1/4">
                            <h1 className='text-5xl font-bold text-white'>Join Our Community</h1>
                        </div>
                        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 top-1/2">
                            <p className='text-white'>Connect with like-minded individuals.</p>
                        </div>
                        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 top-3/4">
                            <button className="btn btn-primary">Join Now</button>
                        </div>
                    </div>
                    {/* Add more slides as needed */}
                </div>
            </div>
            <hr />
            <div className="container">

                <Carousel responsive={responsive}
                    infinite={true}
                    autoPlaySpeed={1000}

                >
                    <div style={{ width: '', aspectRatio: ' 16 / 9 ', background: 'red' }}>
                        Content here
                    </div>
                    <div style={{ width: '', aspectRatio: ' 16 / 9 ', background: 'yellow' }}>
                        Content here
                    </div>
                    <div style={{ width: '', aspectRatio: ' 16 / 9 ', background: 'teal' }}>
                        Content here
                    </div>
                    <div style={{ width: '', aspectRatio: ' 16 / 9 ', background: 'pink' }}>
                        Content here
                    </div>

                </Carousel>;
            </div>
        </div>
    );
};

export default HomeSlider;