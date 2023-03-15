
import Slider from "react-slick"
import { NextArrow, PrevArrow } from "../helpers";

const characters = [
    { id: 1, name: "Dark Knight", heroUrl: "/assets/images/hero-1.png" },
    { id: 2, name: "Dark Wizard", heroUrl: "/assets/images/hero-2.png" },
    { id: 3, name: "Fairy Elf", heroUrl: "/assets/images/hero-3.png" },
    { id: 4, name: "Magic Gladiator", heroUrl: "/assets/images/hero-4.png" },
    { id: 5, name: "Dark Lord", heroUrl: "/assets/images/hero-5.png" },
    { id: 6, name: "Summoner", heroUrl: "/assets/images/hero-6.png" },
    { id: 7, name: "Rage Fighter", heroUrl: "/assets/images/hero-7.png" },
];

export const SliderCharacters: React.FC = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        centerMode: true,
        focusOnSelect: true,
        slidesToScroll: 1,
        prevArrow: <NextArrow />,
        nextArrow: <PrevArrow />,
    };

    return (
        <>
            <Slider {...settings} className="slider-characters">
                {characters.map(({ id, name, heroUrl }) => (
                    <div className="slideNav" >
                        <div className="slideNav-img">
                            <img src={heroUrl} alt="Hero" />
                        </div>
                        <div className="slideNav-text">
                            {name}
                        </div>
                    </div>
                ))}
            </Slider>
            <span className="line"></span>
        </>
    )
}