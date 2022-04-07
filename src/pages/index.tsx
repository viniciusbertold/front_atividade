import style from '../styles/styles.module.scss';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
//import Imagem from 'next/image';

export default function Home() {
  return (
    <>
      <div className={style.subtitulo}>
        <h1>Modelo</h1>
        <h4>Anna Bella</h4>
      </div>
      <div className={style.conteudo}>
        <p>It is a long established fact that a reader will be distracted by the 
          readable content of a page when looking at its layout. The point of 
          using Lorem Ipsum is that it has a more-or-less normal distribution of 
          letters, as opposed to using Content here, content here, making it look 
          like readable English. Many desktop publishing packages and web page editors 
          now use Lorem Ipsum as their default model text, and a search for lorem ipsum 
          will uncover many web sites still in their infancy. </p>
      </div>
      <br></br>
      <div className='carousel-wrapper'>
        <Carousel>
          <div>
            <img src='/foto1.png' alt='Foto 1'/>
          </div>
          <div>
            <img src='/foto2.png' alt='Foto 2'/>
          </div>
          <div>
            <img src='/foto3.png' alt='Foto 3'/>
          </div>
        </Carousel>
      </div>
      <div className={style.conteudo}>
        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of 
        classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a 
        Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin 
        words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical 
        literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de 
        Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a 
        treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 
        Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.</p>
      </div>
      
    </>
  )
}
