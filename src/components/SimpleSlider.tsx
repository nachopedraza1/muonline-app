import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Grid } from "@mui/material";

export default function SimpleSlider({ maps }) {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <Slider {...settings}>
            {maps.map(({ mapName, mapUrlTex, mapUrl }) => (
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
            ))}
        </Slider>
    );
}