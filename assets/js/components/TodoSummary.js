import React from 'react';
import {Link} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import {Card, CardContent, List, IconButton} from '@material-ui/core';
import {CardHeader} from './basic/CardHeader'
import {ListBody} from './basic/ListBody'

const useStyles = makeStyles((theme) => ({
    card: {
        display: 'flex',
        flexDirection: 'column',
        width: '32%',
        minWidth: '300px',
        margin: '1vw 0',
        backgroundColor: '#eee',
        borderRadius: '0.5vw',
    },
    content: {
        flex: '1 0 auto',
    },
    flex: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    details: {
        display: 'flex',
        alignContent: 'center',
    },
    title: {
        fontSize: 14,
    },
}));

export const TodoSummary = ({data}) => {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardContent className={classes.content}>
                <div className={`${classes.details} ${classes.flex}`}>
                    <CardHeader data={data.title} />
                </div>
                {data.data.slice(0,3).map((item, key) => (
                    <List key={key}>
                        <ListBody data={item}/>
                    </List>

                ))}
            </CardContent>
        </Card>
    );
}