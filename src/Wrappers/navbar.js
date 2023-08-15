import styled from 'styled-components';

const Wrapper = styled.div`
  nav {
    margin: 0 auto;
    width: min(100%, 1400px);
    height: auto;
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    top: 0;
    padding: 20px 0;
  }

  nav .nav-center {
    width: 80%;
    margin: 10px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  nav .nav-center .logo {
    font-size: 2rem;
    color: var(--color-primary);
  }

  nav .nav-center .logo span {
    color: var(--color-secondary);
  }

  nav .nav-center .links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  nav .nav-center .links .link {
    text-decoration: none;
    color: var(--color-primary);
    font-weight: 100;
    margin: 0px 20px;
    font-size: 1.5rem;
  }

  .fixed-nav {
    background: var(--color-white);
    box-shadow: var(--shadow-nav-bar);
  }

  .side-bar-icon {
    display: none;
    transition: all 0.3s ease-in-out;
  }

  .side-bar-icon:hover {
    transform: rotate(-90deg);
  }

  @media screen and (max-width: 680px) {
    nav {
      //add fixed nav:
      background: var(--color-white);
      box-shadow: var(--shadow-nav-bar);
      z-index: 1;
    }

    nav .nav-center .links {
      display: none;
    }

    .side-bar-icon {
      display: inline;

      color: var(--color-secondary);
      font-size: 3rem;
    }
  }
`;

export default Wrapper;
