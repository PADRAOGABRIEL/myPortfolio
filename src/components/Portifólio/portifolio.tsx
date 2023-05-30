import './portifolio.css'
import Github from '../imgs/githublogo/Github.png'
import linkedin from '../imgs/linkedin/linkedin.png'

export const Portifolio = () => {
    return (
        <body>
            <div className='portifolio-geral'>
                <>
                    <div className='github-session'>
                        <a href="https://github.com/PADRAOGABRIEL">
                            <img src={Github} className='foto-git' />
                        </a>
                        <h1>Github em desenvolvimento constante...</h1>
                        <p>No meu GitHub tem diversos projetos que desenvolvi por meio de cursos, <br /> além de alguns repositórios que contam
                            com trabalhos que desenvolvi na faculdade.
                        </p>
                        <div className='lkdin-session'>
                            <a href="">
                                <img src={linkedin} className='foto-lkdin' />
                            </a>
                            <h1>Linkedin com meus certificados e atividades...</h1>
                            <p>No meu GitHub tem diversos projetos que desenvolvi por meio de cursos, <br /> além de alguns repositórios que contam
                                com trabalhos que desenvolvi na faculdade.
                            </p>
                        </div>

                    </div>

                    
                </>
            </div>
            <div className='projetos-session'>
                <h1>Projetos executados</h1>
            </div>
        </body>

    )
}