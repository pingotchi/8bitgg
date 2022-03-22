import { makeStyles } from '@mui/styles';
import { alpha } from '@mui/system';

export default makeStyles(theme => ({
    customTooltip: {
        backgroundColor: theme.palette.secondary.dark,
        marginBottom: 8
    },
    gotchiId: {
        backgroundColor: alpha(theme.palette.secondary.dark, .1),
        border: `3px solid ${alpha(theme.palette.secondary.dark, .3)}`,
        fontSize: 13,
        fontWeight: '700',
        minWidth: 70,
        opacity: .8,
        marginRight: 'auto',
        '.narrowed &': {
            minWidth: 50,
            backgroundColor: theme.palette.primary.main
        }
    }
}));
