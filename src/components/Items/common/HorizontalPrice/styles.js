import { makeStyles } from '@mui/styles';

export default makeStyles(theme => ({
    priceRoot: {
        '& img': {
            width: 25
        },
        width: '20%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 16,
        fontWeight: 800
    }
}));
