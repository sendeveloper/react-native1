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
import { StyleSheet, Alert } from 'react-native';
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
  validateButton: {
  	backgroundColor: '#358A83',
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
  	color: '#053C5C'
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
    title: 'Create Account',
    headerTintColor: '#FFF',
    headerStyle: {
      backgroundColor: '#053C5C',
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
      nextButtonValidate: false,
      errorMessages: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleNext = this.handleNext.bind(this);
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
	validateEmail = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
	}
	validateNumber = (number) => {
		var re = /^[\d\.\-]+$/;
		return re.test(number);
	}
	checkValidataion = () => {
		const {
			emailAddress,
      password,
      passwordConfirm,
      firstName,
      lastName,
      phoneNumber,
		} = this.state;
		const locale = 'en';
		let result = [], validate = true;
		if (firstName == ''){
			result[0] = translate('Input first name', locale);
			validate = false;
		}
		if (lastName == ''){
			result[1] = translate('Input last name', locale);
			validate = false;
		}
		if (emailAddress == ''){
			result[2] = translate('Input email address', locale);
			validate = false;
		}
		else if (!this.validateEmail(emailAddress)){
				result[2] = translate('Input validate email', locale);
				validate = false;
		}
		if (password == ''){
			result[3] = translate('Input password', locale);
			validate = false;
		}
		else if (password.length < 8){
			result[3] = translate('Input at least 8 characters', locale);	
			validate = false;
		}
		if (passwordConfirm == '' || passwordConfirm != password){
			result[4] = translate('Input the same confirm password', locale);
			validate = false;
		}
		if (!this.validateNumber(phoneNumber))
		{
			result[5] = translate('Inut the correct number', locale);
			validate = false;
		}
		this.setState({ errorMessage: result, nextButtonValidate: validate });	
		return validate;
	}
  handleChange = (name, val) => {
    this.setState({
      ...this.state,
      [name]: val,
    }, () => {
    	this.checkValidataion();
    });
  }
  handleNext = () => {
  	const {
			emailAddress,
      password,
      passwordConfirm,
      firstName,
      lastName,
      phoneNumber,
      nextButtonValidate,
		} = this.state;
  	if (nextButtonValidate)
  	{
  		Alert.alert(
			  'Accept Terms',
			  'By creating an account, you agree to the Privacy of Service and Privacy Policy.',
			  [
			    {text: 'CANCEL', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
			    {text: 'I AGREE', onPress: () => console.log('OK Pressed')},
			  ],
			  { cancelable: false }
			)
  	}
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
		const { nextButtonValidate } = this.state;
		console.log(this.state.nextButtonValidate, nextButtonValidate);
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
            <Button 
            	full 
            	style={nextButtonValidate ? styles.validateButton: styles.button} 
            	onPress={() => this.handleNext()}>
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
