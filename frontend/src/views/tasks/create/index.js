import React, { useState } from 'react'

import { VTextField, VButton } from '../../../components'

import {
    Container,
    Form,
    ContainerType,
    Icone,
    Body,
    Row,
    Div
} from './styles'

import { icons } from '../../../utils/typeIcons'
import { getStorage, redirect } from '../../../utils'
import themes from '../../../themes'
import { register } from '../../../webservice/tasks'

const user = getStorage('user')

export function NewTask(props) {
    const [id, setId] = useState(0)
    const [title, setTitle] = useState()
    const [description, setDescription] = useState()
    const [date, setDate] = useState()
    const [hour, setHour] = useState()
    const [type, setType] = useState()
    const [loading, setLoading] = useState(false)

    const getModel = () => {
        return {
            id,
            title,
            description,
            date,
            hour,
            type,
            user_id: user.id
        }
    }

    const handleSubmit = async () => {
        try {
            setLoading(true)
            const model = Object.assign(getModel())
            const res = await register(model)
            if (res.data.success) {
                alert(res.data.message)
                redirect("/")
            } else if (res.data.validate) {
                let errors = ''
                for (let error of Object.values(res.data.message)) {
                    errors += error + "\n"
                }
                alert(errors)
            }
        } catch (error) {
            console.log(Object.values(error))
        } finally {
            setLoading(false)
        }
    }

    return (
        <Container>
            <Form role="form">
                <ContainerType>
                    {icons.map((item, index) => (
                        item !== null && <Icone
                            key={index}
                            className={type && type !== index && 'inative'}
                            onClick={() => setType(index)}>{item}</Icone>
                    ))}

                </ContainerType>
                <Body>
                    <VTextField
                        placeholder="Titulo da Tarefa"
                        type="text"
                        onChange={(e) => setTitle(e.target.value)} />
                    <VTextField
                        rows="6"
                        cols="50"
                        placeholder="Descrição da Tarefa"
                        area
                        onChange={(e) => setDescription(e.target.value)} />
                    <Row>
                        <Div className="col mr">
                            <VTextField
                                type="date"
                                onChange={(e) => setDate(e.target.value)} />
                        </Div>
                        <Div className="col ml">
                            <VTextField
                                type="time"
                                onChange={(e) => setHour(e.target.value)} />
                        </Div>
                    </Row>
                    <VButton
                        text={loading ? 'Aguarde...' : 'Cadastrar'}
                        block="100"
                        disable={loading}
                        bgColor={themes.colors.light.success}
                        onClick={handleSubmit} />
                </Body>
            </Form>
        </Container>
    )
}