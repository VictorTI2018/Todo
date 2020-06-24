import React, { useState } from 'react'

import { VTextField, VButton } from '../../components'

import {
    Container,
    Form,
    CardLogin,
    Anchor,
    Row,
    Title,
    ContainerTitle
} from './styles'
import { auth } from '../../webservice/auth'
import { setStorage, redirect } from '../../utils'
import themes from '../../themes'

export default function Auth(props) {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [loading, setLoading] = useState(false)

    const getModel = () => {
        return {
            email,
            password
        }
    }

    const handleSubmit = async () => {
        try {
            setLoading(true)
            const model = Object.assign(getModel())
            const res = await auth(model)
            if (res.data.success) {
                const { user, token } = res.data
                if (user && token) {
                    setStorage('token', token)
                    setStorage('user', user)
                    redirect('/')
                }
            } else if (res.data.validate) {
                let errors = ""
                for (let error of res.data.message) {
                    errors += error + " "
                }
                alert(errors)
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }
    return (
        <Container>
            <CardLogin>
                <Form>
                    <ContainerTitle>
                        <Title>Login</Title>
                    </ContainerTitle>
                    <VTextField
                        type="text"
                        placeholder="E-mail"
                        onChange={(e) => setEmail(e.target.value)} />
                    <VTextField
                        type="password"
                        placeholder="Senha"
                        onChange={(e) => setPassword(e.target.value)} />
                    <Row>
                        <Anchor to="/user-register">Cadastrar-se</Anchor>
                        <Anchor to="/user-forgot">Esqueceu sua senha</Anchor>
                    </Row>

                    <VButton
                        disabled={loading}
                        block="100"
                        onClick={handleSubmit}
                        text={loading ? 'Aguarde...' : 'Entrar'}
                        bgColor={themes.colors.light.primary} />
                </Form>
            </CardLogin>
        </Container>
    )
}