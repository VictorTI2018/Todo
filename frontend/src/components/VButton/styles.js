import styled from 'styled-components'


export const Button = styled.button`
    background-color: ${props => props.bgColor ? props.bgColor : props.theme.primary};
    border-radius: 5px;
    border:0;
    outline: none;
    color: ${props => props.theme.text};
    padding: 14px 0;
    transition: all 0.3s ease;
    width: ${props => props.block ? `${props.block}%` : '50%'};
    &:hover {
        cursor: pointer;
        opacity: 0.7;
    }
    

`