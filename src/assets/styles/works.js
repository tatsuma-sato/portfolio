import styled from "styled-components/macro";

export const Wrapper = styled.section`
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
  background-color: #000000;
  color: #ffffff;
  width: 100vw;
  height: 100%;

  .section-titile {
    margin-bottom: 1rem;
    font-weight: 700;

    @media (min-width: 768px) {
      font-size: 1.25rem;
      line-height: 1.75rem;
    }
    @media (min-width: 1024px) {
      font-size: 1.5rem;
      line-height: 2rem;
    }
  }
  .container {
    padding-left: 1rem;
    padding-right: 1rem;

    @media (min-width: 768px) {
      padding-left: 0;
      padding-right: 0;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;

    @media (min-width: 768px) {
      flex-direction: row;
    }
  }
`;
