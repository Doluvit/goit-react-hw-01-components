import styled from 'styled-components';

export const StatisticsSection = styled.section`
  margin: 40px auto;
  padding: 20px;

  width: 300px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: var(--mainBackgroundColor);
  box-shadow: var(--mainBoxShadow);
`;

export const StatisticsSectionTitle = styled.h2`
  margin-bottom: 25px;
  font-size: 30px;
  font-weight: 700;
  color: var(--textColor);
text-transform: uppercase;
`;

export const StatisticsList = styled.ul`
  margin: 0px auto;

  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

export const StatisticsListItem = styled.li`
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

export const StatisticsListItemLabel = styled.span`
  margin-bottom: 10px;

  font-weight: 500;
  color: var(--textColor);
  `;

export const StatisticsListItemPercentage = styled.span`
  font-weight: 700;
  color: var(--secondaryTextColor);
 `;
