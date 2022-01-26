import { makeStyles } from "@mui/styles";

export default makeStyles( theme => ({
    customTooltip: {
        backgroundColor: theme.palette.secondary.dark,
        marginBottom: 8
    },
    gotchiBadge: {
        height: 25,
        display: 'block',
        marginLeft: 6,
        '& img': {
            display: 'block'
        }
    }
}));
