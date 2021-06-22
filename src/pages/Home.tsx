import illustrationImg from '../assets/images/illustration.svg';
import LogoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';


import {Button} from '../components/Button';

import "../styles/auth.scss";

export function Home() {
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
                    <button className="create-room">
                        <img src={googleIconImg} alt="Logo do Google" />
                        Crie sua sala com o Google
                    </button>
                    <div className="separator">ou entre em uma sala</div>
                    <form >
                        <input 
                    
                            type="text"
                            placeholder="Digite o codigo da sala"
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