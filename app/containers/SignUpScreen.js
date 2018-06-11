import React from 'react';
import PropTypes from 'prop-types';
import {
	Container,
	Content,
	Text,
	Form,
	Item,
	Label,
	Input,
	Button,
	Body,
	CheckBox,
	ListItem,
	Thumbnail,
	View,
	H1
} from 'native-base';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as registerActions from '../actions/registerActions';
import { Actions } from 'react-native-router-flux';
import { StyleSheet } from 'react-native';
import { translate } from '../i18n';
import Loading from './Loading';
import Messages from '../components/Messages';
import Header from '../components/Header';
import Spacer from '../components/Spacer';

const styles = StyleSheet.create({
	content: {
  	padding: 44,
  },
  header: {
  	color: '#053C5C',
  	fontSize: 16,
  	textAlign: 'center'
  },
  button: {
  	backgroundColor: '#7E888D',
  },
  buttonText: {
  	color: '#FFF',
  	fontSize: 18
  },
  thumbnail: {
  	alignSelf: "center",
  	height: 35,
  	width: 35
  },
  input: { 	
  	color: '#000'
  },
  note: {
  	fontSize: 10,
  	color: '#A1A1A1',
  }
})

class SignUpScreen extends React.Component {
  // static propTypes = {
  //   error: PropTypes.string,
  //   loading: PropTypes.bool.isRequired,
  //   locale: PropTypes.string,
  //   onFormSubmit: PropTypes.func.isRequired,
  // }
	//
	static navigationOptions = () => ({
    headerStyle: {
      backgroundColor: '#053C5C'
    },
  });
  static defaultProps = {
    error: null,
  }

  constructor(props) {
    super(props);
    this.state = {
      apiKey: '',
    	emailAddress: '',
      password: '',
      passwordConfirm: '',
      firstName: '',
      lastName: '',
      phoneNumber: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

	handleSignUp = () => {
		const {
			emailAddress,
      password,
      passwordConfirm,
      firstName,
      lastName,
      phoneNumber,
		} = this.state;

		this.props.actions.registerRequest(
			emailAddress,
      password,
      passwordConfirm,
      firstName,
      lastName,
      phoneNumber,
		);
	};

  handleChange = (name, val) => {
    this.setState({
      ...this.state,
      [name]: val,
    });
  }
	//
  // handleSubmit = () => {
  //   this.props.onFormSubmit(this.state)
  //     .then(() => Actions.login())
  //     .catch(e => console.log(`Error: ${e}`));
  // }

  render() {
    // const { loading, error, locale } = this.props;

    // if (loading) return <Loading />;
		const locale = 'en';
		const { register } = this.props;

    return (
      <Container>
        <Content style={styles.content}>
					<View>
					  <H1 style={styles.header} >
	          	Tell us about yourself.
	          </H1>
					</View>
					{register.errorMessage && <Messages message={register.errorMessage} />}
					<Spacer size={20} />
					<Body>
						<Item>
              <Input
              	style={styles.input}
                placeholder={translate('First Name', locale) + '*'}
								onChangeText={v => this.handleChange('firstName', v)}
              />
            </Item>
						<Item>
              <Input
              	style={styles.input}
                placeholder={translate('Last Name', locale) + '*'}
								onChangeText={v => this.handleChange('lastName', v)}
              />
            </Item>
            <Item>
              <Input
              	style={styles.input}
                placeholder={translate('Email', locale) + '*'}
								onChangeText={v => this.handleChange('emailAddress', v)}
              />
            </Item>
						<Item>
              <Input
              	style={styles.input}
              	secureTextEntry
                placeholder={translate('Password', locale)}
								onChangeText={v => this.handleChange('password', v)}
              />
            </Item>
						<Item>
              <Input
              	style={styles.input}
								secureTextEntry
                placeholder={translate('Confirm Password', locale)}
								onChangeText={v => this.handleChange('passwordConfirm', v)}
              />
            </Item>
						<Item>
              <Input
                placeholder={translate('Phone Number', locale) + '*'}
								onChangeText={v => this.handleChange('phoneNumber', v)}
              />
            </Item>
            <Spacer size={20} />
            <Text style={styles.note}>*We will provide to others in your community.</Text>
            <Spacer size={8} />
            <Button full style={styles.button} onPress={Actions.handleSubmit}>
							<Text style={styles.buttonText}>{translate('Next', locale)}</Text>
						</Button>
						<Spacer size={40} />
						<Thumbnail
							square 
							style={styles.thumbnail} 
							source={require('../images/logo.png')} />
	        </Body>
        </Content>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  const { register } = state;

  return {
    register,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(registerActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreen);
