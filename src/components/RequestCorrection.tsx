import { Tooltip, IconButton } from '@mui/material';

export const RequestCorrection: React.FC = () => {
    return (
        <Tooltip title="Solicitar correcion" arrow placement='top-start'>
            <IconButton>
                <img src="/assets/images/reg_update.svg" width="35px" />
            </IconButton>
        </Tooltip>
    )
}
