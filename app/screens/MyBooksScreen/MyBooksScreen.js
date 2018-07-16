import React from 'react';
import { Text } from 'react-native';

import styles from './styles';

import { Container } from '../../components/Container';
import { CardContainer } from '../../components/CardContainer';
import { Button } from '../../components/Button';
import lang from '../../i18n';
import * as constants from '../../config/const';

const MyBooksScreen = () => (
  <Container style={styles.container}>
    <CardContainer>
      <Text style={{ marginBottom: 15, textAlign: 'center', fontSize: 18 }}>
        {lang('mybooks_txt_1')}
      </Text>

      <Button
        text={lang('add_book')}
        buttonColor={constants.BTN_GREEN}
        onPress={() => console.log('sisa sisa')}
        icon="plus"
      />
    </CardContainer>
  </Container>
);

export default MyBooksScreen;
