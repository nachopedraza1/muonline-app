
import Slider from "react-slick"
import { NextArrow, PrevArrow } from "../helpers";
import { SetDisplayHero } from "../interfaces/interfaces";

const characters = [
    { id: 0, name: "Dark Knight", heroUrl: "/assets/images/hero-1.png" },
    { id: 1, name: "Dark Wizard", heroUrl: "/assets/images/hero-2.png" },
    { id: 2, name: "Fairy Elf", heroUrl: "/assets/images/hero-3.png" },
    { id: 3, name: "M. Gladiator", heroUrl: "/assets/images/hero-4.png" },
    { id: 4, name: "Dark Lord", heroUrl: "/assets/images/hero-5.png" },
    { id: 5, name: "Summoner", heroUrl: "/assets/images/hero-6.png" },
    { id: 6, name: "Rage Fighter", heroUrl: "/assets/images/hero-7.png" },
];

export const SliderCharacters: React.FC<SetDisplayHero> = ({ handleTouchSlider }) => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        centerMode: true,
        focusOnSelect: true,
        slidesToScroll: 1,
        prevArrow: <NextArrow handleTouchSlider={handleTouchSlider} />,
        nextArrow: <PrevArrow handleTouchSlider={handleTouchSlider} />,
        beforeChange: (prev: number, next: number) => handleTouchSlider(next),
    };


    return (
        <>
            <Slider {...settings} className="slider-characters">
                {characters.map(({ id, name, heroUrl }) => (
                    <div key={id} className="slideNav" onClick={() => handleTouchSlider(id)}>
                        <div className="slideNav-img">
                            <img src={heroUrl} alt="Hero" />
                        </div>
                        <div className="slideNav-text">
                            {name}
                        </div>
                    </div>
                ))}
            </Slider>
           {/*  <span className="line"></span> */}
        </>
    )
}