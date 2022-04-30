import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    h1{
        text-align: center;
        text-transform: capitalize;
        color: #333;
    }
    .details{
        display: flex;
        flex-direction: row;
        gap: 0.5rem;
        width: 100%;

        img{
            width: 50%;
            background-color: #e3e3e3;
            border-radius: 0.5rem;
        }

        .flavor-text-and-table{
            width: 50%;
            p{
                font-size: 1.75rem;
                color: #333;
                border-left: 2px #333 solid;
                padding-left: 0.5rem;
            }
        }
    }
`;