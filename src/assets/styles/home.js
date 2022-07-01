import styled from "styled-components/macro";

export const Wrapper = styled.main`
  height: 100%;
  color: white;
  background-color: rgb(55, 65, 81);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100vw;
  position: relative;
  flex-grow: 1;
  background-image: url("https://images.unsplash.com/photo-1537498425277-c283d32ef9db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1178&q=80");
  display: flex;
  .content {
    inset: 0;
    margin: auto;
  }
  .home-title {
    margin-top: 1rem;
    font-size: 2.25rem;
    line-height: 2.5rem;
    font-weight: 700;
    letter-spacing: 0.05em;
    text-align: center;
    color: var(--reactBlue);

    @media (min-width: 768px) {
      font-size: 4.5rem;
      line-height: 1;
    }

    @media (min-width: 1280px) {
      font-size: 6rem;
      line-height: 1;
    }
  }
  .home-text {
    padding-right: 1.25rem;
    padding-left: 1.25rem;
    margin-top: 0.75rem;
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 700;
    letter-spacing: 0.025em;
    text-align: center;
    > span {
      color: var(--reactBlue);
    }

    @media (min-width: 768px) {
      font-size: 1.875rem;
      line-height: 2.25rem;
    }

    @media (min-width: 1280px) {
      font-size: 2.25rem;
      line-height: 2.5rem;
    }
  }
  .react-icon {
    margin-right: 0.25rem;
  }
  .button-container {
    display: flex;
    margin-top: 2rem;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2.5rem;

    @media (min-width: 768px) {
      flex-direction: row;
      gap: 5rem;
    }
    .button {
      padding: 0.75rem 1rem;
      background-color: #000000;
      transition-property: all;
      transition-duration: 300ms;
      color: #ffffff;
      font-size: 1.5rem;
      line-height: 2rem;
      font-weight: 700;
      text-align: center;
      width: 13rem;
      border-radius: 0.25rem;
      border-width: 2px;
      border-style: solid;
      border-color: var(--reactBlue);

      @media (min-width: 768px) {
        font-size: 1.125rem;
        line-height: 1.75rem;
        width: 13rem;
      }
      @media (min-width: 1024px) {
        width: 16rem;
      }

      :hover {
        color: #000000;
        border-width: 2px;
        border-style: solid;
        background-color: var(--reactBlue);
      }
    }
  }
`;
