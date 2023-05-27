import styled from 'styled-components';

export const StatisticsSection = styled.section`
  margin: 40px auto;
  padding: 20px;

  width: 300px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #d3eeeeb0;
  box-shadow: -2px -2px 5px #ffffff, 3px 3px 5px rgba(0, 0, 0, 0.1);
`;

export const StatisticsSectionTitle = styled.h2`
  margin-bottom: 25px;
  font-size: 30px;
  font-weight: 700;
  color: #448585;
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

  background-color: #bce8e8;
  box-shadow: -2px -2px 5px #ffffff, 3px 3px 5px rgba(0, 0, 0, 0.1);
`;

export const StatisticsListItemLabel = styled.span`
  margin-bottom: 10px;

  font-weight: 500;
  color: #448585;
  text-shadow: -2px -2px 5px #ffffff, 3px 3px 5px rgba(0, 0, 0, 0.1);
`;

export const StatisticsListItemPercentage = styled.span`
  font-weight: 700;
  color: black;
  text-shadow: -2px -2px 5px #ffffff, 3px 3px 5px rgba(0, 0, 0, 0.1);
`;
