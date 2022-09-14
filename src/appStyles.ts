import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1344px;
  margin: 6rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 4rem;
    font-weight: 900;
    margin-top: 6rem;
    span {
      background: linear-gradient(
        89.86deg,
        #9572fc 23.08%,
        #43e7ad 33.94%,
        #e1d55d 44.57%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  }
`;
