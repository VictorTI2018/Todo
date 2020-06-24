import React from 'react'
import styled from 'styled-components'


export const Container = styled.div`
    input{
        background-color: #3b4148;
        border-radius: 0px 3px 3px 0px;
        color: #a9a9a9;
        margin-bottom: 1em;
        padding: 0 16px;
        width:100%;
        height: 40px;
        border-left: 50px solid #363b41; 
    }

    textarea{
        background-color: #3b4148;
        border-radius: 0px 3px 3px 0px;
        color: #a9a9a9;
        margin-bottom: 1em;
        padding: 0 16px;
        width:100%;
        border-left: 50px solid #363b41; 
    }

    @media(max-width: 600px) {
        input{
            background-color: #3b4148;
            border-radius: 0px 3px 3px 0px;
            color: #a9a9a9;
            margin-bottom: 1em;
            padding: 0 16px;
            width:100%;
            height: 30px;
        }

        textarea{
            background-color: #3b4148;
            border-radius: 0px 3px 3px 0px;
            color: #a9a9a9;
            margin-bottom: 1em;
            padding: 0 16px;
            width:100%;
        }
    }
`



const Group = styled.div`
    width: 100%;
    margin-top: 4px;
    margin-bottom: 4px;
`

const Input = styled.input`
       
    outline: none;
    border:none;
    font-family: 'Open Sans', Arial, Helvetica, sans-serif;
    font-size: 1rem;
    line-height: 1.5em;
    padding: 0;
    -webkit-appearance: none;
    @media(max-width: 600px) {
        font-size: 0.7rem;
    }
`

export const TextField = props => {
    return (
        <Group>
            <Input {...props} />
        </Group>
    )
}


const TextArea = styled.textarea`
    outline: none;
    border:none;
    font-family: 'Open Sans', Arial, Helvetica, sans-serif;
    font-size: 1rem;
    line-height: 1.5em;
    padding: 0;
    -webkit-appearance: none;
    @media(max-width: 600px) {
        font-size: 0.7rem;
    }
`

export const TextFieldArea = props => {
    return (
        <Group>
            <TextArea {...props} />
        </Group>
    )
}
