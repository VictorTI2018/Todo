import React from 'react'

import {
    Button
} from './styles'

export function VButton(props) {
    return (
        <Button block={props.block} {...props}>{props.text}</Button>
    )
}