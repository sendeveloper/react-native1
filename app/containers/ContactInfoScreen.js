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
  Thumbnail,
  Tab,
  Tabs,
  Grid,
  Row,
  Col,
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
    marginTop: 10,
    lineHeight: 19,
  },
  rumInfoDate: {
    color: '#A1A1A1',
    fontSize: 11,
    alignSelf: 'center',
  },
  rumInfoContact: {
    alignSelf: 'center',
    height: 20,
    paddingTop: 0,
    paddingBottom: 0,
  },
  rumInfoContactText: {
    color: '#053C5C',
    fontSize: 11,
  },
  contactButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'flex-start',
    width: 192,
    alignSelf: 'center',
    marginTop: 14,
  },
  contactButtonEach: {
    width: 30,
    height: 30,
    marginLeft: 17,
    marginRight: 17,
    flex: 1
  },
  contactButtonImage: {
    width: 30,
    height: 30,
  },
});
class ContactInfoScreen extends Component {
  state = {
    activePage: 'interact',
  };
  constructor(props) {
    super(props);
  }
  goBack = () => {
    this.props.navigation.dispatch(NavigationActions.back());
  }
  contactChat = () => {
    console.log('chat');
  }
  contactInfo = () => {
    Actions.push('contact');
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
              <Button 
                transparent 
                style={styles.rumInfoContact}
                onPress={() => this.contactInfo()}>
                <Text style={styles.rumInfoContactText}>
                  { translate('Contact Info', locale) }
                </Text>
              </Button>
            </View>
            <View style={styles.contactButtons}>
              <Button
                transparent
                style={styles.contactButtonEach}
                onPress={this.contactChat}
                >
                <Thumbnail
                  square
                  style={styles.contactButtonImage} 
                  source={require('../images/rum_profile_chat.png')} />
              </Button>
              <Button
                transparent
                style={styles.contactButtonEach}
                onPress={this.contactChat}
                >
                <Thumbnail
                  square
                  style={styles.contactButtonImage} 
                  source={require('../images/rum_profile_call.png')} />
              </Button>
              <Button
                transparent
                style={styles.contactButtonEach}
                onPress={this.contactChat}
                >
                <Thumbnail
                  square
                  style={styles.contactButtonImage} 
                  source={require('../images/rum_profile_mail.png')} />
              </Button>
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
        <Content style={{ backgroundColor: '#FFF' }}>
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

export default connect(mapStateToProps, actions)(ContactInfoScreen);