import styled from 'styled-components';

export const List = styled.ul`
  margin: 40px auto;
  padding: 20px;

  width: 300px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  background-color: #d3eeeeb0;
  box-shadow: -2px -2px 5px #ffffff, 3px 3px 5px rgba(0, 0, 0, 0.1);
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;

  padding: 10px;

  width: 280px;

  background-color: #bce8e8;
  box-shadow: -2px -2px 5px #ffffff, 3px 3px 5px rgba(0, 0, 0, 0.1);
`;

export const ListItemStatOnline = styled.div`
  width: 20px;
  height: 20px;

  border-radius: 50%;

  background-color: green;
`;

export const ListItemStatOffline = styled.div`
  width: 20px;
  height: 20px;

  border-radius: 50%;

  background-color: red;
`;

export const ListItemImg = styled.img`
  width: 50px;
`;

export const ListItemName = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: #448585;
  text-shadow: -2px -2px 5px #ffffff, 3px 3px 5px rgba(0, 0, 0, 0.1);
`;
