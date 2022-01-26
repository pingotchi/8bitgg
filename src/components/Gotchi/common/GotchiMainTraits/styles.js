import { makeStyles } from "@mui/styles";

export default makeStyles( theme => ({
    gotchiMainTraits: {
        margin: '8px 0'
    },
    gotchiTraits: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        minHeight: 26
    },
    gotchiTraitsInner: {
        textAlign: 'center',
        flexBasis: '49%',
        margin: '2px 0'
    },
    mainVal: {
        fontSize: 13,
        fontWeight: 600,
        margin: 0,
        padding: '1px 0',
        whiteSpace: 'nowrap'
    },
    defaultVal: {
        fontSize: 10,
        marginLeft: 2
    }
}));
