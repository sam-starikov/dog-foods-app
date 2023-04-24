import './styles.css'

import logo from '../../assets/img/logo.svg'

const Logo = () => {
	return (

		<a href="/" className='logo'>
			<img src={logo} alt="Логотип компании: Собака держит кость в пасти" />
		</a>

	)
}

export default Logo