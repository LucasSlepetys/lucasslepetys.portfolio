import styled from 'styled-components';

const Wrapper = styled.aside`
  position: fixed;
  left: 0;
  top: 0;
  width: 0%;
  overflow: hidden;
  height: 100vh;
  background: var(--color-quaternary);
  z-index: 10;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: var(--transition-width);

  .side-center {
    width: 50%;
  }

  .links {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .links .link {
    text-decoration: none;
    color: var(--color-tertiary);
    font-weight: 100;
    margin: 15px 0px;
    font-size: 3.4rem;
  }

  .close-side {
    position: absolute;
    right: 20px;
    top: 20px;
    font-size: 4rem;
    color: var(--color-red);
  }

  .social-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 80px;
  }

  .social-links ul {
    text-decoration: none;
    list-style-type: none;
  }

  .social-links ul a .icon {
    font-size: 2rem;
    color: var(--color-black);
  }

  @media screen and (min-width: 680px) {
    transition: none;
    width: 0% !important;
  }
`;

export default Wrapper;
