import React from 'react'

import {RepoItem} from './styled'


export default props =>{
    const {link, name, description} = props 

    return (
        <RepoItem href={link} target="_blank">
        <p><b>Projeto:</b> {name}</p>
        <p><b>Descrição: </b>{description || 'Sem descrição'}</p>
        </RepoItem>
    )
} 