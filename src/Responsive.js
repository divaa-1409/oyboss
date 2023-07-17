import {css} from "styled-components"

export const mobile = (props) => {
    return css`
    @media only screen and (max-width:680px) {
        ${props}
    }
    `;
}
export const tablet = (props) => {
    return css`
    @media only screen and (max-width:1470px) {
        ${props}
    }
    `;
}
export const mid = (props) => {
    return css`
    @media only screen and (max-width:1100px) {
        ${props}
    }
    `;
}
export const midLess = (props) => {
    return css`
    @media only screen and (max-width:850px) {
        ${props}
    }
    `;
}