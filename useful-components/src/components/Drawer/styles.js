import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
    drawer: {
        position: "absolute",
        width: props => props.width,
        height: props => props.height,
        boxShadow: "0px 5px 6px #0000004D",
        left: 0,
        top: 0,
        transition: "transform .2s",
        backgroundColor: "white"
    },
    drawerClose: {
        transform: props => `translateX(-${props.width})`
    }
});