import styled from 'styled-components';

export const ProfileCard = styled.div`
  margin: 40px auto;
  padding: 20px;

  width: 300px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #d3eeeeb0;
  box-shadow: -2px -2px 5px #ffffff, 3px 3px 5px rgba(0, 0, 0, 0.1);
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
  box-shadow: inset -2px -2px 5px #ffffff, inset 3px 3px 5px rgba(0, 0, 0, 0.1);
  `;

export const ProfileUserName = styled.p`
  margin-bottom: 10px;
  font-size: 30px;
  font-weight: 700;
  color: #448585;
`;

export const ProfileTag = styled.p`
  margin-bottom: 10px;
  font-weight: 500;
  color: #448585;
`;

export const ProfileLocation = styled.p`
  font-weight: 500;
  color: #448585;
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

  background-color: #bce8e8;
  box-shadow: -2px -2px 5px #ffffff, 3px 3px 5px rgba(0, 0, 0, 0.1);
`;

export const ProfileStatsLable = styled.span`
  margin-bottom: 10px;

  font-weight: 500;
  color: #448585;
  text-shadow: -2px -2px 5px #ffffff, 3px 3px 5px rgba(0, 0, 0, 0.1);
`;

export const ProfileStatsQuantity = styled.span`
  font-weight: 700;
  color: black;
  text-shadow: -2px -2px 5px #ffffff, 3px 3px 5px rgba(0, 0, 0, 0.1);
`;
