import { Profile } from './profile/profile';
import { Statistics } from './statistics/statistics';
import { FriendsList } from './friendsList/friendsList';
import {TransactionHistory} from './transactionHistory/transactionHistory';

import user from '../components/resources/user.json';
import data from '../components/resources/data.json';
import friends from '../components/resources/friends.json';
import transactions from '../components/resources/transactions.json';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
