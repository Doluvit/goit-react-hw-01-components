import PropTypes from 'prop-types';
import { FriendsListItem } from 'components/friendsListItem/friendsListItem';
import { List } from './friendsList.styled';

export const FriendsList = ({ friends }) => (
  <List>
    {friends.map(({ isOnline, avatar, name, id }) => {
      return (
        <FriendsListItem
          key={id}
          isOnline={isOnline}
          avatar={avatar}
          name={name}
        />
      );
    })}
  </List>
);

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      isOnline: PropTypes.bool,
      avatar: PropTypes.string,
      name: PropTypes.string,
    })
  ),
};
