import styled from "styled-components/macro";

export const Wrapper = styled.section`
  display: flex;
  background-color: #000000;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  flex-grow: 1;
  .container {
    padding: 5rem 10rem;
    background-color: #000000;
  }
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .title {
    color: #2563eb;
    font-size: 8rem;
    line-height: 1;
    font-weight: 700;
  }
  .sub-title {
    margin-bottom: 0.5rem;
    color: #ffffff;
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 700;
    text-align: center;

    @media (min-width: 768px) {
      font-size: 1.875rem;
      line-height: 2.25rem;
    }
  }
  span {
    color: #ef4444;
  }
  .text {
    margin-bottom: 2rem;
    color: #ffffff;
    text-align: center;

    @media (min-width: 768px) {
      font-size: 1.125rem;
      line-height: 1.75rem;
    }
  }
  .link {
    padding: 0.5rem 1.5rem;
    background-color: #ffffff;
    color: #000000;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 600;
  }
`;
