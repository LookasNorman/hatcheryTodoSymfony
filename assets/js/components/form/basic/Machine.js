import React, {useEffect, useState} from 'react'
import {useForm} from 'react-hook-form';
import {makeStyles} from '@material-ui/core/styles';
import {Button, CardContent, Card, InputLabel} from '@material-ui/core'
import {CardHeader} from '../../basic/CardHeader'
import {getObjectsAddresses} from '../../../api/ObjectsAddresses'
import {getHalls} from '../../../api/Halls'
import {getMachinesGroups} from '../../../api/MachinesGroups'
import {postNewMachines} from "../../../api/Machines";

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

export default function Machine() {
    const classes = useStyles();
    const {handleSubmit, register} = useForm()
    const onSubmit = async (data) => {
        const postData = await postNewMachines(JSON.stringify(data))
    }
    const [objectAddressList, setObjectAddressList] = useState()
    const [hallList, setHallList] = useState()
    const [machinesGroupsList, setMachinesGroupsList] = useState()

    useEffect(() => {
        const fetchData = async () => {
            const objectAddress = await getObjectsAddresses()
            if (!objectAddress.error) {
                setObjectAddressList(objectAddress.data)
            }
        }
        fetchData()
    }, [])

    useEffect(() => {
        const fetchData = async () => {
            const halls = await getHalls()
            if (!halls.error) {
                setHallList(halls.data)
            }
        }
        fetchData()
    }, [])

    useEffect(() => {
        const fetchData = async () => {
            const machineGroups = await getMachinesGroups()
            if (!machineGroups.error) {
                setMachinesGroupsList(machineGroups.data)
            }
        }
        fetchData()
    }, [])

    return (
        <Card className={classes.card}>
            <CardContent className={classes.content}>
                <div className={`${classes.details} ${classes.flex}`}>
                    <CardHeader data="Dodaj maszynę / urządzenie"/>
                </div>
                <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                    <InputLabel id="demo-simple-select-label">Nazwa</InputLabel>
                    <input
                        name="name"
                        ref={register}
                    />
                    <InputLabel id="demo-simple-select-label">Numer seryjny</InputLabel>
                    <input
                        name="serialNumber"
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
                    <InputLabel id="demo-simple-select-label">Hala / Kurnik</InputLabel>
                    <select
                        name="hall"
                        ref={register}
                    >
                        {hallList && hallList.map((item) => (
                            <option key={item.id} value={item['@id']}>{item.name}</option>
                        ))}
                    </select>
                    <InputLabel id="demo-simple-select-label">Grupa maszyn</InputLabel>
                    <select
                        name="machinesGroups"
                        ref={register}
                    >
                        {machinesGroupsList && machinesGroupsList.map((item) => (
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
