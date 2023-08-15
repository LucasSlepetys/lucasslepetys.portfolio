import styled from 'styled-components';

const Wrapper = styled.div`
  min-height: 80vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: start;
  background-color: var(--bg-color);

  .center {
    width: min(80%, 1000px);
    margin: 100px 0 50px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .center .about-me {
    width: min(100%, 680px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 50px;
  }

  .center .about-me p {
    font-size: 5rem;
    font-weight: 700;
    color: var(--color-black);
  }

  .center .about-me span {
    font-weight: 100;
    font-style: italic;
    cursor: pointer;
  }

  .center .about-me .isSelected {
    color: var(--color-secondary);
    font-weight: 700;
    font-style: normal;
    text-transform: uppercase;
  }

  .center .about-me .underline {
    border: 2px solid var(--color-secondary);
    width: 80px;
  }

  .center .text {
    text-wrap: wrap;
    top: 25%;
    font-size: 1.4rem;
    color: var(--color-tertiary);
    width: min(100%, 1200px);
    line-height: 2.3rem;
  }

  @media screen and (max-width: 600px) {
    .center {
      margin-top: 30%;
    }

    .center .about-me {
      align-items: start;
    }

    .center .about-me p {
      font-size: 3rem;
      text-wrap: wrap;
    }

    .center .text {
      font-size: 1.2rem;
    }

    .center {
      width: min(92%, 1000px);
    }
  }
`;

export default Wrapper;
