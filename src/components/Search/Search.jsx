import './styles.css'

import { ReactComponent as SearchIcon } from '../../assets/img/ic-search.svg'
import { ReactComponent as CloseIcon } from '../../assets/img/ic-close-input.svg'

const Search = () => {
	return (

		<form action="" className="search">
			<input type="text" className="search__input" placeholder='Поиск' />
			<button className="search__btn">
				<SearchIcon />
				{false && <CloseIcon />}
			</button>
		</form>


	)
}

export default Search