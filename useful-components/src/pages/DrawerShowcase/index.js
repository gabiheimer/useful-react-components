import React, { useState } from 'react';

import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';
import Drawer from '../../components/Drawer';

import { useStyles } from './styles';

export default function DrawerShowcase() {
    const classes = useStyles();

    const [ openDrawer, setOpenDrawer ] = useState(false)

    return (
        <div className={classes.container}>
            <nav className={classes.navBar}>
            </nav>
            <div className={classes.content}>
                <button onClick={() => setOpenDrawer(true)}>
                    <InfoIcon className={classes.infoIcon} />
                </button>
                <Drawer open={openDrawer} >
                    <button onClick={() => setOpenDrawer(false)}>
                        <CloseIcon />
                    </button>
                    <h1> aksndkasndaskjdnas aksdnasdnasdnasd aksndajsdasjdna aksdnajsdn</h1>
                </Drawer>
            </div>
        </div>
    );
}