import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import { BACKEND_URL } from '../utils/consts';
import axios from 'axios';

export default function Home({ posts }) {
  console.log('PROPS :', posts);
  return (
    <>
      <Head>
        <title>Citron en Limonade</title>
        <meta
          name='Un espace de discussion autour de 14 thèmes de la vie courante'
          content='Citron en Limonade'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className={styles.main}>
        <div className='searchContainer'> Recherche et filtre </div>
        <h3>LES STORIES</h3>
        <ul>
          {posts.map((post) => (
            <li key={post._id}>{post.title}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const res = await axios.get(`${BACKEND_URL}/story/`);
  const posts = await res.data;
  return {
    props: {
      posts,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 120 seconds
    revalidate: 10, // In seconds
  };
}
