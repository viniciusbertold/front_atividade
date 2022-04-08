//import Imagem from 'next/image';
import {FaMobileAlt} from 'react-icons/fa';
import {FaPhone} from 'react-icons/fa';
import Modal from 'react-modal';
import { useState } from 'react';
import styles from './styles.module.scss';
export default function contato(){
    const [modalIsOpen, setIsOpen] = useState<boolean>(false)
    function openModal(){
        setIsOpen(true);
    }

    function closeModal(){
        setIsOpen(false);
    }

    const handleOpen = (e) =>{
        e.preventDefault()
        openModal()
    }
    const handleClose = (e) =>{
        closeModal()
    }
    return (
        <>
        <Modal
        isOpen={modalIsOpen}
        className={styles.modal}
        >
            <div className={styles.modalContainer}>
                <label>EMAIL: </label><br></br>
                <input type='email' /><br></br><br></br>
                <label>PROPOSTA: </label><br></br>
                <input type='text' /><br></br><br></br>
                <button onClick={e => handleClose(e)}>Enviar proposta</button>
            </div>
            
        </Modal>
            <div className={styles.container}>
                <h2>Contato</h2>
                <br></br>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed augue vel nisl 
                    sagittis tempor quis ac lacus. Praesent efficitur laoreet venenatis. Donec sagittis 
                    diam in lorem ornare, quis placerat magna consectetur.
                </p>
                <br></br>
                <img src='/foto3.png' alt='foto3'/>
                <br></br>
                <br></br>
                <p>
                    In hac habitasse platea dictumst. Pellentesque ornare velit orci, eget hendrerit quam 
                    ultrices vitae. Fusce quis ipsum felis. Donec bibendum volutpat pulvinar.
                </p>
                <br></br>
                <h4>Lorem Ipsum</h4>
                <br></br>
                <p>
                    Duis ipsum diam, ultricies iaculis dui vitae, vulputate cursus orci. 
                    Suspendisse quis eleifend elit. Praesent pulvinar lorem sapien, in 
                    commodo nulla rutrum id. Integer viverra arcu ut fringilla bibendum. In 
                    hac habitasse platea dictumst. 
                </p>
                <br></br>
                <strong>
                    <span><FaMobileAlt/>: (99) 99999 - 9999</span><br></br><br></br>
                    <span><FaPhone/>: (99) 9999 - 9999</span><br></br><br></br>
                    <button onClick={e => handleOpen(e)}>Contatar</button>
                </strong>
                

            </div>
        </>
    )
}