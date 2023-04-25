import './styles.css'
import data from '../../assets/data.json'

/* COMPONENTS */
import Card from '../Card/Card'





const CardList = () => {

	return (
		<div className='cards'>
			{data.map(item => <Card  {...item} />)}


		</div>


	)
}

export default CardList