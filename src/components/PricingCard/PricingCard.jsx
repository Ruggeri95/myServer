import style from './PricingCard.module.css'
import { useNavigate } from 'react-router-dom'

export default function PricingCard({ plano, onSelect }) {
    return (
        <div className={`${style['pricing-card']} ${plano.destaque ? style['pricing-card--destaque'] : ''}`}>
            {plano.destaque && (
                <span className={style['pricing-card__badge']}>Mais Popular</span>
            )}
            <h2 className={style['pricing-card__nome']}>{plano.nome}</h2>
            <p className={style['pricing-card__descricao']}>{plano.descricao}</p>
            <p className={style['pricing-card__preco']}>
                <span className={style['pricing-card__valor']}>€{plano.preco}</span>
                /mês
            </p>
            <ul className={style['pricing-card__features']}>
                {plano.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                ))}
            </ul>
            <button
                className={style['pricing-card__cta']}
                onClick={() => onSelect(plano)}
            >
                Assinar Já
            </button>
        </div>
    )
}