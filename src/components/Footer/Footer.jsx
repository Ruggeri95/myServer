// Footer.jsx
import style from './Footer.module.css'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className={style.footer}>
            <div className={style['footer__container']}>

                <div className={style['footer__brand']}>
                    <h2 className={style['footer__logo']}>MyServer</h2>
                    <p className={style['footer__about']}>
                        A MyServer é uma empresa portuguesa de hospedagem web
                        com mais de 20 anos de experiência. Oferecemos soluções
                        de alta performance para empresas de todos os tamanhos.
                    </p>
                    <p className={style['footer__slogan']}>
                        "Performance que o seu negócio merece."
                    </p>
                </div>

                <div className={style['footer__col']}>
                    <h3 className={style['footer__col-title']}>Navegação</h3>
                    <ul className={style['footer__links']}>
                        <li><Link to="/">Início</Link></li>
                        <li><Link to="/plans">Planos</Link></li>
                        <li><Link to="/contact">Contato</Link></li>
                    </ul>
                </div>

                <div className={style['footer__col']}>
                    <h3 className={style['footer__col-title']}>Contacto</h3>
                    <ul className={style['footer__contact']}>
                        <li>suporte@myserver.pt</li>
                        <li>+351 210 000 000</li>
                        <li>Águeda, Portugal</li>
                        <li>Seg–Sex: 9h–18h</li>
                    </ul>
                </div>

                <div className={style['footer__col']}>
                    <h3 className={style['footer__col-title']}>Certificações</h3>
                    <ul className={style['footer__badges']}>
                        <li>SSL Certificado</li>
                        <li>99.9% Uptime</li>
                        <li>Proteção DDoS</li>
                        <li>Pagamento Seguro</li>
                    </ul>
                </div>

            </div>

            <div className={style['footer__social']}>
                <a href="#" aria-label="Twitter">𝕏</a>
                <a href="#" aria-label="LinkedIn">in</a>
                <a href="#" aria-label="GitHub">⌥</a>
                <a href="#" aria-label="Instagram">◈</a>
            </div>

            <div className={style['footer__bottom']}>
                <p>© 2025 MyServer. Todos os direitos reservados. | NIF: 123 456 789</p>
                <div className={style['footer__legal']}>
                    <a href="#">Política de Privacidade</a>
                    <a href="#">Termos de Serviço</a>
                    <a href="#">Cookies</a>
                </div>
            </div>
        </footer>
    )
}