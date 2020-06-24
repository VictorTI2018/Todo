import React, { useState } from 'react'

import { VButton, VTextField } from '../../../components'

import {
    Container,
    Card,
    Form,
    ContainerTitle,
    Title,
    Anchor,
    Row
} from './styles'
import { register } from '../../../webservice/user'
import themes from '../../../themes'

export function NewUser(props) {
    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [loading, setLoding] = useState(false)

    const getModel = () => {
        return {
            username,
            email,
            password
        }
    }

    const handleSubmit = async () => {
        try {
            setLoding(true)
            const model = Object.assign(getModel())
            const res = await register(model)
            if (res.data.success) {
                alert(res.data.message)
                window.location.replace("/login")
            } else if (res.data.validate) {
                let errors = ''
                for (let error of Object.values(res.data.message)) {
                    errors += error + "\n"
                }
                alert(errors)
            }
            console.log(props)
        } catch (error) {
            console.log(error)
        } finally {
            setLoding(false)
        }
    }
    return (
        <Container>
            <Card>
                <Form>
                    <ContainerTitle>
                        <Title>Cadastrar-se</Title>
                    </ContainerTitle>
                    <VTextField
                        type="text"
                        placeholder="Digite um username..."
                        onChange={(e) => setUsername(e.target.value)} />
                    <VTextField
                        type="email"
                        placeholder="Digite um e-mail"
                        onChange={(e) => setEmail(e.target.value)} />
                    <VTextField
                        type="password"
                        placeholder="Digite uma senha"
                        onChange={(e) => setPassword(e.target.value)} />
                    <Row>
                        <Anchor to="/login">Já possui cadastro?</Anchor>
                    </Row>
                    <VButton 
                        disabled={loading} 
                        onClick={handleSubmit} 
                        text={loading ? 'Aguarde...' : 'Cadastrar'}
                        bgColor={themes.colors.light.success}
                        block="100" />
                </Form>
            </Card>
        </Container>
    )
}