import React, { useEffect, useState } from 'react'
import * as S from './styled'
import {useHistory} from 'react-router-dom'

export default props => {
    const [repositories, setRepositories] = useState([])
    const history = useHistory()
    useEffect(() => {
        let repositoriesName = localStorage.getItem('repositoriesName')
        if(repositoriesName !== null){
            repositoriesName = JSON.parse(repositoriesName)
            setRepositories(repositoriesName)
            localStorage.clear()
        } else {
            history.push('/')
        }
        
    }, [])

    const listaRepositorios = repositories.map((repository) => {
        return (
            <S.ListItem>Repositório: {repository}</S.ListItem>
        )
    })

    return (
        <S.Container>
            <S.Title>Repositórios</S.Title>
            <S.List>
                {listaRepositorios}
            </S.List>
            <S.LinkHome to="/">Voltar</S.LinkHome>
        </S.Container>
    )
}