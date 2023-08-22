import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  .title-container {
    position: relative;
    background-color: var(--color-quaternary);
    height: 40vh;

    .title {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);

      --font-size: 5.5rem;
      --width: 100px;
      --border-width: 3px;
    }
  }

  .projects-center {
    width: min(80%, 1200px);
    margin: 50px auto;

    .projects {
      display: flex;
      flex-wrap: wrap;
      justify-content: left;
      gap: 30px;

      @media screen and (max-width: 680px) {
        justify-content: center;
      }

      .project {
        display: grid;
        grid-template-rows: 1fr 1fr;

        --border-radius: 20px;

        width: min(100%, 350px);
        aspect-ratio: 0.8;

        border-radius: var(--border-radius);
        background: var(--color-quaternary);

        @media screen and (max-width: 680px) {
          width: 100%;
          height: 400px;
          grid-template-rows: 1fr 1fr;
          aspect-ratio: none;
          padding: 10px;
        }

        .img-container {
          overflow: hidden;

          display: flex;
          justify-content: center;
          align-items: center;

          border-radius: var(--border-radius) var(--border-radius) 0 0;

          img {
            background: #aad3a1;
          }
        }

        .info-container {
          position: relative;

          border-radius: 0 0 var(--border-radius) var(--border-radius);

          --margin-sides: 1rem;

          .name {
            text-decoration: none;
            display: inline-block;

            color: var(--color-black);

            max-width: 85%;

            margin: 40px var(--margin-sides) 0 var(--margin-sides);

            font-size: 1.4rem;
            font-weight: 700;
            letter-spacing: 3px;

            @media screen and (max-width: 680px) {
              font-size: 1.2rem;
            }
          }

          .text {
            font-size: 1.1rem;
            line-height: 20px;
            margin: 10px var(--margin-sides);

            @media screen and (max-width: 680px) {
              font-size: 1.1rem;
            }
          }

          .source {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 20px var(--margin-sides) 0 var(--margin-sides);
            font-size: 1.3rem;
            color: var(--color-secondary);
            transition: 0.1s all ease-out;

            &:hover {
              color: var(--color-primary) !important;
            }

            a {
              text-decoration: none;
              display: inline-block;
              color: var(--color-secondary);

              &:hover {
                color: var(--color-primary) !important;
              }
            }
          }

          .icon-container {
            position: absolute;
            left: 50%;
            top: 0;
            transform: translate(-50%, -50%);

            padding: 12px;

            background: var(--color-secondary);

            border: 7px solid var(--color-quaternary);
            border-radius: 50%;

            .icon {
              font-size: 2.3rem;
            }
          }
        }
      }
    }
  }
`;

export default Wrapper;
