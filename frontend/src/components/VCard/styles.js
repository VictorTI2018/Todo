import styled from 'styled-components'

export const Container = styled.div`
    width: 18%;
    height: 100px;
    background-color: ${props => props.bgColor ? props.theme.secondary : props.theme.primary};
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    border-radius: 6px;
    transition: all 0.3s ease;
    border-top: 3px solid ${props => props.theme.secondary};
    border-bottom: 3px solid ${props => props.theme.secondary};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
    &:hover {
        opacity: 0.6;
        cursor: pointer;
    }
`

export const Header = styled.div`
    align-self: flex-start;
    color: ${props => props.theme.text};
    font-size: 1.2rem;
    @media(max-width: 600px) {
        font-size: 1rem;
    }
`

export const Bottom = styled.div`
    align-self: flex-end;
    color: ${props => props.theme.text};
    font-size: 1.2rem;
    @media(max-width: 600px) {
        font-size: 1rem;
    }
`
