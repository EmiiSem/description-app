import './TermCard.scss'

export const TermCard = ({ title, description }) => {
    return (
        <div className="term-card">
            <h2 className="term-card__title">{title}</h2>
            {
                description ? (<p className="term-card__description">{description}</p>)
                : null
            }
        </div>
    )
}