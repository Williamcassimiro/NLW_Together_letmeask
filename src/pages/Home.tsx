

import { useHistory } from 'react-router-dom';


import illustrationImg from '../assets/images/illustration.svg';
import LogoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';


import {Button} from '../components/Button';



import "../styles/auth.scss";
import { useAuth } from '../Hooks/useAuth';
import { FormEvent, useState } from 'react';
import { database } from '../services/firebase';



export function Home() {

    const history = useHistory();
    const {user, signlnWithGoogle} = useAuth()
    const [roomCode, setRoomCode] = useState('');
    

    async function handLeCreateRoom() {
        if (!user) {
            await signlnWithGoogle()
        }

        history.push('/rooms/new');
  
    }

    async function handLeJoinRoom(event: FormEvent) {
        event.preventDefault();

        if (roomCode.trim() === ''){
            return;
        }

        const roomRef = await database.ref(`rooms/${roomCode}`).get();

        if (!roomRef.exists()){
            alert('Room does not exists.');
            return;
        }

        history.push(`/rooms/${roomCode}`);
    }

    return(
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as duvidas da sua audiência em tempo-real</p>
            </aside>
            <main>
                
                <div className='main-content'>
                    <img src={LogoImg} alt="Letmeask" />
                    <button  onClick={handLeCreateRoom} className="create-room">
                        <img src={googleIconImg} alt="Logo do Google" />
                        Crie sua sala com o Google
                    </button>
                    <div className="separator">ou entre em uma sala</div>
                    <form  onSubmit = {handLeJoinRoom}>
                        <input 
                    
                            type="text"
                            placeholder="Digite o codigo da sala"
                            onChange = {event => setRoomCode(event.target.value)}
                            value = {roomCode}
                         />
                         <Button type="submit">
                             Entrar na sala
                         </Button>
                    </form>
                </div>
            </main>
        </div>
    )
}