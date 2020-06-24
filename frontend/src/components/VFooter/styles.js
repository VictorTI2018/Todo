import styled from 'styled-components'

export const Container = styled.footer`
    grid-area: footer;
    background-color: ${props => props.theme.primary};
    border-top: 5px solid ${props => props.theme.secondary};
`