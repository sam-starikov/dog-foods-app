import './styles.css'

const SearchInfo = ({ searchText, searchCounter }) => {
	return (
		searchText && <section className='search-title'>
			По запросу <span>{searchText}</span> найдено {searchCounter} товаров
		</section>
	)
}

export default SearchInfo