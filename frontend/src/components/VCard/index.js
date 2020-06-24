import React from 'react'

import {
    Container,
    Header,
    Bottom
} from './styles'

export function VCard(props) {
    return (
        <Container bgColor={props.bgColor} {...props}>
            <Header>
                {props.icon}
            </Header>
            <Bottom>
                {props.label}
            </Bottom>
        </Container>
    )
}