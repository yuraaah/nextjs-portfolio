import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Yura's heaven</title>
        <meta name="description" content="Personal portfolio by Yura" />
        <link rel="icon" href="/favicon.png" />
      </Head>
    <div className={styles.twContainer}>
      <a className="twitter-timeline" data-height="500" data-theme="dark" href="https://twitter.com/CrazyBrumik?ref_src=twsrc%5Etfw">Tweets by Yura</a>
      <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
    </div>



    </div>

    
  )
}
