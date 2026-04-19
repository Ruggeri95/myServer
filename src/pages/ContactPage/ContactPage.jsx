import style from './ContactPage.module.css'
import alemanha from '../../assets/img/alemanha.jpg'
import brasil from '../../assets/img/brasil.jpg'
import australia from '../../assets/img/australia.jpg'
import canada from '../../assets/img/canada.jpg'

export default function ContactPage() {
    return (
        <div className={style.ContactPage}>
            <h1 className={style.title}>Contato</h1>
            <div className={style['contact-top']}>
                <div className={style['contact-info']}>
                    <h2 className={style['contact-info__title']}>Fale Connosco</h2>
                    <p className={style['contact-info__text']}>
                        Tem dúvidas em relação a algum plano ou precisa de ajuda?
                        A nossa equipa está disponível para o ajudar.
                    </p>
                    <ul className={style['contact-info__list']}>
                        <li>suporte@myserver.pt</li>
                        <li>+351 210 000 000</li>
                        <li>Águeda, Portugal</li>
                        <li>Seg–Sex: 9h–18h</li>
                    </ul>
                </div>
                <div className={style['contact-map']}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3030.510495770118!2d-8.446004723977!3d40.57448584602268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd230982ea9570a1%3A0x15e2e89202d3bff4!2sEscola%20Superior%20de%20Tecnologia%20e%20Gest%C3%A3o%20de%20%C3%81gueda!5e0!3m2!1spt-PT!2spt!4v1776607991864!5m2!1spt-PT!2spt"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </div>
            <div className={style['contact-forms']}>
                <h2 className={style['contact-forms__title']}>Enviar Mensagem</h2>
                <form className={style.form} onSubmit={(e) => e.preventDefault()}>
                    <div className={style['form-row']}>
                        <div className={style['form-group']}>
                            <label htmlFor="name">Nome *</label>
                            <input type="text" name="name" id="name" placeholder="O seu nome" required />
                        </div>
                        <div className={style['form-group']}>
                            <label htmlFor="email">Email *</label>
                            <input type="email" name="email" id="email" placeholder="email@exemplo.com" required />
                        </div>
                        <div className={style['form-group']}>
                            <label htmlFor="subject">Assunto *</label>
                            <select name="subject" id="subject" required>
                                <option value="">Selecione o assunto...</option>
                                <option value="Duvida">Dúvida Geral</option>
                                <option value="Suporte">Suporte Técnico</option>
                                <option value="Faturacao">Faturação</option>
                                <option value="Cancelamento">Cancelamento</option>
                                <option value="Parceria">Parceria</option>
                            </select>
                        </div>
                    </div>
                    <div className={style['form-group']}>
                        <label htmlFor="msg">Mensagem *</label>
                        <textarea name="msg" id="msg" placeholder="Descreva a sua questão..." required />
                    </div>
                    <button type="submit" className={style['form-btn']}>Enviar Mensagem</button>
                </form>
            </div>
            <div className={style['location-office']}>
                <h2 className={style['location-office__title']}>Localização dos nossos escritórios</h2>
                <div className={style['location-office__grid']}>
                    <div className={style['location-office__city']}>
                        <img src={alemanha} alt="Office Alemanha" />
                        <h3>Frankfurt, Alemanha</h3>
                        <p>Mainzer Landstraße 181, 60327</p>
                    </div>
                    <div className={style['location-office__city']}>
                        <img src={brasil} alt="Office Brasil" />
                        <h3>São Paulo, Brasil</h3>
                        <p>Avenida Paulista 4500, 04538-133</p>
                    </div>
                    <div className={style['location-office__city']}>
                        <img src={canada} alt="Office Canadá" />
                        <h3>Toronto, Canadá</h3>
                        <p>Bay Street 161, M5J 2S1</p>
                    </div>
                    <div className={style['location-office__city']}>
                        <img src={australia} alt="Office Austrália" />
                        <h3>Melbourne, Austrália</h3>
                        <p>Collins Street 530, VIC 3000</p>
                    </div>
                </div>
            </div>
        </div>
    )
}