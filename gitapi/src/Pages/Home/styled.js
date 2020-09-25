import styled from 'styled-components'


export const HomeContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    max-width: 990px;
    margin: 0 auto;
`

export const Content = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    
    max-width: 990px;
    margin: 0 auto;
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
    height: 1.5rem;
    border: 1px solid #000;
    background-color: #2F4F4F;
    color: #f3f3f3;
    border-radius: 0 .25rem .25rem 0;
   
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
margin-top: 1rem;
`