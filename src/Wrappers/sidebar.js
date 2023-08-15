import styled from 'styled-components';

const Wrapper = styled.div`
  aside {
    position: absolute;
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
  }

  aside .side-center {
    width: 50%;
  }

  aside .links {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  aside .links .link {
    text-decoration: none;
    color: var(--color-tertiary);
    font-weight: 100;
    margin: 15px 0px;
    font-size: 3.4rem;
  }

  aside .close-side {
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

  @media screen and (max-width: 680px) {
    aside {
      transition: var(--transition-width);
    }

    .open {
      width: 100%;
      transition: var(--transition-width);
    }
  }
`;

export default Wrapper;
