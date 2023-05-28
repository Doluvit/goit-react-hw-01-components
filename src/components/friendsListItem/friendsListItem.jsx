import PropTypes from 'prop-types';
import {
  ListItem,
  ListItemImg,
  ListItemName,
  ListItemStatOffline,
  ListItemStatOnline,
} from './friendsListItem.styled';

export const FriendsListItem = ({ id, isOnline, avatar, name }) => {
  return (
    <ListItem key={id}>
      <span>{isOnline ? <ListItemStatOnline /> : <ListItemStatOffline />}</span>
      <ListItemImg src={avatar} alt={name} />
      <ListItemName>{name}</ListItemName>
    </ListItem>
  );
};

FriendsListItem.propTypes = {
  id: PropTypes.number,
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
};
