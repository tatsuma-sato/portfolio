import styled from "styled-components/macro";

export const Wrapper = styled.div`
  background: #fff;
  z-index: 100;
  position: fixed;
  inset: 0;
  max-width: 90%;
  max-height: 90vh;
  min-height: 30rem;
  height: 45rem;
  width: 40rem;
  margin: auto;
  box-shadow: 0 10px 20px rgba(black, 0.2);
  color: black;
  padding: 2rem 3rem;
  border-radius: 10px;
  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 2rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #d3d3d3;
    .modal-close {
      padding: 3px;
      cursor: pointer;
      opacity: 0.5;
      border-radius: 3px;
      :hover {
        background-color: #d3d3d3;
        opacity: 1;
      }
    }
  }
  .img {
    margin: 1rem auto;
    height: 350px;
  }
  .description {
    color: #808080;
  }
  .skills {
    font-style: italic;
    margin: 1rem auto;
    padding-bottom: 1rem;
    border-bottom: 1px solid #d3d3d3;
  }
  .btn {
    text-align: center;
    display: block;
    margin: 0 auto;
    width: 150px;
    padding: 1rem 2rem;
    background-color: var(--reactBlue);
    border-radius: 5px;
    :hover {
      opacity: 0.8;
    }
  }
`;

export const Overlay = styled.div`
  pointer-events: none;
  background: rgba(15, 23, 42, 0.6);
  position: fixed;
  z-index: 50;
  opacity: 0.2;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
`;
