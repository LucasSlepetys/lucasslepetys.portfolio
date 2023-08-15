import styled from 'styled-components';
const FooterWrap = styled.footer`
  height: 20%;
  width: 100%;

  z-index: -100;

  bottom: 0;
  left: 0;

  background: var(--color-black-shaded);

  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  .center {
    width: min(90%, 500px);
    height: 60%;
    padding: 10px;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }

  .center > * {
    margin: 15px 0;
  }

  .center .social {
    width: 60%;
  }

  .center .social:first-child ul a .icon {
    color: var(--color-secondary) !important;
  }

  .center p {
    color: var(--color-tertiary);
    text-align: center;
    font-size: 1.4rem;
  }
`;

export default FooterWrap;
