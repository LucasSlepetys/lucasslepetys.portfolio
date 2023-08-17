import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  min-height: 80vh;
  display: flex;
  flex-direction: column;

  .title-container {
    position: relative;
    background-color: var(--color-quaternary);

    height: 40vh;
  }

  .title-container .title {
    --font-size: 6rem;
    --width: 100px;
    --border-width: 3px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .projects-center {
    width: min(100%, 1200px);
    margin: 0 auto;
  }

  .projects-center .projects {
    min-width: fit-content;
    block-size: fit-content;

    --margin-gap: 3rem;
    margin: var(--margin-gap);
    display: flex;
    gap: var(--margin-gap);
    flex-wrap: wrap;
    justify-content: center;
  }

  .projects .project {
    --border-radius: 20px;
    width: min(100%, 350px);
    aspect-ratio: 0.8;

    display: grid;
    grid-template-rows: 1fr 1fr;
    border-radius: var(--border-radius);
    background: var(--color-quaternary);
  }

  .projects .project .img-container {
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: var(--border-radius) var(--border-radius) 0 0;
  }

  .projects .project .img-container img {
    width: 100%;
    transform: translate(0, -35%);
  }

  .projects .project .info-container {
    position: relative;

    border-radius: 0 0 var(--border-radius) var(--border-radius);
    width: 90%;
    margin: 0 auto;
    font-size: 1.1rem;
  }

  .projects .project .info-container .icon-container {
    position: absolute;
    left: 50%;
    top: 0;
    transform: translate(-50%, -50%);
    padding: 10px;

    background: var(--color-secondary);

    border: 7px solid var(--color-quaternary);
    border-radius: 50%;
  }

  .projects .project .info-container .icon-container .icon {
    font-size: 2rem;
  }

  .projects .project .info-container .name {
    font-weight: 700;
    letter-spacing: 3px;
    margin-top: 24px;
  }

  .projects .project .info-container .text {
    line-height: 20px;
  }

  .projects .project .info-container > * {
    margin: 8px;
  }

  .projects .project .info-container .source {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    font-size: 1.1rem;
    color: var(--color-secondary);
    transition: 0.1s all ease-out;
  }

  .projects .project .info-container .source:hover {
    color: var(--color-primary);
  }

  @media screen and (max-width: 788px) {
    .projects-center .projects {
      justify-content: center;
      margin: 50px 0;
    }

    .projects-center .projects .project {
      width: 90%;
      aspect-ratio: 1.5;
      grid-template-rows: 3fr 1fr;
    }

    .projects-center .projects .project > * {
      font-size: 1.5rem;
    }

    @media screen and (max-width: 580px) {
      .title-container {
        background-color: var(--color-white);
      }

      .title-container .title {
        --font-size: 4rem;
        transform: translate(-50%, 0%);
      }

      .projects-center .projects {
        margin: 5px;
      }

      .projects-center .projects .project {
        width: 90%;
        aspect-ratio: 0.7;
        grid-template-rows: 3fr 1fr;
      }

      .projects-center .projects .project .info-container {
        font-size: 1.3rem;
        padding: 5%;
      }
    }
  }
`;

export default Wrapper;
