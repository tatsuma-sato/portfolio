import styled from "styled-components/macro";

export const Wrapper = styled.div`
  flex-basis: 41.666667%;
  margin-bottom: 3rem;

  .img-container {
    position: relative;
    overflow: hidden;
    @media (min-width: 768px) {
      height: 12rem;
    }
    @media (min-width: 1024px) {
      height: 20rem;
    }

    &::before {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: 10;
      transition: all 0.3s;
    }
    &:hover::before {
      background-color: rgba(0, 0, 0, 0.4);
    }

    .button {
      opacity: 0;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
      background-color: var(--reactBlue);
      padding: 0.75rem 1.25rem;
      z-index: 100;
      color: var(--darkGray);
      margin: auto;
      cursor: pointer;
    }
    .active {
      display: block;
      opacity: 1;
      transition: 0.3s;
    }
    .image {
      width: 100%;
      height: 100%;
      transition: all 0.3s;
      &:hover {
      }
    }
    .hover {
      transform: scale(1.2);
    }
  }
`;
