import { useState, useEffect } from 'react'
import PricingCard from '../../components/PricingCard/PricingCard'
import style from './PlansPage.module.css'

export default function PlansPage() {
    const [planos, setPlanos] = useState([])
    const [loading, setLoading] = useState(true)
    const [erro, setErro] = useState(null)

    useEffect(() => {
        fetch('/dados.json')
            .then(res => {
                if (!res.ok) throw new Error('Erro ao carregar planos')
                return res.json()
            })
            .then(data => {
                setPlanos(data.planos)
                setLoading(false)
            })
            .catch(err => {
                setErro(err.message)
                setLoading(false)
            })
    }, [])

    if (loading) return <p>A carregar planos...</p>
    if (erro) return <p>Erro: {erro}</p>

    return (
        <div className={style.PlansPage}>
            <h1 className={style.title}>Escolha o seu plano</h1>
            <div className={style['plans-grid']}>
                {planos.map(plano => (
                    <PricingCard key={plano.id} plano={plano} />
                ))}
            </div>
        </div>
    )
}