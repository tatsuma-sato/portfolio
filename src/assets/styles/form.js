import styled from "styled-components/macro";

export const FormStyle = styled.form`
  padding: 2.5rem 2rem;
  color: #ffffff;
  text-align: center;

  @media (min-width: 1024px) {
    padding: 5rem 4rem;
  }
  .form-content {
    display: flex;
    margin-bottom: 2rem;
    flex-direction: column;
    justify-content: center;

    @media (min-width: 1024px) {
      flex-direction: row;
      justify-content: space-around;
    }
    @media (min-width: 1280px) {
      justify-content: center;
    }
  }
  .form-left {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-basis: 41.666667%;

    @media (min-width: 768px) {
      padding-left: 1.75rem;
      padding-right: 1.75rem;
    }
    @media (min-width: 1024px) {
      padding-left: 0;
      padding-right: 0;
    }
    @media (min-width: 1280px) {
      padding-left: 1.75rem;
      padding-right: 1.75rem;
    }
    .form-content {
      position: relative;
      margin-bottom: 3rem;
    }
    .mb-0 {
      @media (min-width: 1024px) {
        margin-bottom: 0;
      }
    }
  }
  .form-input {
    display: block;
    padding: 0.625rem;
    padding-left: 2.5rem;
    background-color: #000000;
    transition-property: all;
    transition-duration: 300ms;
    color: #ffffff;
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: #9ca3af;
    width: 100%;
    border-width: 1px;
    border-color: #000000;
    outline: none;

    :hover {
      border-color: #ffffff;
      --ring-color: #ffffff;
    }
    :focus {
      border-color: var(--reactBlue);
      --ring-color: var(--reactBlue);
    }
    ::placeholder {
      color: #9ca3af;
    }
    &.invalid {
      border-color: #e74694;
      color: #d61f69;
      :focus {
        border-color: #e74694;
        --ring-color: #e74694;
      }
    }
  }

  .form-right {
    position: relative;
    flex-basis: 41.666667%;

    @media (min-width: 768px) {
      padding-left: 1.75rem;
      padding-right: 1.75rem;
    }
    @media (min-width: 1024px) {
      padding-left: 0;
      padding-right: 0;
    }
    @media (min-width: 1280px) {
      padding-left: 1.75rem;
      padding-right: 1.75rem;
    }
    .form-right-container {
      position: relative;
    }
    .form-right-logo {
      display: flex;
      position: absolute;
      left: 0;
      top: 0.75rem;
      padding-left: 0.75rem;
      align-items: center;
      pointer-events: none;
    }
    .form-textarea {
      display: block;
      padding: 0.625rem;
      padding-left: 2.5rem;
      background-color: #000000;
      transition-property: all;
      transition-duration: 300ms;
      color: #ffffff;
      font-size: 0.875rem;
      line-height: 1.25rem;
      width: 100%;
      height: 100%;
      border-width: 1px;
      border-color: #000000;

      @media (min-width: 768px) {
        height: 16rem;
      }

      :hover {
        border-color: #ffffff;
      }
      :focus {
        border-color: var(--reactBlue);
        outline: none;
        --ring-color: var(--reactBlue);
      }
      ::placeholder {
        color: #9ca3af;
      }
    }
  }
  .label-logo {
    display: flex;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    padding-left: 0.75rem;
    align-items: center;
    pointer-events: none;
  }
  svg {
    color: #9ca3af;
    width: 1.5rem;
    height: 1.5rem;
  }
  .btn {
    padding: 0.625rem 1.25rem;
    background-color: #000000;
    transition-property: all;
    transition-duration: 300ms;
    color: #9ca3af;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 500;
    text-align: center;
    border-width: 2px;
    border-color: #000000;
    cursor: pointer;

    @media (min-width: 640px) {
      width: auto;
    }

    :hover {
      color: var(--reactBlue);
      border-color: var(--reactBlue);
    }
    :focus {
      --ring-color: #93c5fd;
    }
    :disabled {
      cursor: not-allowed;
      :hover {
        border-color: black;
        color: #9ca3af;
        --ring-color: black;
      }
    }
  }
`;
