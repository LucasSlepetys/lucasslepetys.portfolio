import styled from 'styled-components';

const Wrapper = styled.nav`
  height: auto;
  width: 100%;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  top: 0;
  padding: 20px 0;
  transition: all 0.2s ease-in-out;

  z-index: 1000;

  .nav-center {
    margin: 10px auto;
    width: min(80%, 1200px);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav-center .logo {
    font-size: 2rem;
    color: var(--color-primary);
  }

  .nav-center .logo span {
    color: var(--color-secondary);
  }

  .nav-center .links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav-center .links .link {
    text-decoration: none;
    color: var(--color-primary);
    font-weight: 100;
    margin: 0px 20px;
    font-size: 1.5rem;
  }

  .side-bar-icon {
    display: none;
    transition: all 0.3s ease-in-out;
  }

  .side-bar-icon:hover {
    transform: rotate(-90deg);
  }

  @media screen and (max-width: 680px) {
    background: var(--color-white);
    z-index: 1;

    .nav-center .links {
      display: none;
    }

    .side-bar-icon {
      display: inline;

      color: var(--color-secondary);
      font-size: 3rem;
      cursor: pointer;
    }
  }
`;

export default Wrapper;
