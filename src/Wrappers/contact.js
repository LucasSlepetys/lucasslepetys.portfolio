import styled from 'styled-components';

const Contact_CSS = styled.div`
  position: relative;
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .title-container {
    position: absolute;
    top: 12vh;
    left: 50%;
    transform: translate(-50%, 0);
    .title {
      width: fit-content;
      --font-size: 6rem;
    }
  }

  .info {
    font-size: 1.4rem;

    p {
      margin: 20px;

      a {
        color: var(--color-secondary);
        font-weight: 700;
        cursor: pointer;
        text-decoration: none;
      }
    }
  }
`;

export default Contact_CSS;
