import React, { Component } from 'react';
import { Text } from 'react-native';
import ActionButton from 'react-native-action-button';
import EStyleSheet from 'react-native-extended-stylesheet';

import styles from './styles';

import { Container } from '../../components/Container';
import { CardContainer } from '../../components/CardContainer';
import { Button } from '../../components/Button';
import { BookList } from '../../components/BookList';
import lang from '../../i18n';
import * as constants from '../../config/const';

class MyBooksScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
    };
  }

  render() {
    return (
      <Container style={styles.container}>
        {this.state.show ? (
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
        ) : (
          <React.Fragment>
            <BookList />
            <ActionButton
              buttonColor={EStyleSheet.value('$yellow')}
              onPress={() => {
                console.log('hi');
              }}
            />
          </React.Fragment>
        )}
      </Container>
    );
  }
}

export default MyBooksScreen;
