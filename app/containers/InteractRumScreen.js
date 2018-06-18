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
  Row
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
    color: '#053C5C',
    fontSize: 11,
    alignSelf: 'center',
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
  rumTabArea: {

  },
  profileRow: {
    justifyContent: 'center', 
    alignItems: 'center',
  },
  profileStatus: {
    color: '#053C5C',
    fontSize: 16,
    alignSelf: 'center',
    paddingTop: 39,
    paddingBottom: 27,
    maxWidth: 240,
  },
  profileButton: {
    backgroundColor: '#053C5C',
    height: 32,
    paddingTop:  3,
    paddingBottom: 3,
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 10,
  },
  profileButtonText: {
    color: '#F9F9F9',
    fontSize: 14,
    paddingRight: 0,
  },
  profileButtonTextSmall: {
    color: '#F9F9F9',
    fontSize: 12,
    paddingLeft: 5,
  },
  profileHelpButton: {
    alignSelf: 'center',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    maxWidth: 222,
  },
  profileHelpButtonText: {
    color: '#053C5C',
    fontSize: 13,
    textAlign: 'center',
    width: 222,
  },
  profileHelpButtonTextSmall: {
    color: '#053C5C',
    fontSize: 11,
    textAlign: 'center',
    width: 222,
  },
});
class InteractRumScreen extends Component {
  state = {
    activePage: 'interact',
  };
  constructor(props) {
    super(props);
    this.renderTabProfile = this.renderTabProfile.bind(this);
    this.renderTabTasks = this.renderTabTasks.bind(this);
    this.renderTabNotes = this.renderTabNotes.bind(this);
    this.renderTabHistory = this.renderTabHistory.bind(this);
  }
  goBack = () => {
    this.props.navigation.dispatch(NavigationActions.back());
  }
  contactChat = () => {
    console.log('chat');
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
        <Tabs 
          style={styles.rumTabArea} 
          initialPage={0}
          tabContainerStyle={{ height: 30, borderBottomWidth: 0, shadowRadius: 0, shadowOpacity: 0 }} 
          tabBarUnderlineStyle={{ borderBottomWidth:1, borderColor: '#053C5C' }} >
          <Tab 
            tabStyle={{backgroundColor: 'white', height: 30, borderBottomWidth:1, borderColor: '#C8C7CC'}} 
            textStyle={{color: '#7E888D', fontSize: 12}} 
            activeTabStyle={{backgroundColor: 'white'}} 
            activeTextStyle={{ color: '#053C5C', fontWeight: 'normal', fontSize: 12 }}
            heading={ translate('PROFILE', locale) } >
            { this.renderTabProfile(locale) }
          </Tab>
          <Tab 
            tabStyle={{backgroundColor: 'white', height: 30, borderBottomWidth:1, borderColor: '#C8C7CC'}} 
            textStyle={{color: '#7E888D', fontSize: 12}} 
            activeTabStyle={{backgroundColor: 'white', borderBottomWidth: 2, borderColor: '#053C5C'}} 
            activeTextStyle={{color: '#053C5C', fontWeight: 'normal', fontSize: 12}}
            heading={ translate('TASKS', locale) }>
            { this.renderTabTasks(locale) }
          </Tab>
          <Tab 
            tabStyle={{backgroundColor: 'white', height: 30, borderBottomWidth:1, borderColor: '#C8C7CC'}} 
            textStyle={{color: '#7E888D', fontSize: 12}} 
            activeTabStyle={{backgroundColor: 'white', borderBottomWidth: 2, borderColor: '#053C5C'}} 
            activeTextStyle={{color: '#053C5C', fontWeight: 'normal', fontSize: 12}}
            heading={ translate('NOTES', locale) }>
            { this.renderTabNotes(locale) }
          </Tab>
          <Tab 
            tabStyle={{backgroundColor: 'white', height: 30, borderBottomWidth:1, borderColor: '#C8C7CC'}} 
            textStyle={{color: '#7E888D', fontSize: 12}} 
            activeTabStyle={{backgroundColor: 'white', borderBottomWidth: 2, borderColor: '#053C5C'}} 
            activeTextStyle={{color: '#053C5C', fontWeight: 'normal', fontSize: 12}}
            heading={ translate('HISTORY', locale) }>
            { this.renderTabHistory(locale) }
          </Tab>
        </Tabs>
      </View>
    )
  }
  renderTabProfile = (locale) => {
    return (
      <Grid>
        <Row style={styles.profileRow}>
          <Text style={styles.profileStatus}>
            {translate('This user has not shared their Birkman results with you.', locale)}
          </Text>
        </Row>
        <Row style={styles.profileRow}>
          <Button style={styles.profileButton}>
            <Text style={styles.profileButtonText}>
              { translate('REQUEST', locale) }
            </Text>
            <Text style={styles.profileButtonTextSmall}>
              { translate('Birkman Report', locale) }
            </Text>
          </Button>
        </Row>
        <Row style={styles.profileRow}>
          <Button style={styles.profileButton}>
            <Text style={styles.profileButtonText}>
              { translate('SHARE', locale) }
            </Text>
            <Text style={styles.profileButtonTextSmall}>
              { translate('my Birkman Report', locale) }
            </Text>
          </Button>
        </Row>
        <Row style={styles.profileRow}>
          <Button 
            transparent 
            style={styles.profileHelpButton} >
            <Text style={styles.profileHelpButtonText}>
              { translate('Need Help?', locale) }
            </Text>
            <Text style={styles.profileHelpButtonTextSmall}>
              { translate('Get help interpreting your Birkman.', locale) }
            </Text>
          </Button>
        </Row>
      </Grid>
    )  
  }
  renderTabTasks = (locale) => {
    return (
      <Grid>
        <Text>Tasks</Text>
      </Grid>
    )  
  }
  renderTabNotes = (locale) => {
    return (
      <Grid>
        <Text>Notes</Text>
      </Grid>
    )  
  }
  renderTabHistory = (locale) => {
    return (
      <Grid>
        <Text>History</Text>
      </Grid>
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

export default connect(mapStateToProps, actions)(InteractRumScreen);