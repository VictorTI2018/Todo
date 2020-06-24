import React, { useContext } from 'react'
import Switch from 'react-switch'
import { ThemeContext } from 'styled-components'

import {
    Container,
    Logo,
    ContainerLink,
    Anchor,
    Divider
} from './styles'

import { getStorage } from '../../utils'

const token = getStorage('token')
const user = getStorage('user')

export function VHeader(props) {
    const { title, secondary } = useContext(ThemeContext)
    return (
        <Container>
            <Logo>Todo</Logo>
            <ContainerLink>
                {token && (
                    <>
                        <Anchor to="/">Inicio</Anchor>
                        <Divider />
                        <Anchor to="/new-task">Nova Tarefa</Anchor>
                        <Divider />
                        <Anchor to={`/edit-user/${user.id}`}>Perfil</Anchor>
                        <Divider />
                    </>
                )}

                <Switch
                    onChange={props.toggleTheme}
                    checked={title === "dark"}
                    checkedIcon={false}
                    uncheckedIcon={false}
                    height={15}
                    width={35}
                    offColor={secondary}
                    onColor={secondary} />
            </ContainerLink>
        </Container>
    )
}