import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 75%;
    height: 8rem;
    display: flex;
    @media (min-width: 800px) {
        width: 30%;
    }
` 

export const Avatar = styled.img`
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    border: none;
    
`

export const Infos = styled.div`
    flex: 3;
    padding: 0.8rem;
    
    a {
        font-style: italic;
    }
`
