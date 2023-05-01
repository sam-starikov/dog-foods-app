import './styles.css'

import { ReactComponent as SearchIcon } from '../../assets/img/ic-search.svg'
import { ReactComponent as CloseIcon } from '../../assets/img/ic-close-input.svg'

const Search = ({ onSubmit, onInput }) => {

	const handleInput = (e) => {
		onInput(e.target.value)
	}

	return (
		<form action="" className="search" onSubmit={onSubmit}>
			<input type="text" className="search__input" placeholder='Поиск' onInput={handleInput} />
			<button className="search__btn">
				<SearchIcon />
				{false && <CloseIcon />}
			</button>
		</form>
	)
}

export default Search