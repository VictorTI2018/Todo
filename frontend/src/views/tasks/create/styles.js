import styled from 'styled-components'

export const Container = styled.div`
    position: relative;
    height: 100%;
    display: flex;
    justify-content: center;
`

export const Form = styled.div`
    width: 40%;
    background-color: ${props => props.theme.primary};
    border-radius: 10px;
    overflow-y: auto;
    height: 80%;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    @media(max-width: 600px) {
        width: 100%;
    }
`

export const ContainerType = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    .inative {
        opacity: 0.3;
    }
`

export const Icone = styled.div`
    width: 34px;
    height: 34px;
    border-radius: 17px;
    background-color: ${props => props.theme.secondary};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    transition: all 0.3s ease;
    &:hover{
        opacity: 0.5;
        cursor: grab;
    }
    @media(max-width: 600px) {
        width: 30px;
        height: 30px;
        border-radius: 15px;
        font-size: 1rem;
    }
`

export const Body = styled.div`
    width: 100%;
    margin-top: 20px;
    padding: 15px;
    margin-bottom: 20px;
`

export const Row = styled.div`
    display: flex;
    .col {
        width: 100%;
    }

    .ml {
        margin-left: 5px;
    }

    .mr {
        margin-right: 5px;
    }
`

export const Div = styled.div``