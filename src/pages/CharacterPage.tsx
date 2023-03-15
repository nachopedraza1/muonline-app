
import { Grid } from "@mui/material";
import { SliderCharacters } from "../components";
import { MainLayout } from "../layout/MainLayout";

export const CharacterPage: React.FC = () => {


    return (
        <MainLayout>
            <Grid className="slider slider-for slick-initialized slick-slider">
                <Grid className="slick-list draggable">
                    <Grid className="slick-track" style={{ opacity: 1, width: 12236 }}>
                        <Grid
                            className="slick-slide slick-current slick-active"
                            data-slick-index={0}
                            aria-hidden="false"
                            style={{
                                width: 874,
                                position: "relative",
                                left: 0,
                                top: 0,
                                opacity: 1
                            }}
                        >
                            <Grid>
                                <Grid
                                    className="slideFor"
                                    style={{ width: "100%", display: "inline-block" }}
                                >
                                    <Grid className="tabs slideTabs">
                                        <Grid className="tabs-content slideContent active">
                                            <img
                                                src="https://x500.paragon-mu.com/assets/eos/images/hero_1.png"
                                                alt="Hero"
                                                className="slide-hero"
                                            />
                                            <img
                                                src="https://x500.paragon-mu.com/assets/eos/images/hero-logo.png"
                                                alt="Hero Logo"
                                                className="hero-logo"
                                            />
                                            <img
                                                src="https://x500.paragon-mu.com/assets/eos/images/hero-trailer.png"
                                                alt="Hero Trailer"
                                                className="open_modal hero-trailer"
                                                data-title="Dark Knight Presentation"
                                                data-video="7StU88B3JVk"
                                            />
                                            <Grid className="slideInfo">
                                                <span className="slideInfo-name">Dark Knight</span>
                                                <Grid className="slideInfo-text">
                                                    The Dark Knights are the embodiment of strength and power.
                                                    They lack range skills but in close combat, they can deliver
                                                    deadly attacks and perform devastating combos. Knights use
                                                    various party buffs such as stamina increase or when
                                                    equipped with a shield, they can transform into tanks and
                                                    use solid protection stance, that increase power and defense
                                                    of all party members.
                                                </Grid>
                                                <Grid container className="slideInfo-stats">
                                                    <Grid item xs={12} className="slideInfo-stats_title">Statistics:</Grid>
                                                    <Grid item xs={6} className="stats">
                                                        <span className="stats-name">Single target</span>
                                                        <span className="stats-bar stat-green">
                                                            <span style={{ maxWidth: "80%" }} />
                                                        </span>
                                                        <span className="stats-number stat-green">80</span>
                                                    </Grid>
                                                    <Grid item xs={6} className="stats">
                                                        <span className="stats-name">Survivability</span>
                                                        <span className="stats-bar stat-green">
                                                            <span style={{ maxWidth: "100%" }} />
                                                        </span>
                                                        <span className="stats-number stat-green">100</span>
                                                    </Grid>
                                                    <Grid item xs={6} className="stats">
                                                        <span className="stats-name">AOE Damage</span>
                                                        <span className="stats-bar stat-red">
                                                            <span style={{ maxWidth: "35%" }} />
                                                        </span>
                                                        <span className="stats-number stat-red">35</span>
                                                    </Grid>
                                                    <Grid item xs={6} className="stats">
                                                        <span className="stats-name">Difficulity</span>
                                                        <span className="stats-bar stat-red">
                                                            <span style={{ maxWidth: "75%" }} />
                                                        </span>
                                                        <span className="stats-number stat-red">75</span>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <SliderCharacters />
        </MainLayout >
    )
}