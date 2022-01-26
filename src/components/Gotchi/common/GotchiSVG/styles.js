import { makeStyles } from "@mui/styles";
import {alpha} from "@mui/system";

export default makeStyles( theme => ({
    gotchiSvg: {
        margin: '0 -8px',
        padding: 8,
        position: 'relative',

        '.haunt1 &': {
            backgroundColor: alpha(theme.palette.haunts.h1, .15)
        },

        '.haunt2 &': {
            backgroundColor: alpha(theme.palette.haunts.h2, .15)
        },

        '.narrowed &': {
            padding: 0,
            marginTop: 5
        },
        gotchiSetName: {
            position: 'absolute',
            bottom: 10,
            right: 0,
            left: 0,
            pointerEvents: 'none'
        },

        // horizontal mode
        '&.horizontal': {
            minWidth: 150
        }
    }
}));
