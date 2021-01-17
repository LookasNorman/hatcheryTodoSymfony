import React, {useEffect, useState} from 'react'
import {useForm} from 'react-hook-form'
import {makeStyles} from '@material-ui/core/styles'
import {InputLabel, Button, CardContent, Card} from '@material-ui/core'
import {CardHeader} from '../../basic/CardHeader'
import {getObjectsAddresses} from '../../../api/ObjectsAddresses'
import {getMachines} from '../../../api/Machines'
import {getTodoType} from '../../../api/TodoType'
import {postNewTodo} from '../../../api/Todos'
import {getUsers} from "../../../api/Users";

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
}))

export default function Todo() {
    const classes = useStyles()
    const {handleSubmit, register} = useForm()
    const [objectAddressList, setObjectAddressList] = useState()
    const [machineList, setMachineList] = useState()
    const [todoTypeList, setTodoTypeList] = useState()
    const [ownerList, setOwnerList] = useState()

    const onSubmit = async (data) => {
        const postData = await postNewTodo(JSON.stringify(data))
    }

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
            const machines = await getMachines()
            if (!machines.error) {
                setMachineList(machines.data)
            }
        }
        fetchData()
    }, [])

    useEffect(() => {
        const fetchData = async () => {
            const todoTypes = await getTodoType()
            if (!todoTypes.error) {
                setTodoTypeList(todoTypes.data)
            }
        }
        fetchData()
    }, [])

    useEffect(() => {
        const fetchData = async () => {
            const users = await getUsers()
            if (!users.error) {
                setOwnerList(users.data)
            }
        }
        fetchData()
    }, [])

    return (
        <Card className={classes.card}>
            <CardContent className={classes.content}>
                <div className={`${classes.details} ${classes.flex}`}>
                    <CardHeader data='Dodaj zadanie'/>
                </div>
                <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
                    <InputLabel id='demo-simple-select-label'>Nazwa</InputLabel>
                    <input
                        name="title"
                        ref={register}
                    />
                    <InputLabel id='demo-simple-select-label'>Opis</InputLabel>
                    <input
                        name='description'
                        ref={register()}
                    />
                    <InputLabel id='demo-simple-select-label'>Data wykonania</InputLabel>
                    <input
                        name='date'
                        id='standard-basic'
                        ref={register()}
                        type='date'
                    />
                    <InputLabel id='demo-simple-select-label'>Czas powtórzeń (dni)</InputLabel>
                    <input
                        name='repeatTime'
                        id='standard-basic'
                        ref={register({
                            valueAsNumber: true,
                        })}
                        type='number'
                    />
                        <InputLabel id='demo-simple-select-label'>Lokalizacja</InputLabel>
                        <select
                            name='objectAddress'
                            ref={register()}
                        >
                            {objectAddressList && objectAddressList.map((item) => (
                                <option key={item['@id']} value={item['@id']}>{item.name}</option>
                            ))}
                        </select>
                        <InputLabel id='demo-simple-select-label'>Maszyna</InputLabel>
                        <select
                            name='machine'
                            ref={register()}
                        >
                            {machineList && machineList.map((item) => (
                                <option key={item['@id']} value={item['@id']}>{item.name}</option>
                            ))}
                        </select>
                        <InputLabel id='demo-simple-select-label'>Typ zadania</InputLabel>
                        <select
                            name='todoType'
                            ref={register()}
                        >
                            {todoTypeList && todoTypeList.map((item) => (
                                <option key={item['@id']} value={item['@id']}>{item.name}</option>
                            ))}
                        </select>
                        <InputLabel id='demo-simple-select-label'>Właściciel</InputLabel>
                        <select
                            name='owner'
                            ref={register()}
                        >
                            {ownerList && ownerList.map((item) => (
                                <option key={item['@id']} value={item['@id']}>{item.firstname}</option>
                            ))}
                        </select>
                    <Button variant='contained' color='primary' type='submit'>
                        Send
                    </Button>
                </form>
            </CardContent>
        </Card>
    )
}