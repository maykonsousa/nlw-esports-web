import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 8px;
  overflow: hidden;
  a {
    display: block;
    text-decoration: none;
    position: relative;
    div {
      position: absolute;
      bottom: 0;
      width: 100%;
      padding: 4px;
      height: 7.5rem;
      background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0.9) 67.08%
      );
      overflow: hidden;

      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      strong {
        font-weight: bold;
        color: ${({ theme }) => theme.colors.white};
        display: block;
      }
      span {
        display: block;
        color: ${({ theme }) => theme.colors['gray-300']};
      }
    }
  }
`;
