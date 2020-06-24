import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.header`
    grid-area: header;
    background-color: ${props => props.theme.primary};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    border-bottom: 5px solid ${props => props.theme.secondary};
`

export const Logo = styled.div`
    color: ${props => props.theme.text};
    font-size: 1.2rem;
    font-weight: bold;
`

export const ContainerLink = styled.div`
    display: flex;
    align-items: center;
`
export const Divider = styled.div`
    margin-left: 6px;
    margin-right: 6px;
    &::before {
       content: "|";
       color: ${props => props.theme.text}; 
    }
`

export const Anchor = styled(Link)`
    color: ${props => props.theme.text};
    text-decoration: none;
    font-weight: bold;
    font-size: 1rem;
    transition: all 0.3s ease;
    &:hover {
        opacity: 0.6;
        cursor: pointer;
    }
    @media(max-width: 600px) {
        font-size: 0.8rem;
    }
`