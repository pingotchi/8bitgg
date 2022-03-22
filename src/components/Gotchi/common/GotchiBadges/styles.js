import { makeStyles } from '@mui/styles';

export default makeStyles(theme => ({
    gotchiBadges: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        margin: '0 -4px',
        padding: '4px 0',
        '.narrowed &': {
            padding: 0
        }
    }
}));
