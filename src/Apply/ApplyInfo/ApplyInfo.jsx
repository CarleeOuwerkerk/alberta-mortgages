import styled from "styled-components";

const ApplyInfoWrapper = styled.div`
    padding: .5em 2em;

    @media only screen and (min-width: 768px) {
        width: 50%;
    }
`

const ApplyInfo = () => {
    return (
        <ApplyInfoWrapper>
            <h2>Apply</h2>

            <p>
                Start your application by filling out the provided form.
            </p>

            <h3>Questions?</h3>

            <p>Check out our FAQ page or reach out by email at landexperts@shaw.ca.</p>
        </ApplyInfoWrapper>
    )
}

export default ApplyInfo;