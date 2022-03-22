import { makeStyles } from '@mui/styles';
import { alpha } from '@mui/system';

export default makeStyles(theme => ({
    rankBox: {
        position: 'absolute',
        bottom: 0,
        left: 0
    },
    rankStatus: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2px 8px',
        position: 'relative',
        bgcolor: alpha(theme.palette.secondary.dark, .5)
    },
    rankReward: {
        display: 'inline-flex',
        alignItems: 'center',
        marginLeft: 6
    },
    rankStatusText: {
        color: theme.palette.warning.main,
        fontSize: 14,
        fontWeight: 600
    },
    rankRewardAmount: {
        display:'inline-flex',
        alignItems:'center',
        justifyContent:'center',
        padding:'2px 2px 2px 8px',
        position:'relative',
        backgroundColor: alpha(theme.palette.primary.main, .2),
        fontSize: 12,
        textShadow: `1px 1px 0 ${alpha(theme.palette.secondary.main, .8)}`
    },
    rankRewardAmountNumber: {
        fontSize: 14,
        fontWeight: 600,
        lineHeight: 1.43,
        margin: '0 2px'
    }
}));
