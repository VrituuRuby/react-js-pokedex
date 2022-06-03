import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    h1{
        text-align: center;
        text-transform: capitalize;
        font-size: 3rem;
        line-height: 3rem;
        color: #333;
        font-family: 'Teko';
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
            margin-right: 0.25rem;
        }

        .flavor-text-and-table{
            width: 50%;
            margin-left: 0.25rem;
            display: flex;
            flex-direction: column;
            gap: 1rem;

            h2{
                font-family: 'Exo 2';
                font-weight: 500;
                color: #333;
            }

            p{
                font-size: 1.5rem;
                color: #333;
                font-family: 'Exo 2';
            }
        
            table{
                width: 100%;
                padding: 0.5rem;
                background: hotpink;
                border-radius: 0.25rem;
                td{
                    padding: 0.5rem;

                    h3, h2{
                        color: white;
                        font-family: 'Exo 2';
                    }

                    h3{
                        font-weight: bold;
                    }
                    h2{
                        font-weight: normal;
                    }
                }
            }


        //TYPES

        .types {
        width: 100%;
        display: flex;
        gap: 0.25rem;
        p{
            text-align: center;
            padding: 0.5rem 2rem;
            width: 150px;
            border-radius: 0.25rem;
            font-family: 'Teko';
            font-weight: bold;
            line-height: 1rem;
            color: white;
            text-transform: uppercase;
            &.grass{
                background-color: #9bcc50;
            }
            &.ghost{
                background-color: #7b62a3;
            }
            &.poison{
                background-color: #b97fc9;
            }
            &.fire{
                background-color: #fd7d24;
            }
            &.water{
                background-color: #4592c4;
            }
            &.bug{
                background-color: #729f3f;
            }
            &.flying{
                background: linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%);
            }
            &.normal{
                background-color: #a4acaf;
            }
            &.electric{
                background-color:#eed535;
            }
            &.ground{
                background: linear-gradient(180deg, #f7de3f 50%, #ab9842 50%);
            }
            &.fairy{
                background-color: #fdb9e9;
            }
            &.poison{
                background-color: #A040A0;
            }
            &.fighting{
                background-color: #d56723;
            }
            &.psychic{
                background-color: #f366b9;
            }
            &.rock{
                background-color: #a38c21;
            }
            &.steel{
                background-color: #9eb7b8;
            }
            &.ice{
                background-color: #51c4e7;
            }
            &.dragon{
                background: linear-gradient(180deg, #53a4cf 50%, #f16e57 50%);
            }
            &.dark{
                background-color: #707070;
            }

        }
    } 
        }
    }
`;