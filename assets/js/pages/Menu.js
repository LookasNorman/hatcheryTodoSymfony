import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Divider, List} from "@material-ui/core";
import MenuItem from "../components/basic/MenuItem";
import {
    Devices,
    DevicesOther, Home,
    ListAlt,
    LocationOn,
    MeetingRoom,
    Style,
    Toc,
    ViewList
} from "@material-ui/icons";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
}));

export default function Menu() {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.toolbar}/>
            <Divider/>
            <List>
                {[
                    {title: 'Strona główna', icon: <Home/>, path: '/pl/'},
                    {title: 'Zadania', icon: <ListAlt/>, path: '/pl/zadania'},
                    {title: 'Reklamacje', icon: <ViewList/>, path: '/pl/reklamacje'},
                    {title: 'Zamówienia', icon: <Toc/>, path: '/pl/zamowienia'},
                    {title: 'Typy zadań', icon: <Style/>, path: '/pl/typy_zadan'}
                ].map((item, index) => (
                    <MenuItem key={index} item={item}/>
                ))}
            </List>
            <Divider/>
            <List>
                {[
                    {title: 'Lokalizacje', icon: <LocationOn/>, path: '/pl/lokalizacje'},
                    {title: 'Hale', icon: <MeetingRoom/>, path: '/pl/hale'},
                    {title: 'Grupy maszyn', icon: <DevicesOther/>, path: '/pl/grupy_maszyn'},
                    {title: 'Maszyny', icon: <Devices/>, path: '/pl/maszyny'}
                ].map((item, index) => (
                    <MenuItem key={index} item={item}/>
                ))}
            </List>
        </div>
    )
}
