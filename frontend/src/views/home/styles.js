import styled from 'styled-components'

export const Container =  styled.div`
    height: 100vh;
    display: grid;
    grid-template-areas: "header" "main" "footer";
    grid-template-rows: 60px 1fr 100px;
    grid-template-columns: 1fr;
`
export const Content = styled.main`
    grid-area: main;
    height: calc(100vh - 160px);
    background-color: ${props => props.theme.bgColor};
    padding: 20px;
    overflow-y: scroll;
`
