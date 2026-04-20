import style from './PlanSubscription.module.css'

export default function PlanSubscription() {
    return (
        <div className="PlanSubscription">
            <h1>Assinar Plano</h1>

            <div className={style["planSubscription-form"]}>
                <h2 className={style["planSubscription-title"]}>Dados para contratação</h2>
                <form className={style.form}>
                    <label htmlFor="nome">Nome Completo *</label>
                    <input
                        type="text"
                        name="nome"
                        id="nome"
                        max={35}
                        placeholder="Seu nome completo"
                        required />
                    <label htmlFor="email">Email *</label>
                    <input
                        type="email"
                        id='email'
                        placeholder='email@exemplo.com'
                        required />
                    <label htmlFor="tel">Telefone</label>
                    <input
                        type="tel"
                        name="tel"
                        id="tel"
                        placeholder='+351 900 010 020'
                        required />
                    <label htmlFor="doc">NIF/NIPC</label>
                    <input 
                    type="number"
                    name='doc'
                    id='doc'
                    placeholder='Número de Identificação Fiscal'
                    required />
                    <label htmlFor="subject">Forma de Pagamento *</label>
                            <select name="payment" id="payment" required>
                                <option value="">Selecione...</option>
                                <option value="cartao">Cartão de Crédito</option>
                                <option value="transf">Trasnferência Bancária</option>
                                <option value="mbway">MBWay</option>
                                <option value="mb">Referência MB</option>
                                <option value="paypal">Paypal</option>
                            </select>
                </form>
            </div>
        </div>
    )
}