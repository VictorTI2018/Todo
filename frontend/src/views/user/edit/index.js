import React, { useEffect, useState } from 'react'

import { VTextField, VButton } from '../../../components'

import {
    Container,
    Form,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Text,
    Avatar
} from './styles'

import { find } from '../../../webservice/user'
import themes from '../../../themes'

export function EditUser(props) {
    const [id, setId] = useState(0)
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [avatar, setAvatar] = useState('https://cdn3.iconfinder.com/data/icons/essential-rounded/64/Rounded-31-512.png')

    const getModel = () => {
        return {
            id,
            username,
            email,
            password
        }
    }

    useEffect(() => {
        let { id } = props.match.params
        const getUser = async (id) => {
            try {
                const res = await find(id)
                setId(res.data.id)
                setUsername(res.data.username)
                setEmail(res.data.email)
            } catch (error) {
                console.log(error)
            } finally {

            }
        }
        getUser(id)
    }, [])

    const handleSubmit = () => {
        try {
            const model = Object.assign(getModel())
            console.log(model)
        } catch (error) {

        } finally {

        }
    }

    const photoUpload = (e) => {
        e.preventDefault();
        const reader = new FileReader();
        const file = e.target.files[0];
        reader.onloadend = (e) => {
          setAvatar(e.target.result)
        }
        reader.readAsDataURL(file);
      }

    return (
        <Container>
            <Form>
                <Card>
                    <CardHeader>
                        <Text>Perfil: {username}</Text>
                        <Avatar
                            upload={photoUpload}
                            src={avatar}
                            alt="Avatar"
                            type="file" />
                    </CardHeader>
                    <CardBody>
                        <VTextField type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                        <VTextField type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <VTextField type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)} />
                    </CardBody>
                    <CardFooter>
                        <VButton text="Atualizar" block="100"
                            bgColor={themes.colors.light.secondary}
                            onClick={handleSubmit}/>
                    </CardFooter>
                </Card>
            </Form>
        </Container>
    )
}