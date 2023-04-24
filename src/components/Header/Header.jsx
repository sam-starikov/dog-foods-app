import './styles.css'

import Logo from '../Logo/Logo'
import Search from '../Search/Search'


const Header = () => {
	return (

		<header className='header'>
			<div className="container">
				<div className="header__wrapper">
					<Logo />
					<Search />
				</div>
			</div>
		</header>


	)
}

export default Header