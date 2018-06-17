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
import { StyleSheet, ImageBackground } from 'react-native';
import NavigationBar from 'react-native-navbar';
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
  topNotificationView: {
    backgroundColor: '#BC1F3D',
    width: '100%',
    padding: 12,
    paddingTop: 30,
    paddingBottom: 10
  },
  topNotificationText: {
    fontSize: 18,
    color: '#FFF',
  },
  topNotificationTextSmall: {
    fontSize: 14,
    color: '#FFF',
  },
  subViewContainer: {
    marginTop: 10,
    flex: 1,
    flexDirection: 'row',
  },
  subViewLeft: {
    width: '49%',
    height: 85,
    backgroundColor: '#333',
    marginRight: '2%'
  },
  subViewRight: {
    width: '49%',
    height: 85,
    backgroundColor: '#333',
  },
  subViewText: {
    fontSize: 18,
    color: '#FFF',
    paddingLeft: 9,
    paddingTop: 34
  },
  subViewTextSmall: {
    fontSize: 14,
    paddingLeft: 9,
    color: '#FFF',
  },
  showVideoView: {
    backgroundColor: '#333',
    height: 178,
    marginTop: 10
  },
  subVideoViewText: {
    fontSize: 18,
    color: '#FFF',
    paddingLeft: 9,
    paddingTop: 125
  },
  imageBackground: {
    width: '100%',
    height: '100%',
  }
});
class HomeScreen extends Component {
  state = {
    activePage: 'actions'
  };
  render() {
    const locale = 'en';
    const { user } = this.props;
    const { activePage } = this.state;
    let notification = {
      "title": "TOP Notification for User", 
      "content": "Subtitle of notification"
    };
    return (
      <Container>
        <Header style={styles.header}>
          <Left style={{ flex: 1 }}/>
          <Body style={{ flex: 3 }}>
            <Title style={styles.headerTitle}>{translate('Actions', locale)}</Title>
          </Body>
          <Right style={{ flex: 1 }}>
            <Button transparent onPress={this.props.logout}>
              <Icon name="more" />
            </Button>
          </Right>
        </Header>
        <Content>
          <View style={{padding: 6}}>
            {
            notification.title && (
                <View style={styles.topNotificationView}>
                  <Text style={styles.topNotificationText} >
                    { translate(notification.title, locale) }
                  </Text>
                  <Text style={styles.topNotificationTextSmall} >
                    { translate(notification.content, locale) }
                  </Text>
                </View>
              )
            }
            <View style={styles.subViewContainer}>
              <View style={styles.subViewLeft} >
                <ImageBackground 
                style={styles.imageBackground} 
                source={require('../images/subViewBackground.jpg')} >
                  <Text style={styles.subViewText}>
                    {translate('RUMs', locale)}
                  </Text>
                </ImageBackground>
              </View>
              <View style={styles.subViewRight} >
                <ImageBackground 
                style={styles.imageBackground} 
                source={require('../images/subViewBackground.jpg')} >
                  <Text style={styles.subViewText}>
                    {translate('Notifications', locale)}
                  </Text>
                </ImageBackground>
              </View>
            </View>
            <View style={styles.subViewContainer}>
              <View style={styles.subViewLeft} >
                <ImageBackground 
                style={styles.imageBackground} 
                source={require('../images/subViewBackground.jpg')} >
                  <Text style={styles.subViewText}>
                    {translate('Tasks', locale)}
                  </Text>
                  <Text style={styles.subViewTextSmall}>
                    {translate('Set Milestones', locale)}
                  </Text>
                </ImageBackground>
              </View>
              <View style={styles.subViewRight} >
                <ImageBackground 
                style={styles.imageBackground} 
                source={require('../images/subViewBackground.jpg')} >
                  <Text style={styles.subViewText}>
                    {translate('Learn', locale)}
                  </Text>
                  <Text style={styles.subViewTextSmall}>
                    {translate('Library', locale)}
                  </Text>
                </ImageBackground>
              </View>
            </View>
            <View style={styles.showVideoView}>
              <ImageBackground 
                style={styles.imageBackground} 
                source={require('../images/videoViewBackground.jpg')} >
                <Text style={styles.subVideoViewText}>
                  {translate('Watch Video', locale)}
                </Text>
                <Text style={styles.subViewTextSmall}>
                  {translate('Soft Skills the Five Things Employers Really Want', locale)}
                </Text>
              </ImageBackground>
            </View>
            <View style={styles.subViewContainer}>
              <View style={styles.subViewLeft} >
                <ImageBackground 
                style={styles.imageBackground} 
                source={require('../images/subViewBackground.jpg')} >
                  <Text style={styles.subViewText}>
                    {translate('Mentor', locale)}
                  </Text>
                  <Text style={styles.subViewTextSmall}>
                    {translate('Contact', locale)}
                  </Text>
                </ImageBackground>
              </View>
              <View style={styles.subViewRight} >
                <ImageBackground 
                style={styles.imageBackground} 
                source={require('../images/subViewBackground.jpg')} >
                  <Text style={styles.subViewText}>
                    {translate('Open Jobs', locale)}
                  </Text>
                  <Text style={styles.subViewTextSmall}>
                    {translate('Subtitle', locale)}
                  </Text>
                </ImageBackground>
              </View>
            </View>
            <View style={styles.subViewContainer}>
              <View style={styles.subViewLeft} >
                <ImageBackground 
                style={styles.imageBackground} 
                source={require('../images/subViewBackground.jpg')} >
                  <Text style={styles.subViewText}>
                    {translate('Title', locale)}
                  </Text>
                  <Text style={styles.subViewTextSmall}>
                    {translate('Subtitle', locale)}
                  </Text>
                </ImageBackground>
              </View>
              <View style={styles.subViewRight} >
                <ImageBackground 
                style={styles.imageBackground} 
                source={require('../images/subViewBackground.jpg')} >
                  <Text style={styles.subViewText}>
                    {translate('Title', locale)}
                  </Text>
                  <Text style={styles.subViewTextSmall}>
                    {translate('Subtitle', locale)}
                  </Text>
                </ImageBackground>
              </View>
            </View>
          </View>
        </Content>
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

export default connect(mapStateToProps, actions)(HomeScreen);