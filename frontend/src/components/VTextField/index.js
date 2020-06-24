import React from 'react'

import {
    Container,
    TextField,
    TextFieldArea
} from './styles'

export function VTextField(props) {
    return (
        <Container>
            {props.area ? (
                <TextFieldArea  {...props} />
            ) : (
                    <TextField {...props} />
                )}
        </Container>
    )
}