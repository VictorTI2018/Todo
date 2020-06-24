import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
    height: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media(max-width: 600px) {
        height: 100%;
    }
`
export const Card = styled.div`
    margin: 50px auto;
    width: 400px;
    background-color: ${props => props.theme.primary};
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    @media(max-width: 600px) {
        width: 100%;
    }
`

export const Form = styled.div`
    margin: auto;
    padding: 22px 22px 22px 22px;
    width: 100%;
    border-radius: 5px;
    background: #282e33;
    border-top: 5px solid #434a52;
    border-bottom: 5px solid #434a52;

    
`


export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
`

export const Anchor = styled(Link)`
    color: ${props => props.theme.title === "dark" ? '#1E90FF' : props.theme.primary};
    background-color: transparent;
    border: 0;
    font-size: 0.9rem;
    margin-bottom: 5px;
    transition: all 0.3s ease;
    &:hover {
        cursor: pointer;
        opacity: 0.7;
    }
    @media(max-width: 600px) {
        font-size: 0.8rem;
    }
`

export const ContainerTitle = styled.div`
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid #DDD;
`

export const Title = styled.p`
    font-size: 1.2rem;
    color: ${props => props.theme.text};
    font-weight: bold;
    margin-bottom: 5px;
`