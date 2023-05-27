import PropTypes from 'prop-types';
import {
  StatisticsSection,
  StatisticsSectionTitle,
  StatisticsList,
  StatisticsListItem,
  StatisticsListItemLabel,
  StatisticsListItemPercentage,
} from './statistics.styled';

export const Statistics = ({ title, stats }) => (
  <StatisticsSection>
    {title && <StatisticsSectionTitle>{title}</StatisticsSectionTitle>}
    
    <StatisticsList>
      {stats.map(({label, percentage, id}) => (
        <StatisticsListItem key={id}>
          <StatisticsListItemLabel>{label}</StatisticsListItemLabel>
          <StatisticsListItemPercentage>{percentage}%</StatisticsListItemPercentage>
        </StatisticsListItem>
      ))}
    </StatisticsList>
  </StatisticsSection>
);


Statistics.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.string,
  id: PropTypes.number,
};
