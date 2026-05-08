import { useState } from 'react'
import style from './FakeCheckout.module.css'
import { X, CheckCircle2, CreditCard } from 'lucide-react'

export default function FakeCheckout({ plano, onClose }) {
    const [success, setSuccess] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        
        // Simulação de processamento
        setTimeout(() => {
            setLoading(false)
            setSuccess(true)
        }, 2000)
    }

    if (success) {
        return (
            <div className={style.overlay}>
                <div className={style.checkoutCard}>
                    <div className={style.successMessage}>
                        <CheckCircle2 className={style.successIcon} />
                        <h2 className={style.title}>Pedido Confirmado!</h2>
                        <p className={style.subtitle}>
                            O seu plano <strong>{plano.nome}</strong> foi ativado com sucesso.
                            Aproveite a sua infraestrutura premium.
                        </p>
                        <button className={style.submitBtn} onClick={onClose}>
                            Aceder ao Painel
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className={style.overlay} onClick={(e) => e.target === e.currentTarget && onClose()}>
            <div className={style.checkoutCard}>
                <button className={style.closeBtn} onClick={onClose}>
                    <X />
                </button>
                
                <h2 className={style.title}>Checkout</h2>
                <p className={style.subtitle}>Complete o pagamento para ativar o seu serviço.</p>

                <div className={style.planSummary}>
                    <div className={style.planHeader}>
                        <span className={style.planName}>{plano.nome}</span>
                        <span className={style.planPrice}>€{plano.preco}/mês</span>
                    </div>
                </div>

                <form className={style.form} onSubmit={handleSubmit}>
                    <div className={style.fieldGroup}>
                        <label className={style.label}>Nome no Cartão</label>
                        <input 
                            type="text" 
                            className={style.input} 
                            placeholder="EX: JOÃO SILVA" 
                            required 
                        />
                    </div>

                    <div className={style.fieldGroup}>
                        <label className={style.label}>Número do Cartão</label>
                        <div style={{ position: 'relative' }}>
                            <input 
                                type="text" 
                                className={style.input} 
                                placeholder="0000 0000 0000 0000" 
                                maxLength="19"
                                required 
                            />
                            <CreditCard style={{ position: 'absolute', right: '12px', top: '12px', color: '#4a5568' }} size={20} />
                        </div>
                    </div>

                    <div className={style.row}>
                        <div className={style.fieldGroup}>
                            <label className={style.label}>Validade</label>
                            <input 
                                type="text" 
                                className={style.input} 
                                placeholder="MM/AA" 
                                maxLength="5"
                                required 
                            />
                        </div>
                        <div className={style.fieldGroup}>
                            <label className={style.label}>CVV</label>
                            <input 
                                type="text" 
                                className={style.input} 
                                placeholder="000" 
                                maxLength="3"
                                required 
                            />
                        </div>
                    </div>

                    <button type="submit" className={style.submitBtn} disabled={loading}>
                        {loading ? 'A Processar...' : `Pagar €${plano.preco}`}
                    </button>
                </form>
            </div>
        </div>
    )
}
