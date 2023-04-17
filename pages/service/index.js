import { useState } from "react";
import styles from "./service.module.scss";
import { Button } from "reactstrap";
import Image from "next/image";
import img1 from "../../public/assets/img/image_icons/one.png";
import img2 from "../../public/assets/img/image_icons/two.png";
import img3 from "../../public/assets/img/image_icons/three.png";
import img4 from "../../public/assets/img/image_icons/four.png";
import img6 from "../../public/assets/img/image_icons/six.png";
import img7 from "../../public/assets/img/image_icons/seven.png";
import img8 from "../../public/assets/img/image_icons/eight.png";
import img9 from "../../public/assets/img/image_icons/nine.png";
import img10 from "../../public/assets/img/image_icons/ten.png";
import img11 from "../../public/assets/img/image_icons/11.png";

function index() {
  const [show, setShow] = useState(1);
  const [color, setColor] = useState({});
  const handleTabs = (data) => {
    if (data === 1) {
      setShow(1);
      setColor({ backgroundColor: "#00565b", color: "white" });
    } else if (data === 2) {
      setShow(2);
      setColor({ backgroundColor: "#00565b", color: "white" });
    } else if (data === 3) {
      setShow(3);
    } else {
      setShow(4);
    }
  };
  return (
    <div style={{ backgroundColor: "#f5f7f8", width: "100%", height: "100vh" }}>
      <div className="container" style={{ paddingTop: "7rem" }}>
        <div className="row">
          <div className="col-8 mx-auto">
            <div className="d-flex align-items-center gap-3 mb-3">
              <div className={`${styles.searchbar}`}>
                <input type="text" placeholder="Rechercher …" />
              </div>
              <div
                style={{
                  backgroundColor: "#01989f",
                  padding: "5px",
                  lineHeight: "10px",
                  borderRadius: "5px",
                }}
              >
                <Image
                  src={img11}
                  alt="Picture of the author"
                  width={38}
                  height={38}
                />
              </div>
            </div>

            <div className={styles.btn_wrapper}>
              <Button
                color="primary"
                style={color}
                outline
                onClick={() => handleTabs(1)}
              >
                Ce jour
              </Button>
              <Button color="primary" outline onClick={() => handleTabs(2)}>
                Cette semaine
              </Button>
              <Button color="primary" outline onClick={() => handleTabs(3)}>
                Ce mois
              </Button>
              <Button color="primary" outline onClick={() => handleTabs(4)}>
                Ce mois
              </Button>
            </div>

            <div className={styles.mainTabWrapper}>
              {show === 1 && (
                <div className={styles.tabOne}>
                  <div className="position-relative">
                    <div>
                      <div className={styles.nested_TabOne}>
                        <h4>mainTabWrapper</h4>
                        <div>
                          <p>mainTabWrapper</p>
                          <p>le 04/01/2021 à 8h02</p>
                        </div>
                      </div>
                      <h2>Titre de l’histoire One</h2>
                      <p>
                        Ca a commencé par consectetur adipiscing elit, sed do
                        eiusmod tempor incididu ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam piscin….
                      </p>

                      <div className={styles.tab_icons}>
                        <div className={styles.img_icons}>
                          <Image
                            src={img4}
                            alt="Picture of the author"
                            width={24}
                            height={24}
                          />
                          <div className="d-flex align-items-center">
                            <Image
                              src={img1}
                              alt="Picture of the author"
                              width={24}
                              height={24}
                            />
                            <span>(4)</span>
                          </div>
                          <Image
                            src={img2}
                            alt="Picture of the author"
                            width={24}
                            height={24}
                          />
                          <Image
                            src={img3}
                            alt="Picture of the author"
                            width={24}
                            height={24}
                          />
                        </div>

                        <div className={styles.content_icons}>
                          <p>
                            Professionnel : <span>Mr Nomassezlong</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className={styles.reaction_icons}>
                      <span>
                        <Image
                          src={img6}
                          alt="Picture of the author"
                          width={30}
                          height={30}
                        />
                        <small>2</small>
                      </span>
                      <span>
                        <Image
                          src={img7}
                          alt="Picture of the author"
                          width={30}
                          height={30}
                        />
                        <small>2</small>
                      </span>
                      <span>
                        <Image
                          src={img8}
                          alt="Picture of the author"
                          width={30}
                          height={30}
                        />
                        <small>2</small>
                      </span>
                      <span>
                        <Image
                          src={img9}
                          alt="Picture of the author"
                          width={30}
                          height={30}
                        />
                        <small>2</small>
                      </span>
                      <span>
                        <Image
                          src={img10}
                          alt="Picture of the author"
                          width={30}
                          height={30}
                        />
                        <small>2</small>
                      </span>
                    </div>
                  </div>
                </div>
              )}
              {show === 2 && (
                <div className={styles.tabOne}>
                  <div className="position-relative">
                    <div>
                      <div className={styles.nested_TabOne}>
                        <h4>mainTabWrapper</h4>
                        <div>
                          <p>mainTabWrapper</p>
                          <p>le 04/01/2021 à 8h02</p>
                        </div>
                      </div>
                      <h2>Titre de l’histoire Two</h2>
                      <p>
                        Ca a commencé par consectetur adipiscing elit, sed do
                        eiusmod tempor incididu ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam piscin….
                      </p>

                      <div className={styles.tab_icons}>
                        <div className={styles.img_icons}>
                          <Image
                            src={img4}
                            alt="Picture of the author"
                            width={24}
                            height={24}
                          />
                          <div className="d-flex align-items-center">
                            <Image
                              src={img1}
                              alt="Picture of the author"
                              width={24}
                              height={24}
                            />
                            <span>(4)</span>
                          </div>
                          <Image
                            src={img2}
                            alt="Picture of the author"
                            width={24}
                            height={24}
                          />
                          <Image
                            src={img3}
                            alt="Picture of the author"
                            width={24}
                            height={24}
                          />
                        </div>

                        <div className={styles.content_icons}>
                          <p>
                            Professionnel : <span>Mr Nomassezlong</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className={styles.reaction_icons}>
                      <span>
                        <Image
                          src={img6}
                          alt="Picture of the author"
                          width={30}
                          height={30}
                        />
                        <small>2</small>
                      </span>
                      <span>
                        <Image
                          src={img7}
                          alt="Picture of the author"
                          width={30}
                          height={30}
                        />
                        <small>2</small>
                      </span>
                      <span>
                        <Image
                          src={img8}
                          alt="Picture of the author"
                          width={30}
                          height={30}
                        />
                        <small>2</small>
                      </span>
                      <span>
                        <Image
                          src={img9}
                          alt="Picture of the author"
                          width={30}
                          height={30}
                        />
                        <small>2</small>
                      </span>
                      <span>
                        <Image
                          src={img10}
                          alt="Picture of the author"
                          width={30}
                          height={30}
                        />
                        <small>2</small>
                      </span>
                    </div>
                  </div>
                </div>
              )}
              {show === 3 && (
                <div className={styles.tabOne}>
                  <div className="position-relative">
                    <div>
                      <div className={styles.nested_TabOne}>
                        <h4>mainTabWrapper</h4>
                        <div>
                          <p>mainTabWrapper</p>
                          <p>le 04/01/2021 à 8h02</p>
                        </div>
                      </div>
                      <h2>Titre de l’histoire Three</h2>
                      <p>
                        Ca a commencé par consectetur adipiscing elit, sed do
                        eiusmod tempor incididu ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam piscin….
                      </p>

                      <div className={styles.tab_icons}>
                        <div className={styles.img_icons}>
                          <Image
                            src={img4}
                            alt="Picture of the author"
                            width={24}
                            height={24}
                          />
                          <div className="d-flex align-items-center">
                            <Image
                              src={img1}
                              alt="Picture of the author"
                              width={24}
                              height={24}
                            />
                            <span>(4)</span>
                          </div>
                          <Image
                            src={img2}
                            alt="Picture of the author"
                            width={24}
                            height={24}
                          />
                          <Image
                            src={img3}
                            alt="Picture of the author"
                            width={24}
                            height={24}
                          />
                        </div>

                        <div className={styles.content_icons}>
                          <p>
                            Professionnel : <span>Mr Nomassezlong</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className={styles.reaction_icons}>
                      <span>
                        <Image
                          src={img6}
                          alt="Picture of the author"
                          width={30}
                          height={30}
                        />
                        <small>2</small>
                      </span>
                      <span>
                        <Image
                          src={img7}
                          alt="Picture of the author"
                          width={30}
                          height={30}
                        />
                        <small>2</small>
                      </span>
                      <span>
                        <Image
                          src={img8}
                          alt="Picture of the author"
                          width={30}
                          height={30}
                        />
                        <small>2</small>
                      </span>
                      <span>
                        <Image
                          src={img9}
                          alt="Picture of the author"
                          width={30}
                          height={30}
                        />
                        <small>2</small>
                      </span>
                      <span>
                        <Image
                          src={img10}
                          alt="Picture of the author"
                          width={30}
                          height={30}
                        />
                        <small>2</small>
                      </span>
                    </div>
                  </div>
                </div>
              )}
              {show === 4 && (
                <div className={styles.tabOne}>
                  <div className="position-relative">
                    <div>
                      <div className={styles.nested_TabOne}>
                        <h4>mainTabWrapper</h4>
                        <div>
                          <p>mainTabWrapper</p>
                          <p>le 04/01/2021 à 8h02</p>
                        </div>
                      </div>
                      <h2>Titre de l’histoire Four</h2>
                      <p>
                        Ca a commencé par consectetur adipiscing elit, sed do
                        eiusmod tempor incididu ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam piscin….
                      </p>

                      <div className={styles.tab_icons}>
                        <div className={styles.img_icons}>
                          <Image
                            src={img4}
                            alt="Picture of the author"
                            width={24}
                            height={24}
                          />
                          <div className="d-flex align-items-center">
                            <Image
                              src={img1}
                              alt="Picture of the author"
                              width={24}
                              height={24}
                            />
                            <span>(4)</span>
                          </div>
                          <Image
                            src={img2}
                            alt="Picture of the author"
                            width={24}
                            height={24}
                          />
                          <Image
                            src={img3}
                            alt="Picture of the author"
                            width={24}
                            height={24}
                          />
                        </div>

                        <div className={styles.content_icons}>
                          <p>
                            Professionnel : <span>Mr Nomassezlong</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className={styles.reaction_icons}>
                      <span>
                        <Image
                          src={img6}
                          alt="Picture of the author"
                          width={30}
                          height={30}
                        />
                        <small>2</small>
                      </span>
                      <span>
                        <Image
                          src={img7}
                          alt="Picture of the author"
                          width={30}
                          height={30}
                        />
                        <small>2</small>
                      </span>
                      <span>
                        <Image
                          src={img8}
                          alt="Picture of the author"
                          width={30}
                          height={30}
                        />
                        <small>2</small>
                      </span>
                      <span>
                        <Image
                          src={img9}
                          alt="Picture of the author"
                          width={30}
                          height={30}
                        />
                        <small>2</small>
                      </span>
                      <span>
                        <Image
                          src={img10}
                          alt="Picture of the author"
                          width={30}
                          height={30}
                        />
                        <small>2</small>
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="py-5 text-center">
              <button
                className="btn"
                style={{
                  borderRadius: "5px",
                  backgroundColor: "#f95d5f",
                  color: "white",
                  padding: "10px",
                }}
              >
                Voir plus d'histoires
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
