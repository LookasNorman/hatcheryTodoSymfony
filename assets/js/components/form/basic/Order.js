import React, {useEffect, useState} from 'react'
import {useForm} from 'react-hook-form';
import {makeStyles} from '@material-ui/core/styles';
import {Button, CardContent, Card, InputLabel} from '@material-ui/core'
import {CardHeader} from '../../basic/CardHeader'
import {getObjectsAddresses} from '../../../api/ObjectsAddresses'
import {postNewOrders} from "../../../api/Orders";

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

export default function Order() {
    const classes = useStyles();
    const {handleSubmit, register} = useForm()
    const onSubmit = async (data) => {
        const postData = await postNewOrders(JSON.stringify(data))
    }
    const [objectAddressList, setObjectAddressList] = useState()

    useEffect(() => {
        const fetchData = async () => {
            const objectAddress = await getObjectsAddresses()
            if (!objectAddress.error) {
                setObjectAddressList(objectAddress.data)
            }
        }
        fetchData()
    }, [])

    return (
        <Card className={classes.card}>
            <CardContent className={classes.content}>
                <div className={`${classes.details} ${classes.flex}`}>
                    <CardHeader data="Dodaj halę / kurnik"/>
                </div>
                <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                    <InputLabel id="demo-simple-select-label">Tytuł</InputLabel>
                    <input
                        name="name"
                        ref={register}
                    />
                    <InputLabel id="demo-simple-select-label">Opis</InputLabel>
                    <input
                        name="description"
                        ref={register}
                    />
                    <InputLabel id="demo-simple-select-label">Dostawca</InputLabel>
                    <input
                        name="supplier"
                        ref={register}
                    />
                    <InputLabel id="demo-simple-select-label">Data zgłoszenia</InputLabel>
                    <input
                        name="orderDate"
                        ref={register}
                    />
                    <InputLabel id="demo-simple-select-label">Lokalizacja</InputLabel>
                    <select
                        name="objectAddress"
                        ref={register}
                    >
                        {objectAddressList && objectAddressList.map((item) => (
                            <option key={item.id} value={item['@id']}>{item.name}</option>
                        ))}
                    </select>
                    <Button variant="contained" color="primary" type="submit">
                        Send
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}
