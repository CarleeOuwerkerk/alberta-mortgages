import styled from "styled-components";
import COLOUR_CONSTS from "../COLOUR_CONSTS";

const SpecificsSection = styled.div`
    background-color: ${COLOUR_CONSTS.LIGHT_GREY};
`

const SpecificsImage = styled.div`
    background-image: url('https://plus.unsplash.com/premium_photo-1661659232931-1d4e811b28c2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
    height: 20em;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    /* width: 80%; */
    /* margin-left: auto; */
`

const LoanToValueSection = styled.ul`
    background-color: ${COLOUR_CONSTS.DARKEST_GREEN};
    color: ${COLOUR_CONSTS.LIGHT_GREY};
    border-radius: 0 16px 16px 16px;
    margin: 0;
    padding: 2em 1.5em 2em 2em;
    width: 45%;
    line-height: 25px;
    font-weight: 600;
`

const LoanToValueHeading = styled.h2`
    margin: 0;
    font-size: 20px;
    padding-bottom: .5em;
`


const SpecificsContent = styled.div`
    padding: .5em 2em;
`

const Specifics = () => {
    return (
        <SpecificsSection>
            <SpecificsImage>
                <LoanToValueSection>
                    <LoanToValueHeading>MAXIMUM LOAN TO VALUE</LoanToValueHeading>
                    <li>70% Urban Residential</li>
                    <li>65% Rural Residential</li>
                    <li>50% Farm Land</li>
                </LoanToValueSection>
            </SpecificsImage>

            <SpecificsContent>
                <h2>Let us help you with</h2>
                <ul>
                    <li>First and Second Mortgages</li>
                    <li>Divorce Settlements</li>
                    <li>Debt Consolidation</li>
                    <li>New Home Construction</li>
                    <li>Renovations</li>
                    <li>Bridge Financing</li>
                </ul>

                <p>We offer mortgage loans up to 70% LTV (Loan To Value) of property.</p>
                <p>We do not offer personal loans.</p>
            </SpecificsContent>
        </SpecificsSection>
    )
}

export default Specifics;