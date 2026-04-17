import style from './HomePage.module.css'
import security from '../../assets/img/security.png'
import velocity from '../../assets/img/dashboard.png'
import support from '../../assets/img/support.png'
import { Link, useNavigate } from 'react-router-dom'


export default function HomePage() {
    const navigate = useNavigate()

    return (
        <div className={style.HomePage}>
            <div id="page-home" className={style['page-active']}>
                <div className={style['site-wrapper']}>
                    <div className={style.hero}>
                        <h1>Hospedagem Rápida e Confiável</h1>
                        <p>Servidores de alta performance para o seu negócio. Escolha o plano ideal e comece agora mesmo com total segurança.</p>
                        <Link className={style.hero__cta} to="/plans">Ver Planos</Link>
                    </div>
                    <div className={style.features}>
                        <div className={style['feature-card']}>
                            <div className={style['feature-card__icon']}><img src={velocity} alt="Segurança" /></div>
                            <h3>Alta Velocidade</h3>
                            <p>Infraestrutura otimizada para máxima performance com SSD NVMe e CDN global.</p>
                        </div>
                        <div className={style['feature-card']}>
                            <div className={style['feature-card__icon']}><img src={security} alt="Segurança" /></div>
                            <h3>Segurança Total</h3>
                            <p>SSL gratuito, backups diários automáticos e proteção DDoS incluídos em todos os planos.</p>
                        </div>
                        <div className={style['feature-card']}>
                            <div className={style['feature-card__icon']}><img src={support} alt="Segurança" /></div>
                            <h3>Suporte 24/7</h3>
                            <p>Equipa técnica especializada disponível a qualquer hora para resolver os seus problemas.</p>
                        </div>
                    </div>
                    <div className={style.metrics}>
                        <div className={style['metrics-container']}>
                            <h1 className={style['metrics-container__title']}>4M+</h1>
                            <p className={style['metrics-container__text']}>Clientes confiam na MyServer</p>
                        </div>
                        <div className={style['metrics-container']}>
                            <h1 className={style['metrics-container__title']}>150+</h1>
                            <p className={style['metrics-container__text']}>Países atendidos</p>
                        </div>
                        <div className={style['metrics-container']}>
                            <h1 className={style['metrics-container__title']}>20+</h1>
                            <p className={style['metrics-container__text']}>Anos de experiência</p>
                        </div>
                        <div className={style['metrics-container']}>
                            <h1 className={style['metrics-container__title']}>10M+</h1>
                            <p className={style['metrics-container__text']}>Sites criados conosco</p>
                        </div>
                    </div>
                    <div className={style['contact-us__container']}>
                        <div className={style['contact-us']}>
                            <h1 className={style['contact-us__title']}>Não sabe que plano escolher?</h1>
                            <p className={style['contact-us__text']}>O nosso time de consultores está aqui para o ajudar a encontrar o melhor pacote para o seu projeto.</p>
                            <button className={style['contact-us__btn']} onClick={() => navigate('/contact')}>Entre em contato</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}