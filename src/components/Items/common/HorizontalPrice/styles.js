import { makeStyles } from "@mui/styles";
import {alpha} from "@mui/system";

export default makeStyles( theme => ({
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
