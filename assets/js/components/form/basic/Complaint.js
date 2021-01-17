import React, {useEffect, useState} from 'react'
import {useForm} from 'react-hook-form';
import {makeStyles} from '@material-ui/core/styles';
import {TextField, Button, CardContent, Card, InputLabel, Select, MenuItem} from '@material-ui/core'
import {CardHeader} from '../../basic/CardHeader'
import {getMachines} from '../../../api/Machines'
import {postNewTodo} from "../../../api/Todos";
import {postNewComplaints} from "../../../api/Complaints";

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

export default function Complaint() {
    const classes = useStyles();
    const {handleSubmit, control, register} = useForm()
    const [machineList, setMachineList] = useState()
    const onSubmit = async (data) => {
        const postData = await postNewComplaints(JSON.stringify(data))
    }

    useEffect(() => {
        const fetchData = async () => {
            const machines = await getMachines()
            if (!machines.error) {
                setMachineList(machines.data)
            }
        }
        fetchData()
    }, [])

    return (
        <Card className={classes.card}>
            <CardContent className={classes.content}>
                <div className={`${classes.details} ${classes.flex}`}>
                    <CardHeader data="Dodaj reklamację"/>
                </div>
                <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                    <InputLabel id="demo-simple-select-label">Nazwa</InputLabel>
                    <input
                        name="partName"
                        ref={register}
                    />
                    <InputLabel id="demo-simple-select-label">Dostawca</InputLabel>
                    <input
                        name="supplier"
                        ref={register}
                    />
                    <InputLabel id="demo-simple-select-label">Opis</InputLabel>
                    <input
                        name="description"
                        ref={register()}
                    />
                    <InputLabel id="demo-simple-select-label">Data zgłoszenia</InputLabel>
                    <input
                        name="filingDate"
                        type="date"
                        ref={register()}
                    />
                    <>
                        <InputLabel id="demo-simple-select-label">Maszyna</InputLabel>
                        <select
                            name="machine"
                            ref={register}
                        >
                            {machineList && machineList.map((item) => (
                                <option key={item.id} value={item['@id']}>{item.name}</option>
                            ))}
                        </select>
                    </>
                    <Button variant="contained" color="primary" type="submit">
                        Send
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}