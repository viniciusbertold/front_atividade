import '../styles/global.scss';
import { Header } from '../components/header';
import styles from '../styles/styles.module.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className={styles.principalContainer}> 
        <header>
          <Header/>
        </header>
        <main>
          <Component {...pageProps} />
        </main>
      </div>
      <footer>
        <span><strong>Todos os direitos reservados</strong></span>
      </footer>
    </>
    
  )
}

export default MyApp
