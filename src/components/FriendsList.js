import React from 'react';
import Friends from './Friends';
import PropTypes from 'prop-types';
import styles from './Friends.module.css';

const FriendList = ({ friends }) => (
  <ul>
    {friends.map(({ id, avatar, isOnline, name }) => (
      <li className={styles.item} key={id}>
        <Friends isOnline={isOnline} avatar={avatar} name={name} />
      </li>
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default FriendList;
