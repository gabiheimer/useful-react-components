import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
    container: {
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column"
    },
    navBar: {
        width: "100%",
        height: 80,
        backgroundColor: "skyblue",
        boxShadow: "0px 1px 2px #0000004D"
    },
    infoIcon: {
        color: "lightgreen"
    },
    content: {
        padding: 10,
        position: "relative",
        flexGrow: 1
    }
});