import styled from 'styled-components';

export const Table = styled.table`
  margin: 0 auto;
  padding: 20px;

  width: 340px;

  background-color: var(--mainBackgroundColor);
  box-shadow: var(--mainBoxShadow);
`;

export const TableHead = styled.thead`
  margin-bottom: 20px;

  width: 100%;
  display: block;

  background-color: var(--itemBackgroundColor);
  box-shadow: var(--mainBoxShadow);
`;

export const TableHeadRow = styled.tr`
  padding: 15px 10px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TableHeadCell = styled.th`
  font-weight: 700;
  font-size: 18px;
  color: var(--textColor);
  text-shadow: var(--mainBoxShadow);
  text-align: center;
`;

export const TableBody = styled.tbody`
  width: 100%;
  display: block;
`;

export const TableBodyRow = styled.tr`
  margin-bottom: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

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

export const TableBodyCell = styled.td`
  padding: 10px 10px;
  flex-basis: 33.333%;

  font-weight: 500;
  color: var(--secondaryTextColor);

  text-align: left;
  font-size: 14px;
  text-shadow: var(--mainBoxShadow);
`;
