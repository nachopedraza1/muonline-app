import { useState } from 'react';
import { characterStats } from "../helpers";

import { ModalBuild, SliderCharacters } from "../components";

import { SliderHero } from '../interfaces/interfaces';

export const CharacterPage: React.FC = () => {

    const [heroDisplay, setHeroDisplay] = useState<SliderHero>(characterStats[0]);

    const { id, name, heroUrl, heroClass, info, stats, builds } = heroDisplay;

    const handleTouchSlider = (id: number) => {
        const heroInfo = characterStats.find(hero => hero.id === id) as SliderHero;
        setHeroDisplay(heroInfo);
    }

    const [openModal, setOpenModal] = useState(false);
    const handleOpen = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);

    return (
        <>
            <SliderCharacters handleTouchSlider={handleTouchSlider} />
            <div className="slider slider-for slick-initialized slick-slider" style={{ marginBottom: "30px" }}>
                <div className="slick-list draggable">
                    <div className="slick-track" style={{ opacity: 1, width: "100%" }}>
                        <div
                            className={`slick-slide slick-current slick-active`}
                            style={{
                                width: "100%",
                                position: "relative",
                                left: 0,
                                top: 0,
                                opacity: 1
                            }}
                        >
                            <div
                                className="slideFor"
                                style={{ width: "100%", display: "inline-block" }}
                            >
                                <div className="tabs slideTabs">
                                    <div className="tabs-content slideContent active">
                                        <div key={id} className="animate__animated animate__fadeIn">
                                            <div>
                                                <img
                                                    src={heroUrl}
                                                    alt="Hero"
                                                    className="slide-hero"
                                                />
                                            </div>
                                            <div>
                                                <img
                                                    src={heroClass}
                                                    alt="Hero Logo"
                                                    className="hero-logo"
                                                />
                                            </div>
                                            <div>
                                                <img
                                                    src="https://x500.paragon-mu.com/assets/eos/images/hero-trailer.png"
                                                    alt="Hero Trailer"
                                                    className="hero-trailer"
                                                    data-title="Dark Knight Presentation"
                                                    data-video="7StU88B3JVk"
                                                />
                                            </div>
                                            <div className='hero-build' onClick={handleOpen}>
                                                <img src="/assets/images/build.png" alt="Build protocol mu" width={80} />
                                            </div>
                                        </div>
                                        <div className="slideInfo">
                                            <span key={name} className="slideInfo-name animate__animated animate__fadeIn"> {name} </span>
                                            <div key={id} className="slideInfo-text animate__animated animate__fadeIn" >
                                                {info}
                                            </div>
                                            <div className="slideInfo-stats">
                                                <div className="slideInfo-stats_title">Statistics:</div>
                                                {stats.map(({ tittle, value, color }) => (
                                                    <div key={tittle} className="stats">
                                                        <span className="stats-name">{tittle}</span>
                                                        <span className={`stats-bar ${color}`}>
                                                            <span style={{ maxWidth: `${value}%` }} />
                                                        </span>
                                                        <span className={`stats-number ${color}`}>{value} </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ModalBuild openModal={openModal} handleClose={handleClose} builds={builds} />
        </ >
    )
}