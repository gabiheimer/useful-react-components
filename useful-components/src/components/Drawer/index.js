import React from 'react';
import { useStyles } from './styles';

export default function Drawer({ children, height, width, open }) {
    const classes = useStyles({ width, height });

    return (
        <div className={`${classes.drawer} ${!open ? classes.drawerClose : ""}`}>
            {children}
        </div>
    );
}

Drawer.defaultProps = {
    width: "500px",
    height: "100%",
    open: false,
    children: null
}