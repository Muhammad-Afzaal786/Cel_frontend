import React from 'react';
import { useContext, useState } from 'react';
//
import { signIn } from 'next-auth/react';
//
import { publicRequest } from '../../../utils/axiosRequest';
import { AuthContext } from '../../../context/auth.context';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from './SigninForm.module.scss';
import Image from 'next/image';
import Icon_facebook from '../../../public/assets/img/svgs/rs-icons/icon-rs-facebook.svg';
import Icon_google from '../../../public/assets/img/svgs/rs-icons/icon-rs-google.svg';
import Icon_instagram from '../../../public/assets/img/svgs/rs-icons/icon-rs-insta.svg';
import Icon_close from '../../../public/assets/img/svgs/page-icons/icon-page-close.svg';
import Icon_checkboxOff from '../../../public/assets/img/svgs/page-icons/icon-page-checkbox-off.svg';
import Icon_view from '../../../public/assets/img/svgs/page-icons/icon-page-eye.svg';
import Icon_noView from '../../../public/assets/img/svgs/page-icons/icon-page-eye-crossed.svg';
import Icon_checkboxOn from '../../../public/assets/img/svgs/page-icons/icon-page-checkbox-on.svg';
import Loading from '../../commons/Loading';
//
import { BreakPointContext } from '../../../context/breakPoints.context';
//
const SigninForm = (props) => {
  // console.log('*** PROPS signin : ', props);
  const { breakPoint } = useContext(BreakPointContext);
  const { storeToken, authenticateUser, isLoading, setIsLoading } =
    useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [stayConnected, setStayConnected] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [inputError, setInputError] = useState('');
  const router = useRouter();

  //   const navigate = useNavigate();

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleStayConnected = () => setStayConnected(!stayConnected);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Create an object representing the request body
    const requestBody = { email, password, stayConnected };

    setIsLoading(true);
    // Make an axios request to the API
    // If POST request is successful redirect to login page
    // If the request resolves with an error, set the error message in the state
    publicRequest
      .post(`/auth/signin`, requestBody)
      .then((response) => {
        // console.log('JWT RETURNED', response.data);
        // console.log(response, 'reponse pour SigninForm.js');

        storeToken(response.data.authToken);
        authenticateUser();
        setInputError('');
        setErrorMessage('');
        setIsLoading(false);

        props.props.closeForm(false);
        // router.push('/');
        // navigate('/');
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
        setInputError(error.response.data.input);
        setIsLoading(false);
      });

              // // Make an HTTP request to get the user data
              // const response = await fetch("http://localhost:3004/user");
              // const data = await response.json();
          
              // // Check the credentials against the user data
              // const user = data.find(
              //   (user) => user.email === email && user.password === password
              // );
          
              // if (user) {
              //   // Set the user as logged in and redirect to the dashboard
              //   // setIsLoggedIn(true);
              //   // navigate("/");
              //   router.push('/');
              // } else {
              //   // Display an error message if the credentials are incorrect
              //   // setError("Incorrect username or password");
              //   console.log("Incorrect username or password")
              // }
  };
  //
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  //
  const callbackUrl =
    process.env.ENV === 'DEV'
      ? 'http://localhost:3000'
      : 'https://citronenlimonade.com';
  return (
    <>
      {isLoading ? (
        <Loading></Loading>
      ) : (
        <>
          <div
            className={`${styles.formContent} ${
              breakPoint === 'desktop' || breakPoint === 'laptop'
                ? styles.desktop
                : null
            }
            `}>
            <div className={styles.title}>
              <h3>Connexion</h3>
              <Icon_close
                className={styles.close}
                onClick={() => props.props.closeForm(false)}
              />
            </div>
            <div className={styles.socials}>
              <Icon_facebook
                className={styles.button}
                onClick={() => {
                  signIn('facebook', { callbackUrl: callbackUrl });
                }}
              />
              <Icon_google
                className={styles.button}
                onClick={() => {
                  setIsLoading(true);
                  signIn('google', { callbackUrl: callbackUrl });
                }}
              />
              <Icon_instagram className={styles.button} />
            </div>
            <div className={styles.or}>
              <div className={styles.separator}></div>
              <p className={styles.p}>ou</p>
              <div className={styles.separator}></div>
            </div>
            <form className={styles.form} onSubmit={handleLoginSubmit}>
              <label className={styles.label} htmlFor='email'>
                Adresse mail
              </label>
              <input
                placeholder='bonjour@gmail.com'
                type='text'
                name='email'
                value={email}
                onChange={handleEmail}
                className={`${styles.input} ${
                  inputError === 'email' ? styles.invalid : null
                }`}
                autoFocus={inputError === 'email' ? true : false}
              />
              {inputError === 'email' && (
                <span className={styles.inputError}>{errorMessage}</span>
              )}
              <label className={styles.label} htmlFor='password'>
                Mot de passe
              </label>
              <div
                className={`${styles.password} ${
                  inputError === 'wrong' ? styles.invalid : null
                }`}>
                <input
                  placeholder='password'
                  type={passwordShown ? 'text' : 'password'}
                  name='password'
                  value={password}
                  onChange={handlePassword}
                  className={styles.input}
                />
                {passwordShown ? (
                  <Icon_noView
                    className={styles.showPassword}
                    onClick={() => togglePassword()}
                  />
                ) : (
                  <Icon_view
                    className={styles.showPassword}
                    onClick={() => togglePassword()}
                  />
                )}
              </div>
              {inputError === 'wrong' && (
                <span className={styles.inputError}>{errorMessage}</span>
              )}

              {/* <div
                className={styles.connected}
                onClick={() => {
                  // console.log('value is : ', stayConnected);
                  handleStayConnected();
                }}>
                <input
                  type='hidden'
                  name='stayConnected'
                  value={stayConnected}></input>
            
                {stayConnected ? (
                  <Icon_checkboxOn className={styles.checkbox} />
                ) : (
                  <Icon_checkboxOff className={styles.checkbox} />
                )}
                <label className={styles.checkboxLabel}>Rester connecté</label>
              </div> */}

              <button className={styles.btnRose} type='submit'>
                Se connecter
              </button>

              <Link href='#'>
                <a
                  className={styles.link}
                  onClick={() => props.props.setSignForm('signup')}>
                  Créer mon compte
                </a>
                {/* on clique afficher le formulaire de création de compte*/}
              </Link>
              <Link href={'/signup'}>
                <a className={styles.link2}>Informations de comptes oubliées</a>
                {/* on clique page reinitialisation mot de passe*/}
              </Link>
            </form>
          </div>
        </>
      )}
    </>
  );
};

export default SigninForm;
