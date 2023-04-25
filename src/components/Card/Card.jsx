import './styles.css'

import save from '../../assets/img/save.svg'




const Card = ({ name, price, discount, wight, picture, description }) => {
	const discountPrice = Math.round(price - price * discount / 100)
	return (

		<div className="card">
			<div className="card__sticky card__sticky_type_top-left">
				{discount !== 0 && <span className="card__discount">{`-${discount}%`}</span>}
			</div>
			<div className="card__sticky card__sticky_type_top-right">
				<button className="card__favorite">
					<img className="card__favorite-icon" src={save} alt="Иконка: Добавить в избранное" />
				</button>
			</div>
			<a href="/products" className="card__link">
				<img src={picture} alt={description} className="card__image" />
				<div className="card__desc">
					<span className={discount !== 0 ? "card__old-price" : "card__price"}>{price}&nbsp;₽</span>
					{discount !== 0 && <span className="card__price card__price_type_discount">{discountPrice}&nbsp;₽</span>}
					<span className="card__wight">{wight}</span>
					<p className="card__name">{name}</p>
				</div>
			</a>
			<a href="#" className="card__cart btn btn_type_primary">В корзину</a>
		</div >
	)
}

export default Card