import React, { useState, useEffect } from 'react'

import moment from 'moment'
import 'moment/locale/pt-br'

import { VCard } from '../../../components'

import {
    Container,
    ContainerFilter,
    ContainerTitle,
    Title,
    ContainerCard,
    CardHeader,
    CardBody,
    CardFooter,
    Text,
    Status,
    ContainerTasks,
    Icone,
    TitleTask,
    Date,
    Hour
} from './styles'

import { tasks } from '../../../webservice/tasks'

import { filters } from './filter'

import { formattedColorStatus } from '../../../utils'
import { icons } from '../../../utils/typeIcons'

export function Tasks(props) {
    const [filter, setFilter] = useState('all')
    const [task, setTask] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const getTasks = async () => {
            try {
                setLoading(true)
                const res = await tasks(filter)
                setTask(res.data)
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }
        getTasks()
    }, [filter])


    const renderCardsTasks = (tasks) => {
        return (
            <ContainerCard key={tasks.id}>
                <CardHeader>
                    <Text>Situação: </Text>
                    <Status color={formattedColorStatus(tasks.done)}>{tasks.formatted_done}</Status>
                </CardHeader>
                <CardBody>
                    <Icone>{icons[tasks.type]}</Icone>
                    <TitleTask>{tasks.title}</TitleTask>
                </CardBody>
                <CardFooter>
                    <Date>{moment(tasks.date).format('DD/MM/YYYY')}</Date>
                    <Hour>{tasks.hour}</Hour>
                </CardFooter>
            </ContainerCard>
        )
    }

    return (
        <Container>
            <ContainerFilter>
                {filters.map((item, index) => (
                    <VCard
                        key={index}
                        icon={item.icon}
                        label={item.label}
                        bgColor={filter === item.filter}
                        onClick={() => setFilter(item.filter)}
                    />
                ))}
            </ContainerFilter>
            <ContainerTitle>
                <Title>Tarefas</Title>
            </ContainerTitle>
            <ContainerTasks>
                {task.map((item, index) => (
                    renderCardsTasks(item)
                ))}
            </ContainerTasks>
        </Container>
    )
}