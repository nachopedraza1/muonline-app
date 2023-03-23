import { useCustomSelector } from '../hooks/useRedux';

import { MobStats, DropMob, MapContainer } from './index';

import { Divider, Grid, IconButton, Typography, Tooltip } from '@mui/material';
import { KeyboardArrowRight, Share } from '@mui/icons-material';

export const MainGuide: React.FC = () => {

    const { guides } = useCustomSelector(state => state.guides);

    const { name, type, info: { infoBoss } } = guides

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

            <Grid container bgcolor="white" p={4}>
                <Grid className="animate__animated animate__fadeIn" key={name}>
                    <Grid container justifyContent="space-between" alignItems="center">
                        <Grid item display="flex" alignItems="center">
                            <img src="/assets/images/spr_etc.png" width="30px" />
                            <Typography variant="subtitle1" fontSize={35} ml={1} color="#6e5856"> {name} </Typography>
                        </Grid>
                        <Grid item>
                            <Tooltip title="Solicitar correcion" arrow placement='top-start'>
                                <IconButton>
                                    <img src="/assets/images/reg_update.svg" width="35px" />
                                </IconButton>
                            </Tooltip>
                        </Grid>
                    </Grid>
                    <Divider />

                    <Grid container justifyContent="end" alignItems="center" gap={1}>
                        <Typography variant="subtitle1" color="#a1a0a0" fontSize={14}>
                            Última modificación : 08 mar. 2023, 05:37 (UTC)
                        </Typography>
                        <Tooltip title="Compartir Guia" arrow placement='bottom-start'>
                            <IconButton >
                                <Share sx={{ color: "#a1a0a0" }} />
                            </IconButton>
                        </Tooltip>
                    </Grid>

                    <Grid container>
                        <Typography
                            maxWidth="md"
                            fontSize={18}
                            textAlign="start"
                            margin="auto"
                            color="#6e5856"
                            mt={2}
                        >
                            {infoBoss}
                        </Typography>
                    </Grid>


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

                        <MobStats />

                        <Grid container justifyContent="center" alignItems="center">
                            <MapContainer />
                            <DropMob />
                        </Grid>

                    </Grid>


                    {/*  <Grid container >
                        <iframe width="100%" height="430" src="https://www.youtube.com/embed/Gv1dY_5MXFo" title="SEMI BOOS WHITE WIZZAR PROTOCOL MU ONLINE" frameBorder="0" allowFullScreen></iframe>
                    </Grid> */}
                </Grid>

            </Grid>
        </>
    )
}
