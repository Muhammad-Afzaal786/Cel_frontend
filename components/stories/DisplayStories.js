import React from 'react';
import styles from './DisplayStories.module.scss';
import { format, parseISO } from 'date-fns';
import { useState, useEffect } from 'react';

const DisplayStories = ({ stories }) => {
  // console.log('*** props de Display stories*** : ', stories);
  const [storie, setStories] = useState([]);
  const [visible, setVisible] = useState(5);

  const showMoreStories = () => {
    setVisible((prevValue) => prevValue + 3);
  };
  return (
    <>
      <section className={styles.storiesSection}>
        {stories.slice(0, visible).map((story) => (
          <div key={story._id} className={styles.storyContainer}>
            <article className={styles.storyCard}>
              <h3 className={styles.theme}>{story.theme.name}</h3>
              <h4 className={styles.writter}>
                Par {story.writter.username}, le{' '}
                {format(parseISO(story.createdAt), 'dd/mm/yyyy')} à{' '}
                {format(parseISO(story.createdAt), 'hh:mm')}
              </h4>
              <h2 className={styles.title}>{story.title}</h2>
              <p className={styles.content}>
                {story.content.slice(0, 44)}... Lire la suite
              </p>
              <p className={styles.professional}>
                Professionnel: {story.professionalConsulted.name}
              </p>
              <div className={styles.storyAction}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </article>
            <div className={styles.storyReaction}>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        ))}
        <button className={styles.btnRose} onClick={showMoreStories}>
          Voir plus d'histoires
        </button>
      </section>
    </>
  );
};

export default DisplayStories;
