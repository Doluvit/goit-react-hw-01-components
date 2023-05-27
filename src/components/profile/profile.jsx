import PropTypes from 'prop-types';
import {
  ProfileCard,
  ProfileDescription,
  ProfileImg,
  ProfileUserName,
  ProfileTag,
  ProfileLocation,
  ProfileStats,
  ProfileStatsItem,
  ProfileStatsLable,
  ProfileStatsQuantity,
} from './profile.styled'; 


export const Profile = ({ username, avatar, tag, location, stats }) => (
  <ProfileCard>
    <ProfileDescription>
      <ProfileImg src={avatar} alt={username}/>
      <ProfileUserName>{username}</ProfileUserName>
      <ProfileTag>@{tag}</ProfileTag>
      <ProfileLocation>{location}</ProfileLocation>
    </ProfileDescription>

    <ProfileStats>
      <ProfileStatsItem>
        <ProfileStatsLable>Followers</ProfileStatsLable>
        <ProfileStatsQuantity>{stats.followers}</ProfileStatsQuantity>
      </ProfileStatsItem>
      <ProfileStatsItem>
        <ProfileStatsLable>Views</ProfileStatsLable>
        <ProfileStatsQuantity>{stats.views}</ProfileStatsQuantity>
      </ProfileStatsItem>
      <ProfileStatsItem>
        <ProfileStatsLable>Likes</ProfileStatsLable>
        <ProfileStatsQuantity>{stats.likes}</ProfileStatsQuantity>
      </ProfileStatsItem>
    </ProfileStats>
  </ProfileCard>
);

Profile.propTypes = {
  username: PropTypes.string,
  avatar: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number),
};
