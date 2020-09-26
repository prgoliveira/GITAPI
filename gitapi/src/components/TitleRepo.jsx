import React from 'react'

import * as S from './styled'

export default props =>{
    const {repositories} = props 

    return <S.TitleRepo> Repositórios encontrados: {repositories || 'Nada informado' } </S.TitleRepo>
  
} 