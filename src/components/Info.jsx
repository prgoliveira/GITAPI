import React from 'react'

import {Info} from './styled'


export default props =>{
    const {label, info} = props 

    return <Info><b>{label || 'Aguardando informações'}: </b>{info || 'Nada informado' }</Info>
} 