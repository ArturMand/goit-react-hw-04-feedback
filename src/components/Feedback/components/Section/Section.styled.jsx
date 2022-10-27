import styled from '@emotion/styled';
export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  margin-bottom: 20px;
  &:not(:last-child) {
    padding-top: 80px;
  }
`;
export const Title = styled.h2`
  margin: 0;
  margin-bottom: 30px;
  padding: 0;
  font-size: 36px;
`;
