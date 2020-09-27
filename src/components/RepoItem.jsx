import React from 'react'

import * as S from './styled'


export default props =>{
    const {link, name, description} = props 

    return (
        <S.RepoItem href={link} target="_blank">
        <p>Projeto: {name}</p>
        <p>Descrição: {description || 'Sem descrição'}</p>
        </S.RepoItem>
    )
} 