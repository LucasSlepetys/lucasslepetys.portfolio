import styled from 'styled-components';

const Wrapper = styled.div`
  width: min(85%, 600px);
  margin: 50px auto;

  @media screen and (max-width: 680px) {
    .title p {
      font-size: 3.2rem;
    }
  }

  .timeline .event {
    position: relative;
    text-align: left;
    font-size: 1.5rem;
    padding: 60px;

    @media screen and (max-width: 768px) {
      font-size: 1.3rem;
    }

    .number {
      position: absolute;
      text-align: center;
      top: 50%;
      border-radius: 50%;
      background: var(--color-secondary);
      height: 40px;
      aspect-ratio: 1;

      p {
        position: absolute;
        right: 50%;
        top: 50%;
        transform: translate(50%, -50%);
        font-size: 1.3rem;
        color: var(--color-black-shaded);
      }
    }

    .year {
      font-weight: 700;
      margin-bottom: 10px;
      color: var(--color-black-shaded);
    }

    .text {
      color: var(--color-tertiary);
    }

    /* adds straight border to first div */
    &:first-child {
      border-radius: 0px 0px 30px 0px !important;
    }

    /* adds straight border to last div */
    &:last-child {
      border-radius: 30px 30px 0px 0px !important;
    }

    &:nth-child(even) {
      border-left: 2px dashed var(--color-secondary);
      border-radius: 30px 0px 0px 30px;

      .number {
        left: 0;
        transform: translate(-50%, -50%);
      }
    }

    &:nth-child(odd) {
      border-right: 2px dashed var(--color-secondary);
      border-radius: 0px 30px 30px 0px;

      .number {
        right: 0;
        transform: translate(50%, -50%);
      }
    }

    &:not(:last-child):before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      border-bottom: 2px dashed var(--color-secondary);
      width: 90%;

      @media screen and (max-width: 680px) {
        width: 85%;
      }
    }
  }
`;

export default Wrapper;
