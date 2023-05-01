import './styles.css'

/* COMPONENTS */
import Header from '../Header/Header'
import CardList from '../CardList/CardList'
import Logo from '../Logo/Logo'
import Search from '../Search/Search'
import Footer from '../Footer/Footer'

/* OTHER */
import { useEffect, useState } from 'react'
import data from '../../assets/data.json'
import SearchInfo from './SearchInfo/SearchInfo'




const App = () => {
	const [cards, setCards] = useState(data)
	const [searchQuery, setSearchQuery] = useState('')

	const handleRequest = () => {
		const filteredRequest = data.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()))
		setCards(filteredRequest)
	}

	useEffect(() => {
		handleRequest()
	}, [searchQuery])

	const handleFormSubmit = (e) => {
		e.preventDefault()
		handleRequest()
	}

	const handleInputChange = (inputValue) => {
		setSearchQuery(inputValue)
	}

	return (
		<>
			<Header>
				<>
					<Logo />
					<Search onSubmit={handleFormSubmit} onInput={handleInputChange} />
				</>
			</Header>

			<main className="content container">
				<SearchInfo searchCounter={cards.length} searchText={searchQuery} />
				{/* Sort */}
				<div className="content__cards">
					<CardList goods={cards} />
				</div>
			</main >
			<Footer />
		</>
	)
}

export default App