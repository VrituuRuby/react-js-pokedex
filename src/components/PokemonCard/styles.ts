import { motion } from "framer-motion";
import styled from "styled-components";

export const ListItem = styled(motion.li).attrs({
    animate: {
        opacity: [0,1,1],
        y: [20,-20,0]
    }
})`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background-color: white;
    border-radius: 0.5rem;
    box-shadow: 0px 0.25rem 1rem rgba(0,0,0,0.1);
    padding: 1rem;

    svg{
        width: 100%;
        height: 100%;
        padding: 2rem;
        color: #eee;
        animation: spin 2s linear infinite;
    }

    @keyframes spin {
        0% { -webkit-transform: rotate(0deg); }
        100% { -webkit-transform: rotate(360deg); }
    }


    strong {
        &.name{
            margin: 0.25rem 0;
            width: 100%;
            text-align: left;
            font-size: 2rem;
            font-weight: 400;
            text-transform: capitalize;
        }

        &.index{
            width: 100%;
            text-align: left;
            font-size: 1rem;
            font-weight: 400;
        }

    }
    img{
        width: 100%;
        background-color: #eee;
        border-radius: 0.25rem;
        padding: 0.5rem;
        min-height: 10rem;
    }
    
    span {
        width: 100%;
        display: flex;
        gap: 0.25rem;
        p{
            padding: 0 1rem;
            border-radius: 0.25rem;
            font-weight: 400;
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
                color: #000;
            }
            &.normal{
                background-color: #a4acaf;
                color: #000;
            }
            &.eletric{
                background-color:#eed535;
            }
            &.ground{
                background: linear-gradient(180deg, #f7de3f 50%, #ab9842 50%);
                color: #000;
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
                color: #000;
            }
            &.dark{
                background-color: #707070;
            }

        }
    } 
`
