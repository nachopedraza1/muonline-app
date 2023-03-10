
import { Grid, Typography, Box } from '@mui/material';
import { Media, Stats } from '../interfaces/interfaces';


const statsBoss = [
    { id: 1, text: "level", iconName: "level", iconUrl: "/assets/images/icons/level.png" },
    { id: 2, text: "hp", iconName: "hp", iconUrl: "/assets/images/icons/hp.png" },
    { id: 3, text: "defense", iconName: "defense", iconUrl: "/assets/images/icons/defense.png" },
    { id: 4, text: "atkrate", iconName: "atkrate", iconUrl: "/assets/images/icons/atkrate.png" },
    { id: 5, text: "min Dmg", iconName: "min Dmg", iconUrl: "/assets/images/icons/mindmg.png" },
    { id: 6, text: "max Dmg", iconName: "max Dmg", iconUrl: "/assets/images/icons/maxdmg.png" },
    { id: 7, text: "ice Resist", iconName: "ice Resist", iconUrl: "/assets/images/icons/iceresist.png" },
    { id: 8, text: "poison Resist", iconName: "poison Resist", iconUrl: "/assets/images/icons/poisonresist.png" },
];

export const MobStats: React.FC<{ stats: Stats, media: Media }> = ({ stats, media }) => {

    const { hp, level, defense, atkrate, iceResist, maxDmg, minDmg, poisonResist } = stats;
    const { photoUrl, photoWidth } = media;

    return (
        <Grid container justifyContent="center" alignItems="center" mt={2}>
            <Grid item mr={7}>
                {statsBoss.slice(0, 4).map(({ id, text, iconUrl }) => (
                    <Grid item display="flex" alignItems="center" gap={1.5} m={2} key={id}>
                        <img src={iconUrl} width="40px" />
                        <Typography variant='h5' fontFamily="Bebas Neue" >
                            {text}:
                        </Typography>
                        <Typography variant='h6' fontSize={25}>
                            {
                                text == "hp" ? hp :
                                    text == "level" ? level :
                                        text == "defense" ? defense :
                                            text == "atkrate" ? atkrate : ""
                            }
                        </Typography>
                    </Grid>
                ))}
            </Grid>

            <Grid
                item
                xs={2.2}
                height="340px"
                display="flex"
                position="relative"
                alignItems="center"
                justifyContent="center"
            >
                <Box >
                    <div className="blue-light"></div>
                    <div className="yellow-light"></div>
                </Box>
                <img src={photoUrl} key={photoUrl} alt={`${name} protocol mu`} width={photoWidth} className="animate__animated animate__fadeIn" />
            </Grid>

            <Grid item ml={7} >
                {statsBoss.slice(4, 8).map(({ id, text, iconUrl }) => (
                    <Grid item display="flex" alignItems="center" gap={1.5} m={2} key={id}>
                        <img src={iconUrl} width="40px" />
                        <Typography variant='h5' fontFamily="Bebas Neue" >
                            {text}:
                        </Typography>
                        <Typography variant='h6' fontSize={25}>
                            {
                                text == "min Dmg" ? minDmg :
                                    text == "max Dmg" ? maxDmg :
                                        text == "ice Resist" ? iceResist :
                                            text == "poison Resist" ? poisonResist : ""
                            }
                        </Typography>
                    </Grid>
                ))}
            </Grid>
        </Grid>
    )
}
