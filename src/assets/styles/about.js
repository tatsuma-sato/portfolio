import styled from "styled-components/macro";

export const Wrapper = styled.section`
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
  background-color: #000000;
  color: #ffffff;
  width: 100vw;
  height: 100%;
  .section-title {
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
  .content {
    display: flex;
    position: relative;
    padding: 1.25rem 1.25rem 1.25rem 0;
    margin-top: 1.25rem;
    margin-bottom: 1.25rem;
    flex-direction: column;
    justify-content: space-between;
    gap: 2.5rem;

    @media (min-width: 1280px) {
      flex-direction: row;
    }
  }
  .about-left {
    flex-basis: 50%;
    .about-left-content {
      height: 75%;
      border-radius: 1rem;
      background-color: var(--darkGray);
      > p {
        padding: 1.25rem;
        font-size: 0.75rem;
        line-height: 1rem;
        line-height: 1.625;

        @media (min-width: 640px) {
          font-size: 0.875rem;
          line-height: 1.25rem;
        }
        @media (min-width: 768px) {
          font-size: 1rem;
          line-height: 1.5rem;
        }
        @media (min-width: 1024px) {
          padding: 2.5rem;
        }
        > span {
          font-weight: bold;
          color: var(--reactBlue);
        }
      }
    }
  }

  .about-right {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-basis: 50%;
    .about-right-image {
      width: 24rem;
      height: 24rem;
      > img {
        width: 100%;
        height: 100%;
        border-radius: 9999px;
      }
    }
    .skills {
      display: flex;
      flex-direction: column;
      background-color: var(--reactGray);
      padding: 1rem 2rem;
      border-radius: 1rem;
      margin-top: 2rem;
      > h1 {
        font-size: 1.25rem;
        margin-bottom: 0.75rem;
      }
      .image-container {
        display: flex;
        width: 20rem;
        justify-content: space-between;
        .skill-icon {
          width: 30px;
          height: 30px;
        }
      }
    }
  }
`;
