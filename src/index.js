import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import Apply from './Apply/Apply';
import TopBar from './TopBar/TopBar'
import Disclosures from './Disclosures/Disclosures'
import styled from 'styled-components';
import COLOUR_CONSTS from './COLOUR_CONSTS';
import FAQs from './FAQs/FAQs';

const PageWrapper = styled.div`
    background-color: ${COLOUR_CONSTS.LIGHT_GREY};
    font-family: "Belleza", sans-serif;
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PageWrapper>
      <BrowserRouter>
        <TopBar />

        <Routes>
          <Route path="/" element={<App />} />
          <Route path="faqs" element={<FAQs />} />
          <Route path="apply" element={<Apply />} />
          {/* <Route path="confirmation" element={<Apply />} /> */}
          <Route path="*" element={<Navigate to="/" />} /> {/* Redirect unknown routes */}
        </Routes>

        <Disclosures />
      </BrowserRouter>
    </PageWrapper>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
