import styled from 'styled-components';

export const Table = styled.table`
  margin: 0 auto;
  padding: 20px;

  width: 340px;

  background-color: #d3eeeeb0;
  box-shadow: -2px -2px 5px #ffffff, 3px 3px 5px rgba(0, 0, 0, 0.1);
`;

export const TableHead = styled.thead`
  margin-bottom: 20px;

  width: 100%;
  display: block;

  background-color: #bce8e8;
  box-shadow: -2px -2px 5px #ffffff, 3px 3px 5px rgba(0, 0, 0, 0.1);
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
  color: #448585;
  text-shadow: -2px -2px 5px #ffffff, 3px 3px 5px rgba(0, 0, 0, 0.1);
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

  box-shadow: -2px -2px 5px #ffffff, 3px 3px 5px rgba(0, 0, 0, 0.1);
`;

export const TableBodyCell = styled.td`
  padding: 10px 10px;
  flex-basis: 33.333%;

  font-weight: 500;
  color: black;

  text-align: left;
  font-size: 14px;
  text-shadow: -2px -2px 5px #ffffff, 3px 3px 5px rgba(0, 0, 0, 0.1);
`;
