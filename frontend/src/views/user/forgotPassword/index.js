import React from 'react'

import { VTextField, VButton } from '../../../components'

import {
    Container,
    Card,
    Form,
    ContainerTitle,
    Title,
    Anchor,
    Row
} from './styles'

export function ForgotPassword(props) {
    return (
        <Container>
            <Card>
                <Form>
                    <ContainerTitle>
                        <Title>Esqeuceu sua senha</Title>
                    </ContainerTitle>
                    <VTextField type="email" placeholder="Digite seu e-mail... "/>
                    <Row>
                        <Anchor to="/login">Voltar</Anchor>
                    </Row>
                    <VButton text="Recuperar" block="100"/>
                </Form>
            </Card>
        </Container>
    )
}