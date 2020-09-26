import React from 'react'

import * as S from './styled'


export default props =>{
    const {label, info} = props 

    return <S.Info>{label || 'Aguardando informações'}: {info || 'Nada informado' }</S.Info>
} 