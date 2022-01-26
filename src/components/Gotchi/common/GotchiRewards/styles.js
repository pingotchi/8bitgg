import { makeStyles } from "@mui/styles";
import {alpha} from "@mui/system";

export default makeStyles( theme => ({
    rankBox: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    rankReward: {
        display: 'inline-flex',
        alignItems: 'center',
        color: 'primary.main'
    },
    customTooltip: {
        backgroundColor: theme.palette.secondary.dark,
        marginBottom: 8
    },
    rankRewardAmount: {
        display:'inline-flex',
        alignItems:'center',
        justifyContent:'center',
        padding:'3px 2px 3px 8px',
        position:'relative',
        bottom:-8,
        right:-8,
        backgroundColor: alpha(theme.palette.secondary.dark, .5)
    },
    rankRewardAmountNumber: {
        fontSize: 14,
        fontWeight: 600
    },
    rankStatus: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '3px 8px',
        position: 'relative',
        bottom: -8,
        right: -8,
        bgcolor: alpha(theme.palette.secondary.dark, .5)
    },
    rankStatusText: {
        color: theme.palette.warning.main,
        fontSize: 14,
        fontWeight: 600
    }
}));
