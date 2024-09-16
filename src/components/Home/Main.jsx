import { NavLink } from 'react-router-dom';
import list_item from '../../assets/list/list_pag-orange.svg';
import adult from '../../assets/main/adult.svg';
import children from '../../assets/main/children.svg';
import company from '../../assets/main/company.svg';
import main_img from '../../assets/main/main_img.png';
import aqua_vector from '../../assets/side_vectors/vector_aqua.svg';

const advantages = [
	'Цікаво',
	'Захоплююче',
	'Легко для сприймання',
	'Сучасний підхід до навчання',
	'Інтерактивна платформа TalkEn.Cloud',
	'Всі підручники рівня CEFR',
];

export const forWho = [
	{
		img: children,
		text: 'Для дітей',
		color: '#FBA226',
		to: '/',
	},
	{
		img: adult,
		text: 'Для дорослих',
		color: '#E2D1BA',
		to: '/adult',
	},
	{
		img: company,
		text: 'Для компаній',
		color: '#99DBFE',
		to: '/companies',
	},
];

const Main = () => {
	return (
		<section className='relative pb-[11px] sm:pb-[118px]'>
			<img
				src={aqua_vector}
				className='absolute hidden sm:block right-0 top-[35%] lg:top-[50%]'
			/>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='52'
				height='54'
				viewBox='0 0 52 54'
				fill='none'
				className='sm:hidden absolute right-0 top-[20%]'
			>
				<path
					d='M4.65758 14.9429L0.931123 19.8759L4.83017 23.1779L1.97589 27.4106L5.87494 30.7126L3.02144 34.9509L6.92049 38.2529L4.06621 42.4856L7.96604 45.7933L5.11254 50.0316L10.0414 53.7701L114.318 39.3111L108.934 0.483942L4.65758 14.9429Z'
					fill='#23BEC0'
				/>
			</svg>
			<div className='content flex lg:flex-row flex-col-reverse sm:flex-col items-center justify-between gap-5'>
				<div className='w-full lg:w-auto' data-aos='zoom-in'>
					<h1 className='3xl:text-[60px] sm:text-[50px] text-[40px] font-bold lg:max-w-[586px] mb-[25px]'>
						Online Школа Англійської Мови{' '}
						<span className='sm:text-[56px] text-[40px] font-bold text-[#A032C7] leading-[70px]'>
							«StartSpeakEn»
						</span>{' '}
					</h1>
					<p className='sm:text-[34px] text-[26px] font-medium mb-[33px]'>
						Для дітей <span className='font-bold'> 6-17</span> років
					</p>
					<div className='rounded-[10px] p-3 border-2 mb-10 text-start w-fit border-[#99DBFE] sm:text-[30px] text-[22px] font-semibold leading-6'>
						Набір іде кожні два місяці
					</div>
					<p className='text-xl sm:text-2xl font-bold mb-5'>
						Групові заняття, де урок проходить
					</p>
					<ul className='flex flex-col gap-3 text-xl sm:text-[22px] leading-[30px] sm:leading-[34px] mb-11'>
						{advantages.map(item => {
							return (
								<li key={item} className='flex items-center gap-4'>
									{' '}
									<img src={list_item} /> {item}
								</li>
							);
						})}
					</ul>
				</div>
				<div>
					<div
						data-aos='zoom-in'
						className='mb-6 lg:mb-[74px] flex items-center justify-end'
					>
						<img src={main_img} />
					</div>
					<div className='flex items-center 2xl:flex-nowrap flex-wrap justify-center gap-[20px]'>
						{forWho.map(item => (
							<NavLink
								to={item.to}
								key={item.text}
								className='rounded-[14px] 2xl:w-[290px] w-[280px] border-4 hidden lg:flex items-center'
								style={{ borderColor: item.color, background: item.color }}
							>
								<div
									className='py-[11px] px-[20px] flex items-center justify-center w-[100px] rounded-[14px]'
									style={{ backgroundColor: item.color }}
								>
									<img src={item.img} alt={item.text} />
								</div>
								<div className='forWho_item w-full'>{item.text}</div>
							</NavLink>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Main;
