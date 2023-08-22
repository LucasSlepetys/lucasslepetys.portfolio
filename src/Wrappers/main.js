import styled from 'styled-components';

const Wrapper = styled.main`
  height: 100vh;
  width: 100%;
  /* 100% of viewport height */
  scroll-snap-align: start;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--bg-color);

  .center-div {
    display: flex;

    margin: 0 auto;
    width: min(80%, 1000px);

    height: 60%;
    align-items: center;
    justify-content: space-between;
  }

  .center-div .main-title {
    min-width: 40%;
    margin: auto min(5px, 30px);

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  .center-div .main-title .upperline {
    width: 90px;
    border: 2px solid var(--color-secondary);
  }

  .center-div .main-title .name {
    color: var(--color-black);
    font-size: 5rem;
    font-weight: 700;
  }

  .center-div .main-title .description {
    font-size: 1.4rem;
    color: var(--color-tertiary);
  }

  .center-div .main-title .btn {
    font-size: 1.3rem;
    text-transform: uppercase;
    border-radius: 10px;
    background: var(--color-secondary);
    color: var(--color-black);
    border: none;
    padding: 10px 15px;
    width: fit-content;
    margin: 30px 0;
  }

  .center-div .main-title .social-links {
    margin-top: 20px;
    width: 60%;
  }

  .center-div .img-border {
    --radius: 15px;
    position: relative;
    margin: auto 20px;

    /* width: fit-content; */
    max-height: 100%;
    aspect-ratio: 0.679;

    //for bigger screens:
    max-width: 400px;

    //for smaller height screens:
    min-height: 400px;
  }

  .center-div .img-border .border {
    position: absolute;
    left: 30px;
    top: 30px;
    border: 4px solid var(--color-secondary);
    height: 100%;
    width: 100%;
    border-radius: var(--radius);
  }

  .center-div .img-border img {
    max-height: 100%;
    height: auto;
    max-width: 100%;

    border-radius: var(--radius);
    filter: brightness(120%);
    box-shadow: 0px 5px 80px 0px;
  }

  @media screen and (max-width: 680px) {
    :root {
      font-size: 0.6rem;
    }

    .center-div .img-border {
      display: none;
    }
  }

  @media screen and (max-width: 500px) {
    .center-div {
      width: 95%;
    }
  }
`;

export default Wrapper;
