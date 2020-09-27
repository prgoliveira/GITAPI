import styled from 'styled-components'

export const Header = styled.nav`
    display: flex;
    justify-content: space-between;
    height: auto;
    align-items: flex-start;
    background-color:#22223b;
    align-self: flex-start;
    padding: 0;
    color: #f2e9e4;
    &{@media screen and (max-width: 600px){
        flex-wrap: wrap;
        height: auto;

    }
}
`

export const InputItens = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    padding: 0 0.5rem;   
    &{@media screen and (max-width: 600px){
        flex-wrap: wrap;
        height: auto;
    }
}
`

export const HomeContainer = styled.main`
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #363852;
    color: #f2e9e4;
    margin: 0 auto;
`

export const UserContent = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;    
    &{@media screen and (max-width: 600px){
        flex-wrap: wrap;
        height: auto;
    }
}
`
export const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin:  auto 1.5rem;
`

export const RepoContent = styled.div`
    width: auto;
    display: flex;
    justify-content: flex-start;
    border: 1px solid #ddd;
    flex-wrap: wrap;
    align-items: stretch;
    align-self: stretch;
`
export const RepoInfo = styled.div`
    justify-content: center;
    margin:  auto 1.5rem;
`
export const Input = styled.input`
    border: 1px solid #ddd;
    border-radius: .25rem 0 0  .25rem;
    height: 1.5rem;
    padding: 0 .5rem;

    &focus,
    &:active{
        outline: none;
        box-shadow: none;
    }
`

export const Button = styled.button`
    
    background: #9a8c98;
    color: #22223b;

    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid #decbc6;
    border-radius: 3px;
    background-color: #9a8c98;
    color: #22223b;

   
    &focus,
    &:active{
        outline: none;
        box-shadow: none;
        background-color: #ccc;
    }
`

export const ErroMsg = styled.p`
    display: block;
    font-size: .65rem;
    color: red;
    font-weight: 600;
`