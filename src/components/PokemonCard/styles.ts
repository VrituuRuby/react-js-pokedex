import { motion } from "framer-motion";
import styled from "styled-components";

export const ListItem = styled(motion.li).attrs({
  animate: {
    opacity: [0, 1, 1],
    y: [20, -20, 0],
  },
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  gap: 4px;
  border-radius: 0.5rem;
  box-shadow: 0px 0.25rem 1rem rgba(0, 0, 0, 0.1);
  padding: 1rem;
  position: relative;

  button {
    background: none;
    border: 0;
    cursor: pointer;
  }

  .loader {
    width: 14rem;
    height: 14rem;
  }
  svg {
    width: 100%;
    height: 100%;
    color: #eee;
    animation: spin 2s linear infinite;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  strong {
    &.name {
      width: 100%;
      text-align: left;
      font-size: 2rem;
      line-height: 2rem;
      font-weight: bold;
      text-transform: capitalize;
      color: #333;
      font-family: "Teko";
    }

    &.index {
      width: 100%;
      text-align: left;
      font-family: "Teko";
      font-size: 1.25rem;
      line-height: 1.25rem;
      color: #ccc;
    }
  }
  img {
    width: 14rem;
    background-color: #eee;
    border-radius: 0.25rem;
    padding: 0.5rem;
    min-height: 10rem;
  }

  span {
    width: 100%;
    display: flex;
    gap: 0.25rem;
    p {
      padding: 0.25rem 1rem;
      border-radius: 0.25rem;
      font-family: "Teko";
      font-weight: bold;
      line-height: 1rem;
      color: white;
      text-transform: uppercase;
      &.grass {
        background-color: #9bcc50;
      }
      &.ghost {
        background-color: #7b62a3;
      }
      &.poison {
        background-color: #b97fc9;
      }
      &.fire {
        background-color: #fd7d24;
      }
      &.water {
        background-color: #4592c4;
      }
      &.bug {
        background-color: #729f3f;
      }
      &.flying {
        background: linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%);
      }
      &.normal {
        background-color: #a4acaf;
      }
      &.electric {
        background-color: #eed535;
      }
      &.ground {
        background: linear-gradient(180deg, #f7de3f 50%, #ab9842 50%);
      }
      &.fairy {
        background-color: #fdb9e9;
      }
      &.poison {
        background-color: #a040a0;
      }
      &.fighting {
        background-color: #d56723;
      }
      &.psychic {
        background-color: #f366b9;
      }
      &.rock {
        background-color: #a38c21;
      }
      &.steel {
        background-color: #9eb7b8;
      }
      &.ice {
        background-color: #51c4e7;
      }
      &.dragon {
        background: linear-gradient(180deg, #53a4cf 50%, #f16e57 50%);
      }
      &.dark {
        background-color: #707070;
      }
    }
  }
`;
