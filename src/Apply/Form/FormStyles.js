import Cleave from 'cleave.js/dist/cleave-react';
import styled from "styled-components";
import COLOUR_CONSTS from "../../COLOUR_CONSTS";

export const Form = styled.form`
    margin: 1em;
    border: thick double ${COLOUR_CONSTS.LIGHT_GREY};
    border-radius: 2px;
    padding: 1.5em;

     @media only screen and (min-width: 768px) {
        width: 50%;
        border: none;
        display: flex;
        flex-wrap: wrap;
        column-gap: 1em;
    }
`

export const FormItem = styled.div`
    margin: .5em 0;

     @media only screen and (min-width: 768px) {
        flex: 45%;
    }
`

export const InputLabel = styled.label`
    color: ${COLOUR_CONSTS.LIGHT_GREY};
    font-weight: bold;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
`

export const LabelText = styled.div`
    padding-bottom: .25em;
`

export const Input = styled.input`
    width: 98%;
    height: 2em;

    @media only screen and (min-width: 768px) {
        width: 99%;
    }
`

export const CleaveInput = styled(Cleave)`
    width: 98%;
    height: 2em;

    @media only screen and (min-width: 768px) {
        width: 99%;
    }
`

export const Button = styled.button`
    background-color: ${COLOUR_CONSTS.LIGHT_GREEN};
    color: ${COLOUR_CONSTS.DARK_GREEN};
    border-radius: .5em;
    padding: .75em 1.5em;
    font-weight: bold;
    width: 100%;
    margin: 1em 0;

    &:hover {
        background-color: ${COLOUR_CONSTS.AQUA};
        color: ${COLOUR_CONSTS.DARK_GREEN};
        cursor: pointer;
    }

    @media only screen and (min-width: 768px) {
        width: 30%;
        // float: right;
    }
`