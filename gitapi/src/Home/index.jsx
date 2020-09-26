import React, { useState } from 'react'
import axios from 'axios'

import * as S from './styled'

import RepoItem from '../components/RepoItem'
import TitleRepo from '../components/TitleRepo'
import TitlePage from '../components/Title'
import Avatar from '../components/Avatar'
import Info from '../components/Info'

export default props => {

    const [usuario, setUsuario] = useState('octocat')
    const [repository, setRepository] = useState([])
    const [usuarioInfo, setUsuarioInfo] = useState('octocat')
    const [erro, setErro] = useState(false)

    function handlePesquisa() {
        let gitUsuario = `https://api.github.com/users/${usuario}`
        let gitRepositorio = `https://api.github.com/users/${usuario}/repos`

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
        <div>
            <S.Header>
                <TitlePage />
                <S.InputItens>
                    {erro ? <S.ErroMsg>Ocorreu um erro, tente novamente</S.ErroMsg> : ''}
                    <S.Input className='usuarioInput' type="text" placeholder='Usuario' value={usuario} onChange={e => setUsuario(e.target.value)} />
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
    )
}