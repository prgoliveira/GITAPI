import React from 'react'

import * as S from './styled'

export default props => <S.AvatarUser alt="Avatar do usuario" src={props.avatar_url || 'https://avatars3.githubusercontent.com/u/583231?v=4'} />