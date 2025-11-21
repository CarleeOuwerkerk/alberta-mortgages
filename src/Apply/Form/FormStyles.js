import Cleave from 'cleave.js/dist/cleave-react';
import styled from "styled-components";
import COLOUR_CONSTS from "../../COLOUR_CONSTS";

export const Form = styled.form`
    margin: 2em;
    border: thick double ${COLOUR_CONSTS.LIGHT_GREY};
    border-radius: 2px;
    padding: 1.25em;

     @media only screen and (min-width: 600px) {
        display: flex;
        flex-wrap: wrap;
        column-gap: 1em;
    }

     @media only screen and (min-width: 768px) {
        width: 50%;
        border: none;
        align-items: flex-end;
        padding: 0;
    }
`

export const FormItem = styled.div`
    margin: .5em 0;
    display: ${props => props.disabled ? "none" : null};
    
    @media only screen and (min-width: 600px) {
        flex: ${props => props.isWideField ? '100%' : '45%'};
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
    border-radius: 2px;
    display: ${props => props.disabled ? "none" : null};  

    @media only screen and (min-width: 600px) {
        width: ${props => props.isWideField ? '99%' : '98%'};
    }

    @media only screen and (min-width: 768px) {
        width: ${props => props.isWideField ? '99.5%' : '99%'};
    }
`

export const Select = styled.select`
    width: 100%;
    height: 2.4em;
    border-radius: 2px;
    box-shadow: -.3px -.5px .5px black;

     @media only screen and (min-width: 768px) {
       width: 101.5%;
    }
`

export const CleaveInput = styled(Cleave)`
    width: 98%;
    height: 2em;
    border-radius: 2px;

    @media only screen and (min-width: 768px) {
        width: 99%;
    }
`

export const Button = styled.button`
    //OPTION 1
    /* background-color: ${COLOUR_CONSTS.LIGHT_GREEN};
    color: ${COLOUR_CONSTS.DARK_GREEN};
    border-radius: .5em;
    padding: .75em 1.5em;
    font-weight: bold;
    width: 100%;
    margin: 1em 0;

    &:hover {
        background-color: ${COLOUR_CONSTS.AQUA};
        cursor: pointer;
    }

    @media only screen and (min-width: 600px) {
        width: 30%;
        margin-left: auto;
    } */

    //OPTION 3
    background-color: ${COLOUR_CONSTS.LIGHT_GREY};
    /* background-color: ${COLOUR_CONSTS.LIGHT_GREEN}; */
    /* background-color: ${COLOUR_CONSTS.LIGHT_GREY}; */
    border: 1px solid ${COLOUR_CONSTS.DARKEST_GREEN};
    border-radius: 30px;
    box-shadow: ${COLOUR_CONSTS.DARKEST_GREEN} 4px 4px 0 0;
    color: ${COLOUR_CONSTS.DARKEST_GREEN};
    cursor: pointer;
    font-weight: 600;
    font-size: 15.5px;
    line-height: 50px;
    text-align: center;
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    width: 100%;
    margin: 1em 0;

    &:hover {
        background-color: ${COLOUR_CONSTS.LIGHT_GREEN};
        /* background-color: ${COLOUR_CONSTS.LIGHT_GREY}; */
        /* background-color: ${COLOUR_CONSTS.WHITE}; */
    }

    &:active {
        box-shadow: ${COLOUR_CONSTS.DARKEST_GREEN} 2px 2px 0 0;
        transform: translate(2px, 2px);
    }

    @media only screen and (min-width: 600px) {
        width: 30%;
        margin-left: auto;
    }
`

export const FormConfirmation = styled.div`
    text-align: center; 
    font-weight: 600;
    margin: 2em;
    border: thick double ${COLOUR_CONSTS.LIGHT_GREY};
    border-radius: 2px;
    padding: 1.5em;
    
    @media only screen and (min-width: 768px) {
        width: 50%;
        border: none;
        padding: 0;
    }
`