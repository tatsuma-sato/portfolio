import styled from "styled-components/macro";

export const Wrapper = styled.section`
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
  background-color: #000000;
  color: #ffffff;
  width: 100vw;
  height: 100%;
  flex-grow: 1;
  .section-title {
    font-weight: 700;
    margin: 1rem 0 2rem 0;

    @media (min-width: 768px) {
      font-size: 1.25rem;
      line-height: 1.75rem;
    }
    @media (min-width: 1024px) {
      font-size: 1.5rem;
      line-height: 2rem;
    }
  }
  .form-container {
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;
    margin: auto;
    width: 91.666667%;
    max-width: 72rem;
    background-color: var(--darkGray);

    @media (min-width: 768px) {
      margin-top: 3rem;
      margin-bottom: 3rem;
    }
    @media (min-width: 1024px) {
      margin-top: 6rem;
    }
  }
`;
