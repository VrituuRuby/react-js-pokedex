import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.ul).attrs({
    transition: {
        delayChildren: 0.5
    }
})`
    min-height: 100vh;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    /* display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem; */

    max-width: 1120px;
    margin: 0 auto;
    margin-top: -8rem;
    user-select: none;
`