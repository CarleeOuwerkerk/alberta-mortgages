import { useState } from "react";
import styled from "styled-components";

const DropdownItem = styled.div`
    border-top: 1px solid black;

    &:last-child {
        border-bottom: 1px solid black;
  }
`

const Question = styled.div`
    cursor: pointer;

    &:hover {
        color: #007b5e;
    }
`;

const Answer = styled.div`
    max-height: ${({ isOpen }) => (isOpen ? '200px' : '0')};
    overflow: hidden;
    /* transition: max-height 0.3s ease; */
    padding-top: ${({ isOpen }) => (isOpen ? '1em' : '0')};
`;

const DropdownIcon = styled.span`
    font-size: 1.5em;
    line-height: 1;
    margin-left: 1em;
    transition: all 0.2s ease;
`;

const Accordion = ({ data }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleIndex = (index) => {
        setOpenIndex(index === openIndex ? null : index);
    };

    return (
        <div>
            {data.map((item, index) => (
                <DropdownItem key={index}>
                    <Question onClick={() => toggleIndex(index)}>
                        {item.question}
                        <DropdownIcon isOpen={openIndex === index}>
                            {openIndex === index ? '−' : '+'}
                        </DropdownIcon>
                    </Question>
                    <Answer isOpen={openIndex === index}>{item.answer}</Answer>
                </DropdownItem>
            ))}
        </div>
    )
}

export default Accordion;