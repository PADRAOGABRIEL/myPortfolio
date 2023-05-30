import './home.css'
import Foto from '../imgs/perfil/Foto.png'
import { Portifolio } from '../Portifólio/portifolio'
import { SobreMim  } from '../sobre mim/sobremim'
import { Projetos } from '../projetos/projetos'


export const Home = () => {
    return (
        <>
            <div className='nome-foto-geral'>
                <>
                    <div className='texto-foto'>
                        <h1>- Gabriel Padrão -</h1>
                        <p>Estudante de Ciência da Computação - CEFET/RJ</p>
                        <p>Desenvolvedor FullStack em Desenvolvimento</p>
                        <p>Apaixonado por tecnologia</p>
                    </div>
                    <img className='img-home' src={Foto} />
                </>
            </div>
            <SobreMim />
            <Portifolio />
            <Projetos />
        </>
    )
}