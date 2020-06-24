import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { VHeader, VFooter } from '../../components'
import usePersistedState from '../../utils/usePersitedState'
import {
    Container,
    Content
} from './styles'

import GlobalStyles from '../../themes/global'
import themes from '../../themes'
import { PrivateRoute, router } from '../../routes'
import Auth from '../auth'
import { NewUser, ForgotPassword } from '../user'

export default function Home(props) {
    const [tema, setTema] = usePersistedState('theme', themes.colors.light)

    function toggleTema() {
        const { light, dark } = themes.colors
        setTema(tema.title === "light" ? dark : light)
    }

    return (
        <ThemeProvider theme={tema}>
            <Container>
                <GlobalStyles />
                <VHeader toggleTheme={toggleTema} />
                <Content>
                    <Switch >
                        <Route path="/login" component={Auth} exact />
                        <Route path="/user-register" component={NewUser} exact />
                        <Route path="/user-forgot" component={ForgotPassword} exact />
                        {router.map((item, index) => (
                            <PrivateRoute key={index} path={item.path} component={item.component} exact={item.exact} />
                        ))}
                    </Switch>
                </Content>
                <VFooter />
            </Container>
        </ThemeProvider>

    )
}