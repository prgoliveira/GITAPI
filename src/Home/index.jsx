import React, { useState } from 'react'
import axios from 'axios'
import { ThemeProvider } from 'styled-components'

import clouds from '../styles/themes/clouds'
import darkula from '../styles/themes/darkula'
import lollipop from '../styles/themes/lollipop'
import GlobalStyle from '../styles/global'

import * as S from './styled'
import RepoItem from '../components/RepoItem'
import Title from '../components/Title'
import TitleRepo from '../components/TitleRepo'
import Avatar from '../components/Avatar'
import Info from '../components/Info'

export default props => {

    const [repository, setRepository] = useState([])
    const [usuarioInfo, setUsuarioInfo] = useState('')
    const [erro, setErro] = useState(false)
    const [themeInfo, setTheme] = useState(darkula)

    function handlePesquisa() {
        let gitUsuario = `https://api.github.com/users/${usuarioInfo}`
        let gitRepositorio = `https://api.github.com/users/${usuarioInfo}/repos`

        const requestOne = axios.get(gitUsuario)
        const requestTwo = axios.get(gitRepositorio)

        axios.all([requestOne, requestTwo])
            .then(axios.spread((...responses) => {
                const usuario = responses[0].data
                const reposirio = responses[1].data
                console.log(reposirio)
                setUsuarioInfo(usuario)
                setRepository(reposirio)
                setErro(false)
            }))
            .catch(err => {
                setErro(true)
            })
    }

    const listaRepositorios = repository.map((repositorio) => {
        return (
            <RepoItem key={repositorio.id} link={repositorio.html_url} name={repositorio.name} description={repositorio.description} />
        )
    })

    return (
        <ThemeProvider theme={themeInfo}>
            <div>
                <GlobalStyle />
                <S.Header>

                    <Title />

                    <S.InputItens>
                        <S.Button type='button' onClick={() => setTheme(clouds)}>Clouds</S.Button >
                        <S.Button type='button' onClick={() => setTheme(darkula)}>Darkula</S.Button >
                        <S.Button type='button' onClick={() => setTheme(lollipop)}>Lollipop</S.Button >
                    </S.InputItens>

                    <S.InputItens>
                        {erro ? <S.ErroMsg>Ocorreu um erro, tente novamente</S.ErroMsg> : ''}
                        <S.Input className='usuarioInput' type="text" placeholder='Usuario' value={usuarioInfo.login} onChange={e => setUsuarioInfo(e.target.value)} />
                        <S.Button type='button' onClick={handlePesquisa}>Pesquisar Usuario</S.Button >
                    </S.InputItens>

                </S.Header>

                <S.HomeContainer>

                  
                  
                    <S.UserContent>
                        <Avatar avatar_url={usuarioInfo.avatar_url} />
                        <S.UserInfo>
                            <Info label="Nome" info={usuarioInfo.name} />
                            <Info label="Usuário" info={usuarioInfo.login} />
                            <Info label="Email" info={usuarioInfo.email} />
                            <Info label="Localização" info={usuarioInfo.location} />
                            <Info label="Bio" info={usuarioInfo.bio} />
                        </S.UserInfo>
                    </S.UserContent>

                    

                    <TitleRepo repositories={usuarioInfo.public_repos} />
                    <S.RepoContent>
                        {listaRepositorios}
                    </S.RepoContent>

                    

                </S.HomeContainer>
            </div>
        </ThemeProvider>
    )
}