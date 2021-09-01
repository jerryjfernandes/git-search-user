import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    @media (min-width: 900px) {
        display: flex;
        justify-content: center;
    }
`

export const Container = styled.div`
    width: 80%;
    padding: 1rem;

    p {
        font-style: italic;
        margin: 0.3rem 0;
    }

    @media (min-width: 580px) {
        width: 20%;
    }
`
