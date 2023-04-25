import './styles.css'

/* COMPONENTS */
import Header from '../Header/Header'
import CardList from '../CardList/CardList'


const App = () => {
	return (

		<>
			<Header />
			<main className="content container">
				{/* Sort */}
				<div className="content__cards">
					<CardList />
				</div>
			</main>
			{/* Footer */}
		</>
	)
}

export default App