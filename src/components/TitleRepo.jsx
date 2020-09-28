import React from 'react'

import {TitleRepo} from './styled'

export default props =>{
    const {repositories} = props 

    return <TitleRepo> Repositórios encontrados: {repositories || 'Nenhum até o momento ' } </TitleRepo>
  
} 