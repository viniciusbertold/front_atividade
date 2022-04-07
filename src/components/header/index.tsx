import styles from './styles.module.scss';
import Link from 'next/link';
//import Imagem from 'next/image';

export function Header(){
    return (
        <>
            <img src="/capa.png" alt="Capa"/>
            <div className={styles.lista}>
                <ul>
                    <li><strong><Link href='/'>HOME</Link></strong></li>
                    <div className={styles.linha}></div>
                    <li><strong><Link href='/biografia'>BIOGRAFIA</Link></strong></li>
                    <div className={styles.linha}></div>
                    <li><strong><Link href='/campanha'>CAMPANHAS PUBLICITÁRIAS</Link></strong></li>
                    <div className={styles.linha}></div>
                    <li><strong><Link href='/contato'>CONTATO</Link></strong></li>
                </ul>
            </div>
        </>
    )
}