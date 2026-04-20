import { useState, useEffect } from 'react'
import PricingCard from '../../components/PricingCard/PricingCard'
import style from './PlansPage.module.css'
import {Globe, Mail, Gamepad2,Computer,Search} from 'lucide-react'

const categorias = [
    { valor: 'todos',    label: 'Todos',            icone: <Search /> },
    { valor: 'servidor', label: 'Alojamento Web',   icone: <Globe /> },
    { valor: 'email',    label: 'Email Comercial',  icone: <Mail /> },
    { valor: 'jogo',     label: 'Servidores Jogo',  icone: <Gamepad2 /> },
    { valor: 'site',     label: 'Criador de Sites', icone: <Computer /> },
]

export default function PlansPage() {
    const [planos, setPlanos] = useState([])
    const [filtro, setFiltro] = useState('todos')
    const [loading, setLoading] = useState(true)
    const [erro, setErro] = useState(null)

    useEffect(() => {
        fetch(import.meta.env.BASE_URL + 'dados.json')
            .then(res => res.json())
            .then(data => {
                setPlanos(data.planos)
                setLoading(false)
            })
            .catch(err => {
                setErro(err.message)
                setLoading(false)
            })
    }, [])

    const planosFiltrados = filtro === 'todos'
        ? planos
        : planos.filter(p => p.tipo === filtro)

    if (loading) return <p className={style.loading}>A carregar planos...</p>
    if (erro) return <p className={style.erro}>Erro: {erro}</p>

    return (
        <div className={style.PlansPage}>
            <div className={style.hero}>
                <h1 className={style.hero__title}>
                    Lance online: planos e<br />serviços acessíveis
                </h1>

                <div className={style['filter-bar']}>
                    {categorias.map(cat => (
                        <button
                            key={cat.valor}
                            className={`${style['filter-btn']} ${filtro === cat.valor ? style['filter-btn--active'] : ''}`}
                            onClick={() => setFiltro(cat.valor)}
                        >
                            {cat.icone} {cat.label}
                        </button>
                    ))}
                </div>
            </div>

            <div className={style.content}>
                <h2 className={style['section-title']}>
                    {categorias.find(c => c.valor === filtro)?.label}
                </h2>

                <div className={style['plans-grid']}>
                    {planosFiltrados.map(plano => (
                        <PricingCard key={plano.id} plano={plano} />
                    ))}
                </div>
            </div>

            
        </div>
    )
}