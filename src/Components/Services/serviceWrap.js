import styled from 'styled-components';

const Wrapper = styled.div`
  background: var(--color-quaternary);
  padding: 10% 0%;

  .services {
    width: min(90%, 1400px);
    margin: 50px auto;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  .services .service {
    width: min(100%, 400px);
    aspect-ratio: 1.4;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: var(--color-white);
    margin: 20px;
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.3s ease-in;
  }

  .services .service:hover {
    color: var(--color-white) !important;
    background: var(--color-secondary);
  }

  .service:hover > * {
    color: var(--color-white) !important;
    border-color: var(--color-white) !important;
  }

  .services .service > * {
    margin-bottom: 10px;
  }

  .services .service .icon {
    font-size: 3rem;
    color: var(--color-black-shaded);
    margin: 10px;
  }

  .services .service .title {
    color: var(--color-black-shaded);
    font-size: 1.4rem;
    font-weight: 700;
    letter-spacing: 3px;
  }

  .services .service .underline {
    border-width: 1px;
    width: 40px;
    margin-bottom: 20px;
  }

  .services .service .text {
    font-size: 1.3rem;
    color: var(--color-tertiary);
    margin: 0px 13px;
    text-wrap: balance;
    line-height: 26px;
  }

  @media screen and (max-width: 1000px) {
    .services {
      flex-direction: column;
    }
  }
`;

export default Wrapper;
