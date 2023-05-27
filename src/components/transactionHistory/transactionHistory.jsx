import PropTypes from 'prop-types';
import {
  Table,
  TableHead,
  TableHeadRow,
  TableHeadCell,
  TableBody,
  TableBodyRow,
  TableBodyCell,
} from './transactionHistory.styled';

export const TransactionHistory = ({ items }) => (
  <Table>
    <TableHead>
      <TableHeadRow>
        <TableHeadCell>Type</TableHeadCell>
        <TableHeadCell>Amount</TableHeadCell>
        <TableHeadCell>Currency</TableHeadCell>
      </TableHeadRow>
    </TableHead>
    <TableBody>
      {items.map(({ id, type, amount, currency }) => (
        <TableBodyRow key={id}>
          <TableBodyCell>{type}</TableBodyCell>
          <TableBodyCell>{amount}</TableBodyCell>
          <TableBodyCell>{currency}</TableBodyCell>
        </TableBodyRow>
      ))}
    </TableBody>
  </Table>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};