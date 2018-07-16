import React from 'react';
import { PropTypes } from 'prop-types';
import { View, StatusBar as StatusBarRN, Platform } from 'react-native';

// import styles from './styles';

const StatusBar = (props) => {
  const height = Platform.OS === 'ios' ? 20 : 0;
  const { backgroundColor } = props;

  return (
    <View style={{ height, backgroundColor }}>
      <StatusBarRN {...props} />
    </View>
  );
};

StatusBar.propTypes = {
  backgroundColor: PropTypes.any,
};

export default StatusBar;
