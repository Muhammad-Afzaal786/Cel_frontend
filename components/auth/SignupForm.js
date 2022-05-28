import React from 'react';
import { useContext, useState } from 'react';

import { publicRequest } from '../../utils/axiosRequest';
import { AuthContext } from '../../context/auth.context';
import { useRouter } from 'next/router';
import Link from 'next/link';

import styles from './SignupForm.module.scss';

//

const SignupForm = ({ themes }) => {
  const { storeToken, authenticateUser } = useContext(AuthContext);

  const [lastname, setLastname] = useState('');
  const [firstname, setFirstname] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [selectedThemes, setSelectedThemes] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  //   const navigate = useNavigate();
  const handleLastname = (e) => setLastname(e.target.value);
  const handleFirstname = (e) => setFirstname(e.target.value);
  const handleUsername = (e) => setUsername(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleDateOfBirth = (e) => setDateOfBirth(e.target.value);
  const handleSelectedThemes = (e) => setSelectedThemes(e.target.value);
  //

  //
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Create an object representing the request body
    const requestBody = {
      lastname,
      firstname,
      username,
      email,
      password,
      dateOfBirth,
      selectedThemes,
    };

    // Make an axios request to the API
    // If POST request is successful redirect to login page
    // If the request resolves with an error, set the error message in the state
    publicRequest
      .post(`/auth/signup`, requestBody)
      .then((response) => {
        // console.log('JWT RETURNED', response.data);
        console.log(response, 'reponse pour SignupForm.js');

        storeToken(response.data.authToken);
        authenticateUser();

        router.push('/');
        // navigate('/');
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  //
  const handleToggle = (e) => {
    console.log('*** selectedThemes *** : ', selectedThemes);

    let themeID = e.target.closest('div').dataset.target;
    console.log("*** handleToggle, voici l'id : ", themeID);
    let themeGroup = document.querySelectorAll(`[data-target='${themeID}']`);
    console.log('*** handleToggle, themeGroup: ', themeGroup);
    //
    if (selectedThemes.includes(themeID)) {
      // Removing already selected theme
      const cleanedArray = selectedThemes.filter((item) => item !== themeID);
      setSelectedThemes(cleanedArray);
      console.log('*** CLEANED ARRAY *** : ', cleanedArray);

      console.log('*** REMOVE FROM selectedThemes *** : ', selectedThemes);
    } else if (
      selectedThemes.length <= 2 &&
      !selectedThemes.includes(themeID)
    ) {
      // Adding new theme

      setSelectedThemes((selectedThemes) => [...selectedThemes, themeID]);

      console.log('*** ADD TO selectedThemes *** : ', selectedThemes);
    }
  };

  //

  return (
    <>
      <div>Signup Form</div>
      <form id='signupForm' onSubmit={handleLoginSubmit}>
        <fieldset form='signupForm' id='userInfos' style={{ border: 'none' }}>
          <label htmlFor='lastname'>Nom</label>
          <input
            form='signupForm'
            id='lastname'
            placeholder='Dupont'
            type='text'
            name='lastname'
            value={lastname}
            onChange={handleLastname}
          />

          <label htmlFor='firstname'>Prenom</label>
          <input
            form='signupForm'
            id='firstname'
            placeholder='Catherine'
            type='text'
            name='firstname'
            value={firstname}
            onChange={handleFirstname}
          />

          <label htmlFor='username'>Nom d'utilisateur</label>
          <input
            form='signupForm'
            id='username'
            placeholder='Cathy_cat'
            type='text'
            name='username'
            value={username}
            onChange={handleUsername}
          />

          <label htmlFor='email'>Adresse email</label>
          <input
            form='signupForm'
            placeholder='catherine-dupont@gmail.com'
            type='email'
            name='email'
            value={email}
            onChange={handleEmail}
          />

          <label htmlFor='password'>Mot de passe</label>
          <input
            form='signupForm'
            placeholder='password'
            type='password'
            name='password'
            value={password}
            onChange={handlePassword}
          />
          <label htmlFor='dateOfBirth'>Date de naissance</label>
          <input
            form='signupForm'
            id='dateOfBirth'
            type='date'
            name='dateOfBirth'
            value={dateOfBirth}
            onChange={handleDateOfBirth}
          />
          <div>
            <p>
              En vous inscrivant, vous acceptez nos Conditions générales.
              Découvrez comment nous recueillons, utilisons et partageons vos
              données en consultant notre Politique d’utilisation des données et
              comment nous utilisons les cookies et autres technologies
              similaires en lisant notre Politique d’utilisation des cookies.
            </p>
          </div>
        </fieldset>
        <fieldset form='signupForm' id='themesSelection'>
          {themes.map((theme) => (
            <div
              key={theme._id}
              className={` ${styles.themeBtn} ${
                selectedThemes.includes(theme._id) ? styles.selected : ''
              } `}
              id={theme._id}
              data-target={theme._id}
              onClick={handleToggle}>
              <p data-target={theme._id}>{theme.name}</p>

              <img
                className={theme.svg_title}
                src={`/assets/img/svgs/${theme.svg_title}-unselected.svg`}
                height='40px'
                width='40px'
                data-target={theme._id}></img>
            </div>
          ))}
        </fieldset>

        {errorMessage && <p className='error-message'>{errorMessage}</p>}
        <button type='submit' className='btn'>
          SUBMIT
        </button>
        <Link href={'/signin'}>Already have an account</Link>
      </form>
    </>
  );
};

export default SignupForm;