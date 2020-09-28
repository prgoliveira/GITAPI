import React from 'react'

import {AvatarUser} from './styled'

export default props => <AvatarUser alt="Avatar do usuario" src={props.avatar_url || 'https://avatars3.githubusercontent.com/u/583231?v=4'} />