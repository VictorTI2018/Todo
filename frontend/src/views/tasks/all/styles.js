import styled from 'styled-components'

export const Container = styled.div`
    height: 100%;
`

export const ContainerFilter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const ContainerTitle = styled.div`
    margin-top: 40px;
    margin-bottom: 20px;
    border-bottom: 1px solid  ${props => props.theme.title === 'dark' ? props.theme.text : "#222"};
    display: flex;
    justify-content: center;
`

export const Title = styled.span`
    position: relative;
    color: ${props => props.theme.title === 'dark' ? props.theme.text : "#222"};
    background-color: ${props => props.theme.bgColor};
    padding: 0 20px;
    top: 8px;
    font-weight: bold;
    font-size: 1.2rem;
`

export const ContainerCard = styled.div`
    width: 22%;
    height: 200px;
    background-color: ${props => props.theme.primary};
    border-radius: 8px;
    margin-bottom: 15px;
    transition: all 0.3s ease;
    border-top: 3px solid ${props => props.theme.secondary};
    border-bottom: 3px solid ${props => props.theme.secondary};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 8px;
    &:hover {
        opacity: 0.5;
        cursor: grab;
    }
    @media(max-width: 600px) {
        width: 22%;
        height: 150px;
    }
`

export const CardHeader = styled.div`
    flex-basis: 20%;
    border-bottom: 1px solid ${props => props.theme.text};
    display: flex;
    flex-direction: row;
    align-items: center;
    @media(max-width: 600px) {
        flex-direction: column;
        justify-content: center;
    }
`

export const CardBody = styled.div`
    flex-basis: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 8px;
`

export const CardFooter = styled.div`
    flex-basis: 20%;
    border-top: 1px solid ${props => props.theme.text};
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media(max-width: 600px) {
        flex-direction: column;
        justify-content: center;
    }
`

export const ContainerTasks = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
`
export const Text = styled.strong`
    font-size: 0.8rem;
    color: ${props => props.theme.text};
    @media(max-width: 600px) {
        font-size: 0.6rem;
    }
`

export const Status = styled.strong`
    font-size: 0.8rem;
    margin-left: 5px;
    color: ${props => props.color ? props.color : props.theme.text};
    @media(max-width: 600px) {
        font-size: 0.6rem;
    }
`

export const Icone = styled.div`
    width: 46px;
    height: 46px;
    border-radius: 23px;
    background-color: ${props => props.theme.secondary};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.8rem;
    @media(max-width: 600px) {
        width: 26px;
        height: 26px;
        border-radius: 13px;
        font-size: 1rem;
    }
`

export const TitleTask = styled.p`
    font-weight: bold;
    color: ${props => props.theme.text};
    @media(max-width: 600px) {
        font-size: 0.8rem;
    }
`

export const Date = styled.strong`
    color: ${props => props.theme.secondary};
    font-size: 0.9rem;
    @media(max-width: 600px) {
        font-size: 0.7rem;
    }
`

export const Hour = styled.strong`
    font-size: 0.9rem;
    @media(max-width: 600px) {
        font-size: 0.7rem;
    }
`