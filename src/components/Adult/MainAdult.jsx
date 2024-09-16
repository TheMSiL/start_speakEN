import { NavLink } from 'react-router-dom';
import main_img from '../../assets/adult/main_img.png';
import list_item from '../../assets/list/list_pag-orange.svg';

const advantages = [
	'Хочеш підвищити свій рівень англійської мови?',
	'Xотілось би працювати на іноземну компанію?',
	'Треба покращити ділову англійську?',
	'Просто вчиш мови як хобі та тренуєш пам’ять?',
	'Маєш стосунки і єдина мова що вас об’єднує це англійська?',
	'Просто переїзжаєте жити в іншу країну де говорять англійськю теж?',
	'Або може ви держслужбовець?',
];

export const forWhoAdult = [
	{
		text: 'Для дітей',
		color: '#FBA226',
		to: '/',
	},
	{
		text: 'Для дорослих',
		color: '#A032C7',
		to: '/adult',
	},
	{
		text: 'Для компаній',
		color: '#99DBFE',
		to: '/companies',
	},
];

const MainAdult = () => {
	return (
		<section className='relative pb-[11px] sm:pb-[118px] bg-[#F4F5F5]'>
			<div className='content flex lg:flex-row flex-col-reverse sm:flex-col justify-between gap-5'>
				<div className='w-full lg:w-auto' data-aos='zoom-in'>
					<h1 className='3xl:text-[60px] sm:text-[50px] text-[38px] font-bold max-w-[764px]  mb-[25px]'>
						Онлайн курси англійської мови для дорослих в школі
						<span className='sm:text-[56px] text-[40px] sm:inline block ml-1 font-bold text-[#A032C7] leading-[70px]'>
							«StartSpeakEn»
						</span>{' '}
					</h1>
					<p className='sm:text-[30px] text-[26px] font-bold mb-[33px]'>
						Набір іде постійно від Beginner до Advanced
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
					<div className='rounded-[10px] p-3 border-2 mb-10 text-center border-[#99DBFE] text-lg lg:text-[21px] font-medium leading-6'>
						Які б не були твої цілі, за допомогою наших курсів вони будуть
						досягнені
					</div>
				</div>
				<div className='grid justify-between'>
					<div
						className='mb-6 lg:mb-[74px] flex items-center justify-start'
						data-aos='zoom-in'
					>
						<img loading='lazy' src={main_img} />
					</div>
					<div className='flex items-center mt-auto 2xl:flex-nowrap flex-wrap justify-center gap-[20px]'>
						{forWhoAdult.map(item => (
							<NavLink
								key={item.text}
								to={item.to}
								className='nav-linkAdult'
								style={{
									borderColor: item.color,
									background:
										item.text === 'Для дорослих' ? 'transparent' : item.color,
								}}
							>
								{item.text}
							</NavLink>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default MainAdult;
