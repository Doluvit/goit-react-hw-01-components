import PropTypes from 'prop-types';
import {
  List,
  ListItem,
  ListItemImg,
  ListItemName,
  ListItemStatOffline,
  ListItemStatOnline,
} from './friendsList.styled';

export const FriendsList = ({friends}) => (
  <List>
    {friends.map(({ isOnline, avatar, name, id }) => (
      <ListItem key={id}>
        <span>{isOnline ? <ListItemStatOnline/> : <ListItemStatOffline/>}</span>
            <ListItemImg src={avatar} alt={name} />
            <ListItemName>{name}</ListItemName>
      </ListItem>
    ))}
  </List>
);

FriendsList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.number,
        isOnline: PropTypes.bool,
        avatar: PropTypes.string,
        name: PropTypes.string,
}))
}