import styled from 'styled-components'


export const TitlePage = styled.h1`
font-size: 200%;
padding: 0 1.5rem;
`
export const TitleRepo = styled.h2`
font-size: 200%;
padding: 0 1.5rem;
`

export const AvatarUser = styled.img`
    vertical-align: middle;
    width: 100%;
    max-width: 12rem;
    height: auto;
    border-radius: 10%;
    margin: 1rem 1rem;
`

export const Info = styled.p`
    border: 1px solid #f2e9e4;
    background-color: #4a4e69;
    justify-content: center;
    border-radius: .25rem;
    min-height: 1.5rem;
    color: #f2e9e4;
    padding: 0.25rem;
    margin: 0.15rem;
`


export const RepoItem =  styled.a`
    
    background: #4a4e69;
    width: 15rem;
    height: 7rem;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid #f2e9e4;
    border-radius: 3px;
    color: #f2e9e4;
    overflow: hidden;
    text-decoration: none;

   
    &focus,
    &:hover{
        outline: none;
        box-shadow: none;
        color: #000;
        background-color: #ccc;
    }
`