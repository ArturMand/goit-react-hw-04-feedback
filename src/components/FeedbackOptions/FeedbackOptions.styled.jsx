import styled from '@emotion/styled';
export const List = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const ListItem = styled.li`
  & + & {
    margin-left: 8px;
  }
`;
export const Button = styled.button`
  margin: 0;
  padding: 4px 8px;
  background-color: #fff;
  border: 1px solid grey;
  border-radius: 8px;
  text-transform: capitalize;
  cursor: pointer;
`;
