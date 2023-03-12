import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import { Grid } from "@mui/material";
import { Maps } from "../interfaces/interfaces";


/* function NextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                display: "block",
                background: "url(/assets/images/nav-back.png)",
                backgroundSize: "cover"
            }}
            onClick={onClick}
        />
    );
}

function PrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                display: "block",
                background: "url(/assets/images/nav-next.png)",
                backgroundSize: "cover"
            }}
            onClick={onClick}
        />
    );
} */

export const SlideMaps: React.FC<{ maps: Maps }> = ({ maps }) => {

    const { mapName, mapUrl, mapUrlTex } = maps;

    /*     const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: <NextArrow />,
            nextArrow: <PrevArrow />,
        }; */
    return (
        /*   <div>
              <Slider {...settings} className="slide-item"> */
        <Grid key={mapName} container className='map-item'>
            <img
                src={mapUrlTex}
                width="150px"
                alt={`${mapName} protocol mu`}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    margin: "auto"
                }}
            />
            <img src={mapUrl} alt={`${mapName} protocol mu`} className="img-map" />
        </Grid>
        /*             </Slider>
                </div> */
    );
}