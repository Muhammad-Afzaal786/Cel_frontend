import React, { useEffect } from "react";
import Head from "next/head";
import { BACKEND_URL } from "../utils/consts";
import axios from "axios";
import DisplayStories from "../components/stories/displayStories/DisplayStories";
import ScrollBarPosition from "../components/scrollbar/ScrollBarPosition";
import { useContext } from "react";
import { BreakPointContext } from "../context/breakPoints.context";

import "bootstrap/dist/css/bootstrap.min.css";

// reactstrap components
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";

import ToggleButton from "../components/ToggleButton/ToggleButton";

//
import styles from "../styles/desktop-Index.module.scss";

export default function Home({ posts }) {
  // console.log('PROPS :', posts);
  const { breakPoint } = useContext(BreakPointContext);
  // console.log('BREAKPOINT IS : ', breakPoint);
  //

  const [modalOpen, setModalOpen] = React.useState(false);
  const [modalOpen1, setModalOpen1] = React.useState(false);
  const [modalOpen2, setModalOpen2] = React.useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
    console.log(isLoggedIn);
  };
  const toggleSecondModal = () => {
    setModalOpen(!modalOpen);
    setModalOpen1(!modalOpen1);
  };

  const toggleThirdModal = () => {
    setModalOpen(!modalOpen);
    setModalOpen2(!modalOpen2);
  };

  useEffect(() => {
    setModalOpen(!modalOpen);
  }, []);

  return (
    <>
      <Head>
        <title>Citron en Limonade</title>
        <meta
          name="Un espace de discussion autour de 14 thèmes de la vie courante"
          content="Citron en Limonade"
        />
        <link rel="icon" href="/favicon-citron-en-limonade.png" />
      </Head>
      {/* <ScrollBarPosition /> */}
      {/* <h3>Breakpoint is : ' {breakPoint}'</h3> */}
      {/* <div className='searchContainer'> Recherche et filtre </div> */}
      <div className="annonce">
        <p>Site web en construction...</p>
      </div>

      {/* New changes */}

      <Modal toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen}>
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            Accepter les cookies de Psy Up dans ce navigateur ?
          </h5>
        </div>
        <ModalBody className="Dashboard-policies-popup-body">
          Avec votre accord,{" "}
          <span className="modal-links" onClick={toggleThirdModal}>
            nos partenenaires
          </span>{" "}
          et nous utilisons des cookies ou technologies similaires afin de
          personnaliser notre contenu, diffuser des publicités pertinentes et
          offrir une expérience plus sûre. Vous pouvez vérifier vos{" "}
          <span className="modal-links" onClick={toggleSecondModal}>
            paramètres de cookies
          </span>{" "}
          à tout moment. Pour en savoir plus sur l’utilisation des cookies et
          leurs paramètres, consultez
          <a href="/OurCookiesPolicies">
            notre politique d’utilisation des cookies.
          </a>
        </ModalBody>
        <ModalFooter>
          <button
            type="button"
            className="modal-button-cancel"
            onClick={() => setModalOpen(!modalOpen)}
          >
            Paramètre
          </button>
          <button className="modal-button-accept" type="button">
            Tout accepter
          </button>
        </ModalFooter>
      </Modal>

      {/* Modal for Cookies Settings */}

      <Modal
        size="lg"
        style={{ maxWidth: "700px", width: "100%" }}
        toggle={() => setModalOpen1(!modalOpen1)}
        isOpen={modalOpen1}
      >
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel1">
            Voir les partenaires
          </h5>
          <button
            aria-label="Close"
            className=" close"
            type="button"
            onClick={() => setModalOpen1(!modalOpen1)}
          >
            <span aria-hidden={true}>×</span>
          </button>
        </div>
        <ModalBody>
          <h6>Accepter les cookies ? </h6>
          <p>
            Nos partenaires et nous utilisons des cookies dans les cadres des
            activités suivantes :
          </p>
          <ul>
            <li>Faciliter votre accès à Psy Up et votre navigation</li>
            <li>Assurer la sécurité, prévenir la fraude </li>
            <li>Assurer la performance et l’amélioration du site </li>
            <li>Personnaliser les contenus et les publicités</li>
            <li>Mesurer l’audience</li>
          </ul>
          <p>
            Certains cookies sont nécessaires au fonctionnement du site Psy Up.
          </p>
          <p>
            Vous pouvez en savoir plus sur notre utilisation des cookies en
            lisant notre Politique d’utilisation des cookies.{" "}
          </p>
          <p>
            Vous pouvez contrôler la façon dont nous exploitons vos données
            grâce aux outils décrits cidessous.{" "}
          </p>

          <h6>Contrôle du principal cookie publicitaire de Psy Up </h6>

          <p>
            Vous pouvez accepter ou refuser l’utilisation du cookie publicitaire
            principal.{" "}
          </p>

          <div className="cookies-border-section">
            <p>
              Accepter le cookie publicitaire principal de Psy Up, qui est
              principalement utilisé pour diffuser, mesurer et améliorer la
              pertinence des publicités proposées ? Si vous n’acceptez pas de ce
              cookie, vous verrez toujours des annonces sur notre site, mais
              cellesci ne seront pas personnalisées.{" "}
            </p>
            <div className="cookies-toggle">
              <ToggleButton checked="checked" />
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="modal-button-accept">Tout accepter</button>
        </ModalFooter>
      </Modal>

      {/* Modal for Our Partner */}

      <Modal
        size="lg"
        style={{ maxWidth: "600px", width: "100%" }}
        toggle={() => setModalOpen2(!modalOpen2)}
        isOpen={modalOpen2}
      >
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel2">
            Voir les activités
          </h5>
          <button
            aria-label="Close"
            className=" close"
            type="button"
            onClick={() => setModalOpen2(!modalOpen2)}
          >
            <span aria-hidden={true}>×</span>
          </button>
        </div>
        <ModalBody>
          <h6>Accepter les cookies ? </h6>
          <p>
            Ci-dessous la liste des partenaires qui requièrent votre
            consentement et/ou se basent sur leur intérêt légitime pour exercer
            les activités décrites dans la page Activités. Vous pouvez définir
            vos préférences de consentement pour chaque partenaire
            individuellement. Cliquez sur le nom d'un partenaire pour obtenir
            plus d'informations sur ce qu'il fait, les données qu'il récolte et
            comment il les utilise.
          </p>

          <h6>NOS PARTNAIRES </h6>
          <div className="cookies-borderless-section">
            <div className="headings">
              <p>1020.Inc dba Placecast and Ericsson Emodo</p>
              <ToggleButton checked="" />
            </div>
            <div className="headings">
              <p>1Ajency</p>
              <ToggleButton checked="" />
            </div>
            <div className="headings">
              <p>1plusX AG</p>
              <ToggleButton checked="checked" />
            </div>
            <div className="headings">
              <p>1tm</p>
              <ToggleButton checked="" />
            </div>
            <div className="headings">
              <p>22-Visions</p>
              <ToggleButton checked="" />
            </div>
            <div className="headings">
              <p>2KDirect, Inc.</p>
              <ToggleButton checked="checked" />
            </div>
            <div className="headings">
              <p>33Across</p>
              <ToggleButton checked="" />
            </div>
            <div className="headings">
              <p>260e-com Sp</p>
              <ToggleButton checked="" />
            </div>
            <div className="headings">
              <p>3Q nexx GmbH</p>
              <ToggleButton checked="checked" />
            </div>
            <div className="headings">
              <p>42 Ads GmbH</p>
              <ToggleButton checked="" />
            </div>
            <div className="headings">
              <p>65ense insights, Inc</p>
              <ToggleButton checked="checked" />
            </div>
            <div className="headings">
              <p>7Hopes.com Inc.</p>
              <ToggleButton checked="checked" />
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <button
            className="modal-button-cancel"
            onClick={() => setModalOpen2(!modalOpen2)}
          >
            Tout refuser
          </button>
          <button className="modal-button-accept">Tout accepter</button>
        </ModalFooter>
      </Modal>

      <div
        className={
          breakPoint === "laptop" || breakPoint === "desktop"
            ? styles.desktop
            : ""
        }
      >
        <DisplayStories
          stories={posts}
          cssBreakPoint={breakPoint}
        ></DisplayStories>
        {breakPoint === "desktop" && (
          <div className={styles.coteDroit}>{/* <p>Right side</p> */}</div>
        )}
      </div>
    </>
  );
}

// export async function getStaticProps() {
//   const res = await axios.get(`${BACKEND_URL}/story/`);
//   const posts = await res.data;
//   return {
//     props: {
//       posts,
//     },
//     // Next.js will attempt to re-generate the page:
//     // - When a request comes in
//     // - At most once every 120 seconds
//     revalidate: 10, // In seconds
//   };
// }
