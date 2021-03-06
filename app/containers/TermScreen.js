import React from 'react';
import PropTypes from 'prop-types';
import { Container, Content, Text, Form, Item, Label, Input, Button, Body } from 'native-base';
import { Actions } from 'react-native-router-flux';
import Loading from './Loading';
import Messages from '../components/Messages';
import Header from '../components/Header';
import Spacer from '../components/Spacer';

class TermScreen extends React.Component {

  static defaultProps = {
    error: null,
    member: {},
  }

  render() {
    const { loading, error } = this.props;

    // Loading
    // if (loading) return <Loading />;

    return (
      <Container>
        <Content padder>
          <Header
            title="Terms and Service"
            content="Term Content"
          />
        </Content>
      </Container>
    );
  }
}

export default TermScreen;
