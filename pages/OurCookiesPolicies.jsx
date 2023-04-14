import React from "react";

import styles from "../styles/OurCookiesPolicies.module.scss";

const OurCookiesPolicies = () => {
  return (
    <div className={styles.cookiesPolicyContainer}>
      <div className={styles.cookiesPlicyWrapper1}>
        <h2>Politique d’utilisation des cookies</h2>

        <p>
          Nos partenaires et nous-mêmes utilisons différentes technologies,
          telles que les cookies, afin de stocker des informations (comme vos
          identifiants) sur votre navigateur web ou sur votre appareil.{" "}
        </p>

        <div className={styles.cookiesPolicy}>
          <h4>Cookies Policy</h4>
          <p>
            We and our partners use various technologies, such as cookies, to
            store information (such as your identifiers) on your web browser or
            on your device.{" "}
          </p>
        </div>
      </div>

      <div className={styles.cookiesPlicyWrapper2}>
        <h2>Quand utilisons-nous des cookies ?</h2>

        <p>Nous utilisons des cookies lors de votre navigation sur psyup.fr</p>

        <div className={styles.cookiesPolicy}>
          <h4>When do we use cookies?</h4>
          <p>We use cookies when you browse psyup.fr.</p>
        </div>
      </div>
    </div>
  );
};

export default OurCookiesPolicies;
