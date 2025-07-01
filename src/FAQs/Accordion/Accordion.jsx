import { useState } from "react";
import styled from "styled-components";
import COLOUR_CONSTS from '../../COLOUR_CONSTS';

const AccordionContainer = styled.div`
     @media only screen and (min-width: 600px) {
        width: 55%;
    }

     @media only screen and (min-width: 768px) {
        width: 45%;
    }
`

const DropdownItem = styled.div`
    border-top: 1px solid black;

    &:last-child {
        border-bottom: 1px solid black;
  }
`

const DropdownTrigger = styled.div`
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:hover {
        color: ${COLOUR_CONSTS.GREEN};
    }
`;

const Question = styled.h2`
    text-transform: uppercase;
    font-size: 20px;
`;

const DropdownIcon = styled.span`
    font-size: 30px;
`;

const Answer = styled.div`
        margin-top: .5em;
        margin-bottom: 2em;
    `;

const Accordion = ({ data }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleIndex = (index) => {
        setOpenIndex(index === openIndex ? null : index);
    };

    return (
        <AccordionContainer>
            {data.map((item, index) => (
                <DropdownItem key={index}>
                    <DropdownTrigger onClick={() => toggleIndex(index)}>
                        <Question>
                            {item.question}
                        </Question>
                        <DropdownIcon isOpen={openIndex === index}>
                            {openIndex === index ? '-' : '+'}
                        </DropdownIcon>
                    </DropdownTrigger>
                    {openIndex === index && <Answer>{item.answer}</Answer>}
                </DropdownItem>
            ))
            }
        </AccordionContainer >
    )
}

export default Accordion;