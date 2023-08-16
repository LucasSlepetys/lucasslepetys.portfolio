import styled from 'styled-components';

const Wrapper = styled.div`
  width: min(85%, 600px);
  margin: 50px auto;

  .timeline .event {
    position: relative;
    text-align: left;
    font-size: 1.5rem;
    padding: 60px;
  }

  .timeline .event .number {
    position: absolute;
    text-align: center;
    top: 50%;
    border-radius: 50%;
    background: var(--color-secondary);
    height: 40px;
    aspect-ratio: 1;
  }

  .timeline .event .number p {
    position: absolute;
    right: 50%;
    top: 50%;
    transform: translate(50%, -50%);
    font-size: 1.3rem;
    color: var(--color-black-shaded);
  }

  .timeline .event .year {
    font-weight: 700;
    margin-bottom: 10px;
    color: var(--color-black-shaded);
  }

  .timeline .event .text {
    color: var(--color-tertiary);
  }

  /* adds straight border to first div */
  .timeline .event:first-child {
    border-radius: 0px 0px 30px 0px !important;
  }

  /* adds straight border to last div */
  .timeline .event:last-child {
    border-radius: 30px 30px 0px 0px !important;
  }

  .timeline .event:nth-child(even) {
    border-left: 2px dashed var(--color-secondary);
    border-radius: 30px 0px 0px 30px;
  }

  .timeline .event:nth-child(even) .number {
    left: 0;
    transform: translate(-50%, -50%);
  }

  .timeline .event:nth-child(odd) {
    border-right: 2px dashed var(--color-secondary);
    border-radius: 0px 30px 30px 0px;
  }

  .timeline .event:nth-child(odd) .number {
    right: 0;
    transform: translate(50%, -50%);
  }

  .timeline .event:not(:last-child):before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    border-bottom: 2px dashed var(--color-secondary);
    width: 87%;
  }

  @media screen and (max-width: 680px) {
    .title p {
      font-size: 3.2rem;
    }

    .timeline .event {
      font-size: 1.3rem;
    }
  }
`;

export default Wrapper;
