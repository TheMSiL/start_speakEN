import { Outlet, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import { ScrollRestoration } from './components/ScrollRestoration';
import BackToTop from './components/BackToTop';

const Layout = () => {
	const location = useLocation();
	const currentPath = location.pathname;

	const headerStyle = currentPath === '/adult' ? 'white-header' : '';
	return (
		<ScrollRestoration>
			<div className='wrapper'>
				<Header bgStyle={headerStyle} />
				<Outlet></Outlet>
				<BackToTop/>
				<Footer />
			</div>
		</ScrollRestoration>
	);
};

export default Layout;
