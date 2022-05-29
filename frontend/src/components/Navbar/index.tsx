import { ReactComponent as GithubIcon } from 'assets/img/clapperboard-solid.svg';
import './styles.css';

function Navbar() {

    return (
        <header>
            <nav className="container">
                <div className="dsmovie-nav-content">
                    <h1>Avaliar Filmes</h1>
                    <a href="https://www.itaguari.com.br/categoria/cinema/">
                        <div className="dsmovie-contact-container">
                            <GithubIcon />
                            <p className="dsmovie-contact-link">/Filmes em Cartaz</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;