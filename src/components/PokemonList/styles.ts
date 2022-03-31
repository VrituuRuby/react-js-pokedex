import styled from "styled-components";

export const Container = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 1rem;

    max-width: 1120px;
    margin: 0 auto;
    margin-top: -8rem;

    li {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        background-color: white;
        border-radius: 0.5rem;
        box-shadow: 0px 0.25rem 1rem rgba(0,0,0,0.1);


        strong {
            margin: 0.5rem;
        }
        img{
            width: 80%;
        }
    }
`