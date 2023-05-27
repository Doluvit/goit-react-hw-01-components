import styled from 'styled-components';

export const ProfileCard = styled.div`
  margin: 40px auto;
  padding: 20px;

  width: 300px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: var(--mainBackgroundColor);
  box-shadow: var(--mainBoxShadow);
`;

export const ProfileDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 30px;
`;

export const ProfileImg = styled.img`
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 15px;
  width: 150px;

  border-radius: 50%;
  box-shadow: var(--insetBoxShadow);
`;

export const ProfileUserName = styled.p`
  margin-bottom: 10px;
  font-size: 30px;
  font-weight: 700;
  color: var(--textColor);
`;

export const ProfileTag = styled.p`
  margin-bottom: 10px;
  font-weight: 500;
  color: var(--textColor);
`;

export const ProfileLocation = styled.p`
  font-weight: 500;
  color: var(--textColor);
`;

export const ProfileStats = styled.ul`
  margin: 0px auto;
 
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

export const ProfileStatsItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding: 5px;

  width: 100%;

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

export const ProfileStatsLable = styled.span`
  margin-bottom: 10px;

  font-weight: 500;
  color: var(--textColor);
  text-shadow: var(--mainBoxShadow);
`;

export const ProfileStatsQuantity = styled.span`
  font-weight: 700;
  color: var(--secondaryTextColor);
  text-shadow: var(--mainBoxShadow);
`;
