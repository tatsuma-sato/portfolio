import styled from "styled-components/macro";

export const Wrapper = styled.nav`
  display: flex;
  z-index: 10;
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
  height: 6rem;
  border-color: #e5e7eb;
  min-height: 100px;
  background-color: var(--reactGray);

  @media (min-width: 640px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  @media (min-width: 768px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
  @media (min-width: 1024px) {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    min-height: 100%;
    margin: 0 auto;

    @media (min-width: 768px) {
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }
  .logo {
    display: flex;
    min-height: 100%;
    > span {
      padding-left: 1.5rem;
      padding-right: 1.5rem;
      font-weight: 600;
      white-space: nowrap;
      align-self: center;
      color: var(--reactBlue);

      @media (min-width: 768px) {
        font-size: 1.25rem;
        line-height: 1.75rem;
      }
      @media (min-width: 1024px) {
        font-size: 1.875rem;
        line-height: 2.25rem;
      }
    }
  }
  .mobile-menu {
    display: inline-flex;
    padding: 0.5rem;
    margin: 0 0.75rem;

    color: #6b7280;
    font-size: 0.875rem;
    line-height: 1.25rem;
    align-items: center;
    border-radius: 0.5rem;

    @media (min-width: 768px) {
      display: none;
    }
    .menu-icon {
      width: 1.5rem;
      height: 1.5rem;
      color: var(--reactBlue);
    }
  }
  .mobile-menu-body {
    display: none;
    width: 100%;

    @media (min-width: 768px) {
      display: block;
      width: auto;
    }
  }

  .open {
    display: block;
  }

  .menu-items {
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
      margin-top: 0;
      margin-left: 2rem;
      font-size: 0.875rem;
      line-height: 1.25rem;
      font-weight: 500;
      flex-direction: row;
    }
    @media (min-width: 1024px) {
      margin-top: 1rem;
    }
  }
  .menu-item {
    display: block;
    background-color: var(--reactGray);
    padding: 0.5rem 1.5rem;
    transition-property: all;
    transition-duration: 300ms;
    color: #ffffff;

    @media (min-width: 768px) {
      padding: 0;
      padding-left: 0.75rem;
      padding-right: 1rem;
      background-color: transparent;
      color: #ffffff;
      font-size: 1.25rem;
      line-height: 1.75rem;
      min-width: 100px;
    }
    @media (min-width: 1024px) {
      font-size: 1.5rem;
      line-height: 2rem;
      min-width: 150px;
    }

    :hover {
      color: var(--reactBlue);
    }
  }
`;
