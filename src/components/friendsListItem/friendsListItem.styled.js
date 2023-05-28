import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;

  padding: 10px;

  width: 280px;

  background-color: var(--itemBackgroundColor);
  box-shadow: var(--mainBoxShadow);

  cursor: pointer;

  transition-property: transform, box-shadow;
  transition-duration: var(--transitionDuration);
  transition-timing-function: var(--cubic);

  &:hover {
    transform: scale(1.02);
    box-shadow: var(--transformShadow);
  }
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
  color: var(--textColor);
  text-shadow: var(--mainBoxShadow);
`;
