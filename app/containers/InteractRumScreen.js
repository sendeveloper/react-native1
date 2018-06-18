import React, {Component} from 'react';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Content,
  Button,
  Text,
  Item,
  Input,
  H1,
  Title,
  Icon,
  View,
  Badge,
  Thumbnail
} from 'native-base';
import { connect } from 'react-redux';
import { StyleSheet, ImageBackground, Alert } from 'react-native';
import Toast, {DURATION} from 'react-native-easy-toast'
import NavigationBar from 'react-native-navbar';
import { NavigationActions } from 'react-navigation';
import { increment, decrement } from '../actions/counterActions';
import { Actions } from 'react-native-router-flux';
import { translate } from '../i18n';
import { logout } from '../actions/loginActions';
import CustomFooter from '../components/CustomFooter';

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#053C5C',
  },
  headerTitle: {
    color: '#FFF',
    fontSize: 18,
    alignSelf: "center",
  },
  backText: {
    top: -1,
    fontSize: 17,
    color: '#F9F9F9',
  },
  rumPhotoArea: {
    width: '100%',
    height: 205,
  },
  rumBackground: {
    width: '100%',
    height: '100%',
  },
  rumPhoto: {
    width: 80,
    height: 80,
    marginTop: 11,
    alignSelf: 'center',
  },
  rumInfoName: {
    color: '#053C5C',
    fontSize: 17,
    alignSelf: 'center',
  },
  rumInfoDate: {
    color: '#A1A1A1',
    fontSize: 11,
    alignSelf: 'center',
  },
  rumInfoContact: {
    color: '#053C5C',
    fontSize: 11,
    alignSelf: 'center',
  },
});
class InteractRumScreen extends Component {
  state = {
    activePage: 'interact',
  };
  constructor(props) {
    super(props);
  }
  goBack = () => {
    this.props.navigation.dispatch(NavigationActions.back());
  }
  renderView = (locale) => {
    return (
      <View>
        <View style={styles.rumPhotoArea}>
          <ImageBackground 
            style={styles.rumBackground} 
            source={require('../images/rum_profile_background.png')} >
            <Thumbnail
              square
              style={styles.rumPhoto} 
              source={require('../images/rum_profile_photo.png')} />
            <View style={styles.rumInfo} >
              <Text style={styles.rumInfoName}>
                First Last
              </Text>
              <Text style={styles.rumInfoDate}>
                Member since 06/06/2018
              </Text>
              <Text style={styles.rumInfoContact}>
                Contact Info
              </Text>
            </View>
          </ImageBackground>
        </View>
      </View>
    )
  }
  render() {
    const locale = 'en';
    const { user } = this.props;
    const { activePage } = this.state;
    return (
      <Container>
        <Header style={styles.header}>
          <Left style={{ flex: 2 }}>
            <Button transparent onPress={this.goBack}>
              <Icon name="arrow-back" />
              <Text style={styles.backText}>Interact</Text>
            </Button>
          </Left>
          <Body style={{ flex: 3 }}>
            <Title style={styles.headerTitle}>{translate('RUM', locale)}</Title>
          </Body>
          <Right style={{ flex: 2 }}>
            <Button transparent onPress={this.props.logout}>
              <Icon name="more" />
            </Button>
          </Right>
        </Header>
        <Content>
          { this.renderView(locale) }
        </Content>
        <Toast ref="toast"/>
        <CustomFooter active={activePage} locale={locale}/>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  const { counter, user } = state;

  return {
    counter,
    user,
  }
}

const actions = {
  increment,
  decrement,
  logout
}

export default connect(mapStateToProps, actions)(InteractRumScreen);