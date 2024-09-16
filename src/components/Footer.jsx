import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/logo.svg';

const Footer = () => {
	const location = useLocation();
	const currentPath = location.pathname;
	const [visibleBlock, setVisibleBlock] = useState(null);

	useEffect(() => {
		if (visibleBlock) {
			const block = document.getElementById(visibleBlock);
			if (block) {
				block.scrollIntoView({ behavior: 'smooth' });
			}
			const resetVisibleBlock = () => setVisibleBlock(null);
			setTimeout(resetVisibleBlock, 500);
		}
	}, [visibleBlock]);
	return (
		<footer className='bg-[#F4f5f5] pt-[42px] lg:pt-[61px] pb-[36px] lg:pb-[56px] '>
			<div className='content flex lg:flex-row flex-col lg:gap-0 gap-10 sm:items-center justify-between pb-[45px]  border-b border-[#B5b5b5]'>
				<NavLink to='/'>
					<img loading='lazy' src={logo} alt='StartSpeakEN' />
				</NavLink>
				<nav>
					<ul className='flex sm:flex-row flex-col sm:items-center xl:gap-10 gap-5 sm:gap-3 md:gap-5 text-xl font-medium'>
						<li
							style={
								currentPath !== '/' && currentPath !== '/adult'
									? { display: 'none' }
									: {}
							}
							className='border-b-2 cursor-pointer hover:border-[#232020] border-b-transparent duration-300'
							onClick={() => setVisibleBlock('packages')}
						>
							<a>Курси</a>
						</li>
						<li className='border-b-2 hover:border-[#232020] border-b-transparent duration-300'>
							<a
								href='https://my.talken.cloud/student/registration/a92fca0b9fe1c4b12c8093aea33b9fdbe1577e3e'
								target='_blank'
							>
								Пройти тест
							</a>
						</li>
						<li className='border-b-2 hover:border-[#232020] border-b-transparent duration-300'>
							<NavLink to='/pay'>Оплата</NavLink>
						</li>
						<li className='border-b-2 hover:border-[#232020] border-b-transparent duration-300'>
							<NavLink to='/career'>Кар’єра</NavLink>
						</li>
						<li className='border-b-2 hover:border-[#232020] border-b-transparent duration-300'>
							<NavLink to='/contacts'>Контакти</NavLink>
						</li>
						<li className='border-b-2 hover:border-[#232020] border-b-transparent duration-300'>
							<NavLink to='/blog'>Корисне</NavLink>
						</li>
						<li className='sm:hidden block mt-5'>
							<a href='tel:+380678377966'>+38 (067) 837-79-66</a>
						</li>
					</ul>
				</nav>
				<div className='flex items-center gap-8'>
					<a
						href='https://www.facebook.com/profile.php?id=61562227280660'
						target='_blank'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='35'
							height='35'
							viewBox='0 0 35 35'
							fill='none'
						>
							<g clipPath='url(#clip0_1_3523)'>
								<path
									d='M34.186 17.093C34.186 7.65261 26.5334 0 17.093 0C7.65261 0 0 7.65261 0 17.093C0 25.6243 6.24972 32.6971 14.4214 33.9784V22.0335H10.0811V17.093H14.4214V13.3275C14.4214 9.04284 16.974 6.67767 20.8788 6.67767C22.7502 6.67767 24.7051 7.01194 24.7051 7.01194V11.2181H22.5501C20.4281 11.2181 19.7646 12.5349 19.7646 13.8871V17.093H24.5051L23.7479 22.0335H19.7646V33.9784C27.9363 32.6971 34.186 25.6243 34.186 17.093Z'
									fill='#A032C7'
								/>
								<path
									d='M23.7454 22.0336L24.5025 17.0931H19.7621V13.8872C19.7621 12.5349 20.423 11.2181 22.5476 11.2181H24.7026V7.012C24.7026 7.012 22.7476 6.67773 20.8763 6.67773C16.9715 6.67773 14.4189 9.0429 14.4189 13.3276V17.0931H10.0786V22.0336H14.4189V33.9785C15.29 34.1152 16.1814 34.1861 17.0905 34.1861C17.9996 34.1861 18.891 34.1152 19.7621 33.9785V22.0336H23.7454Z'
									fill='white'
								/>
							</g>
							<defs>
								<clipPath id='clip0_1_3523'>
									<rect width='34.186' height='34.186' fill='white' />
								</clipPath>
							</defs>
						</svg>
					</a>
					<a
						href='https://www.instagram.com/start.speakenglish/'
						target='_blank'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='36'
							height='35'
							viewBox='0 0 36 35'
							fill='none'
						>
							<g clipPath='url(#clip0_1_3526)'>
								<path
									d='M17.5203 34.186C27.1966 34.186 35.0407 26.5332 35.0407 17.093C35.0407 7.65281 27.1966 0 17.5203 0C7.84413 0 0 7.65281 0 17.093C0 26.5332 7.84413 34.186 17.5203 34.186Z'
									fill='#A032C7'
								/>
								<path
									d='M17.5203 8.27031C20.4664 8.27031 20.8142 8.28044 21.977 8.33362C23.0516 8.38173 23.6356 8.55646 24.0249 8.70333C24.5389 8.89832 24.9074 9.13129 25.2942 9.5086C25.6809 9.88592 25.9197 10.243 26.1196 10.7469C26.2701 11.1267 26.4492 11.6965 26.4986 12.7449C26.5505 13.8794 26.5634 14.2212 26.5634 17.0928C26.5634 19.9645 26.5531 20.3063 26.4986 21.4408C26.4492 22.4892 26.2701 23.0589 26.1196 23.4388C25.9197 23.9402 25.6809 24.2998 25.2942 24.6771C24.9074 25.0544 24.5415 25.2874 24.0249 25.4823C23.6356 25.6292 23.0516 25.804 21.977 25.8521C20.8142 25.9027 20.4664 25.9154 17.5203 25.9154C14.5743 25.9154 14.2265 25.9052 13.0637 25.8521C11.9891 25.804 11.4051 25.6292 11.0158 25.4823C10.5018 25.2874 10.1332 25.0544 9.7465 24.6771C9.35976 24.2998 9.12096 23.9427 8.9211 23.4388C8.77055 23.0589 8.59146 22.4892 8.54214 21.4408C8.49023 20.3063 8.47725 19.9645 8.47725 17.0928C8.47725 14.2212 8.48763 13.8794 8.54214 12.7449C8.59146 11.6965 8.77055 11.1267 8.9211 10.7469C9.12096 10.2455 9.35976 9.88592 9.7465 9.5086C10.1332 9.13129 10.4992 8.89832 11.0158 8.70333C11.4051 8.55646 11.9891 8.38173 13.0637 8.33362C14.2265 8.28297 14.5769 8.27031 17.5203 8.27031ZM17.5203 6.33057C14.525 6.33057 14.1487 6.34323 12.9728 6.39641C11.7996 6.44958 10.9976 6.62938 10.2942 6.8978C9.57 7.17382 8.95484 7.54101 8.33968 8.13863C7.72712 8.73625 7.34816 9.33641 7.06784 10.0454C6.7953 10.7292 6.60841 11.5117 6.55391 12.6588C6.4994 13.8059 6.48642 14.1731 6.48642 17.0954C6.48642 20.0176 6.4994 20.3848 6.55391 21.532C6.60841 22.6766 6.7927 23.459 7.06784 24.1453C7.35076 24.8518 7.72712 25.452 8.33968 26.0521C8.95225 26.6497 9.56741 27.0195 10.2942 27.2929C10.995 27.5588 11.797 27.7412 12.9728 27.7943C14.1487 27.8475 14.525 27.8602 17.5203 27.8602C20.5157 27.8602 20.892 27.8475 22.0679 27.7943C23.2411 27.7412 24.0431 27.5614 24.7465 27.2929C25.4707 27.0169 26.0859 26.6497 26.701 26.0521C27.3136 25.4545 27.6925 24.8543 27.9729 24.1453C28.2454 23.4616 28.4323 22.6791 28.4868 21.532C28.5413 20.3848 28.5543 20.0176 28.5543 17.0954C28.5543 14.1731 28.5413 13.8059 28.4868 12.6588C28.4323 11.5142 28.248 10.7317 27.9729 10.0454C27.6899 9.33894 27.3136 8.73878 26.701 8.13863C26.0884 7.54101 25.4733 7.17129 24.7465 6.8978C24.0457 6.63191 23.2437 6.44958 22.0679 6.39641C20.892 6.34323 20.5157 6.33057 17.5203 6.33057Z'
									fill='white'
								/>
								<path
									d='M17.5204 11.5674C14.3926 11.5674 11.8567 14.0414 11.8567 17.0929C11.8567 20.1443 14.3926 22.6183 17.5204 22.6183C20.6481 22.6183 23.184 20.1443 23.184 17.0929C23.184 14.0414 20.6481 11.5674 17.5204 11.5674ZM17.5204 20.6811C15.4906 20.6811 13.8424 19.0757 13.8424 17.0929C13.8424 15.1101 15.488 13.5046 17.5204 13.5046C19.5527 13.5046 21.1983 15.1101 21.1983 17.0929C21.1983 19.0757 19.5527 20.6811 17.5204 20.6811Z'
									fill='white'
								/>
								<path
									d='M23.4098 12.6386C24.1409 12.6386 24.7335 12.0604 24.7335 11.3471C24.7335 10.6339 24.1409 10.0557 23.4098 10.0557C22.6787 10.0557 22.086 10.6339 22.086 11.3471C22.086 12.0604 22.6787 12.6386 23.4098 12.6386Z'
									fill='white'
								/>
							</g>
							<defs>
								<clipPath id='clip0_1_3526'>
									<rect width='35.0407' height='34.186' fill='white' />
								</clipPath>
							</defs>
						</svg>
					</a>
				</div>
			</div>
			<div className='text-center mt-5'>
			Copyright ©2020-2024
			</div>
		</footer>
	);
};

export default Footer;
