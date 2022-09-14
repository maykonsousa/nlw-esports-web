import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 2rem;
  width: 100%;
  background: linear-gradient(
    89.86deg,
    ${({ theme }) => theme.colors['violet-300']} 23.08%,
    ${({ theme }) => theme.colors['green-300']} 33.94%,
    ${({ theme }) => theme.colors['yellow-300']} 44.57%
  );
  border-radius: 4px;

  div {
    background-color: ${({ theme }) => theme.colors['gray-800']};
    margin-top: 4px;
    padding: 1.5rem 2rem;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    div {
      padding: 0;
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      strong {
        display: block;
        color: ${({ theme }) => theme.colors.white};
      }
      span {
        display: block;
        color: ${({ theme }) => theme.colors['gray-300']};
        font-size: 0.8rem;
        font-style: italic;
      }
    }
    button {
      background: ${({ theme }) => theme.colors['violet-500']};
      color: ${({ theme }) => theme.colors.white};
      font-weight: bold;
      padding: 0.5rem;
      border-radius: 4px;
      transition: 0.2s;
      &:hover {
        background-color: ${({ theme }) => theme.colors['violet-700']};
      }
    }
  }
`;
