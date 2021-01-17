import React from 'react';
import {useForm} from 'react-hook-form';
import {makeStyles} from '@material-ui/core/styles';
import {Button, CardContent, Card, InputLabel} from '@material-ui/core'
import {CardHeader} from '../../basic/CardHeader'
import {newObjectAddress} from '../../../api/ObjectsAddresses'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        width: '30%',
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
}));

export default function ObjectAddress() {
    const classes = useStyles();
    const {handleSubmit, register} = useForm()
    const onSubmit = async (data) => {
        const newObject = await newObjectAddress(JSON.stringify(data))
    }

    return (
        <Card id="object-address-add" className={classes.card}>
            <CardContent className={classes.content}>
                <div className={`${classes.details} ${classes.flex}`}>
                    <CardHeader data="Dodaj lokalizację"/>
                </div>
                <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                    <InputLabel id='demo-simple-select-label'>Nazwa</InputLabel>
                    <input
                        name="name"
                        ref={register}
                    />
                    <InputLabel id='demo-simple-select-label'>Ulica</InputLabel>
                    <input
                        name="street"
                        ref={register}
                    />
                    <InputLabel id='demo-simple-select-label'>Nr domu</InputLabel>
                    <input
                        name="streetNumber"
                        ref={register}
                    />
                    <InputLabel id='demo-simple-select-label'>Telefon</InputLabel>
                    <input
                        name="phoneNumber"
                        ref={register}
                    />
                    <InputLabel id='demo-simple-select-label'>Email</InputLabel>
                    <input
                        name="email"
                        ref={register}
                    />
                    <Button variant="contained" color="primary" type="submit">
                        Send
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}
