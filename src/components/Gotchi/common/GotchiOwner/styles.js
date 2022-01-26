import { makeStyles } from "@mui/styles";

export default makeStyles( theme => ({
    owner: {
        '&:hover': {
            textDecoration: 'underline'
        },
        '$gotchiBadges &': {
            marginRight: 'auto'
        },
        '.narrowed &': {
            fontSize: 12
        }
    }
}));
