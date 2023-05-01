import './styles.css'

/* COMPONENTS */
import Card from '../Card/Card'

const CardList = ({ goods }) => {

	return (
		<div className='cards'>
			{goods.map((item, index) => <Card key={index.toString()}  {...item} />)}
		</div>
	)
}

export default CardList