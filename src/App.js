import styled from "styled-components";
import Apply from "./Apply/Apply";
import TopBar from "./TopBar/TopBar";
import COLOUR_CONSTS from "./COLOUR_CONSTS";
import Disclosures from "./Disclosures/Disclosures";

const PageWrapper = styled.div`
    background-color: ${COLOUR_CONSTS.LIGHT_GREY};
    font-family: "Belleza", sans-serif;
}
`
const App = () => {
  return (
    <PageWrapper>

      <TopBar />

      <p>
        Having a hard time acquiring bank financing?
      </p>

      <p>
        We are Alberta's premier private lender with more than 25 years of experience. With our expertise and quick turnaround, we'll help you navigate the loan process. Fast approvals and quick closing are available.
      </p>

      Let us help you with
      <ul>
        <li>first and second mortgages</li>
        <li>divorce settlements</li>
        <li>debt consolidation</li>
        <li>new home construction</li>
        <li>renovations</li>
        <li>bridge financing</li>
      </ul>

      <p>
        We offer mortgage loans up to 70% LTV (Loan - To - Value) of property with no application fees. We do not offer personal loans.
      </p>

      <p>
        Send an email today to landexperts@shaw.ca for a free quote.
      </p>

      <p>
        Funds are available now!
      </p >

      <Apply />
      <Disclosures />
    </PageWrapper >
  );
}

export default App;
