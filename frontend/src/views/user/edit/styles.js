import React from 'react'
import styled from 'styled-components'

export const Container = styled.div`
    height: 100%;
`

export const Form = styled.div`
    padding: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
`

export const Card = styled.div`
    width: 40%;
    background-color: ${props => props.theme.primary};
    border-radius: 8px;
  
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    border-top: 3px solid ${props => props.theme.secondary};
    border-bottom: 3px solid ${props => props.theme.secondary};

`

export const CardHeader = styled.div`
    flex-basis: 20%;
    border-bottom: 1px solid ${props => props.theme.text};
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Text = styled.p`
    color: ${props => props.theme.text};
    font-weight: bold;
    margin-left: 10px;
`

export const CardBody = styled.div`
    flex-basis: 60%;
    padding: 10px;
`

export const CardFooter = styled.div`
    flex-basis: 20%;

`

const Label = styled.div`
    display: inline-block;
    position: relative;
    cursor: pointer;
    border-radius: 50%;
`

const ContainerImage = styled.div`
    
`

const Img = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 25px;
    &:hover {
        opacity: 0.5;
    }
`

const InputFile = styled.input`
    display: none;
`

export const Avatar = props => {
    return (
        <Label>
            <ContainerImage className={props.classe}>
                <Img {...props} />
            </ContainerImage>
            <InputFile onChange={props.upload} {...props} />
        </Label>
    )
}

