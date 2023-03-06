import { Grid, Typography } from '@mui/material';
import { useFindMob } from '../hooks/useFindMob';
import { useState, useEffect } from 'react';


const statsBoss = [
    { id: 1, text: "level", iconUrl: "/assets/images/icons/level.png" },
    { id: 2, text: "hp", iconUrl: "/assets/images/icons/hp.png" },
    { id: 3, text: "defense", iconUrl: "/assets/images/icons/defense.png" },
    { id: 4, text: "atkrate", iconUrl: "/assets/images/icons/atkrate.png" },
    { id: 5, text: "min Dmg", iconUrl: "/assets/images/icons/mindmg.png" },
    { id: 6, text: "max Dmg", iconUrl: "/assets/images/icons/maxdmg.png" },
    { id: 7, text: "ice Resist", iconUrl: "/assets/images/icons/iceresist.png" },
    { id: 8, text: "poison Resist", iconUrl: "/assets/images/icons/poisonresist.png" },
];

export const MobStats: React.FC = () => {

    const { name, photoUrl, photoWidth, level, atkrate, defense, hp, iceResist, maxDmg, minDmg, poisonResist } = useFindMob();

    return (
        <Grid container justifyContent="center" alignItems="center" mt={2}>
            <Grid item mr={7} >
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
            <Grid item xs={2.2} height="340px" textAlign="center">
                <img id="test" src={photoUrl} alt={`${name} protocol mu`} width={photoWidth} />
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
