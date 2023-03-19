import { Divider, Grid, IconButton, Typography } from '@mui/material';
import { KeyboardArrowRight, Share } from '@mui/icons-material';
import { MobStats } from './MobStats';
import { MapContainer } from './MapContainer';
import { GuideType } from '../interfaces/interfaces';
import { DropMob } from './DropMob';

export const MainGuide: React.FC<{ guides: GuideType[] }> = ({ guides }) => {

    const guideInfo = guides[0]

    const { name, type, info: { infoBoss } } = guideInfo;

    return (
        <>
            <Grid container alignItems="center">
                <Typography variant="subtitle1" fontSize={15}>
                    {type}
                </Typography>
                <KeyboardArrowRight />
                <Typography variant="subtitle1" fontSize={15}>
                    {name}
                </Typography>
            </Grid>

            <Grid container bgcolor="#1d1a1a" p={4}>
                <Grid container justifyContent="space-between" alignItems="center">
                    <Grid item display="flex" alignItems="center">
                        <img src="/assets/images/spr_etc.png" width="30px" />
                        <Typography variant="subtitle1" fontSize={35} ml={1}> {name} </Typography>
                    </Grid>
                    <Grid item>
                        <IconButton>
                            <img src="/assets/images/reg_update.svg" width="35px" />
                        </IconButton>
                    </Grid>
                </Grid>
                <Divider />

                <Grid container justifyContent="end" alignItems="center" gap={1}>
                    <Typography variant="subtitle1" color="#a1a0a0" fontSize={14}>
                        Última modificación : 08 mar. 2023, 05:37 (UTC)
                    </Typography>
                    <IconButton >
                        <Share sx={{ color: "#a1a0a0" }} />
                    </IconButton>
                </Grid>

                <Grid item >
                    <Typography
                        maxWidth="md"
                        fontSize={18}
                        textAlign="start"
                        margin="auto"

                        mt={2}
                    >
                        {infoBoss}
                    </Typography>
                </Grid>


                {guides.map(({ name, info, drop, maps, media, stats }) => (
                    <Grid container direction="column" alignItems="center" key={name} mt={3}>
                        <Grid
                            item
                            margin="auto"
                            sx={{
                                backgroundImage: "url(/assets/images/pvp-item-bg-def.png)",
                                backgroundSize: "100%",
                                backgroundRepeat: "no-repeat",
                                width: "400px",
                                height: "60px"
                            }}>
                            <Typography
                                variant='h4'
                                fontSize={28}
                                textAlign="center"
                                pt={2}
                            >
                                {name}
                            </Typography>
                        </Grid>

                        <MobStats stats={stats} media={media} />

                        <Grid container justifyContent="center"  >

                            <Grid container direction="column" >
                                <Grid container justifyContent="center" alignItems="center">
                                    <img src="/assets/images/icons/map.png" width="50px" />
                                    <Typography variant='h4' ml={1} >
                                        Maps
                                    </Typography>
                                </Grid>
                                <MapContainer maps={maps} />
                            </Grid>

                            <Grid container direction="column" gap={2}>
                                <Grid display="flex" justifyContent="center" alignItems="center">
                                    <img src="/assets/images/icons/drop.png" width="50px" />
                                    <Typography variant='h4' ml={1} >
                                        Drop
                                    </Typography>
                                </Grid>
                                <DropMob drop={drop} info={info} />
                            </Grid>

                        </Grid>
                    </Grid>
                ))}

            </Grid>
        </>
    )
}
