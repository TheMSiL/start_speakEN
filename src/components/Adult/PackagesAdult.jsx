import { useState } from 'react';
import blue from '../../assets/list/list_pag-blue.svg';
import dark from '../../assets/list/list_pag-dark.svg';
import orange from '../../assets/list/list_pag-orange.svg';
import purple from '../../assets/list/list_pag-purple.svg';
import ContactForm from '../ContactForm';
import PackegesMobAdult from './PackegesMobAdult';

export const packages = [
	{
		color: '#99DBFE',
		textColor: 'inherit',
		img: blue,
		title: '"Групові"',
		price: '270 грн.',
		time: '80хв',
		list_items: [
			'36 уроків (1 семестр)',
			'Міні-група 4-8 учнів',
			'3-4 р/тиждень 8:00, 10:00, 15:00, 20:00',
			'Вихідні: 10:00 або 19:00',
			'Український викладач 65%',
			'Англомовний викладач 35%',
		],
		fullPrice: '9 720',
	},
	{
		color: '#A032C7',
		textColor: '#FFF',
		img: purple,
		title: '"Індивідуальні"',
		price: '550 грн',
		time: '60хв',
		list_items: [
			'36 уроків (1 семестр)',
			'2-4 рази на тиждень',
			'Графік по домовленості',
			'Українській викладач',
		],
		fullPrice: '19 800',
	},
	{
		color: '#534C72',
		textColor: '#FFF',
		img: dark,
		title: '"Парні уроки"',
		price: '600 грн',
		time: '60хв',
		list_items: [
			'36 уроків (1 семестр)',
			'2-4 рази на тиждень',
			'Графік по домовленості',
			'Українській викладач',
		],
		fullPrice: '21 600',
	},
	{
		color: '#FBA226',
		textColor: 'inherit',
		img: orange,
		title: '"Уроки з нейтів"',
		price: '750 грн',
		time: '60хв',
		list_items: [
			'12, 24 або 36 уроків',
			'2-4 рази на тиждень',
			'Графік по домовленості',
			'Англомовний викладач',
			'Індивідуальні або парні уроки',
		],
		fullPrice: '9000 - 18 000',
	},
];

const PackagesAdult = () => {
	const [showForm, setShowForm] = useState(false);
	return (
		<>
			<section className='py-[50px] sm:py-[110px] bg-[#FEFCFB]'>
				<div className='sm:max-w-[90%] mx-auto' id='packages'>
					<h2 className='section_title text-center sm:mb-[65px]'>
						Що ми пропонуємо?
					</h2>
					<PackegesMobAdult />
					<div className='sm:grid hidden grid-cols-pack justify-center justify-items-center gap-[65px] mb-20'>
						{packages.map(pack => (
							<div
								data-aos='zoom-in-down'
								data-aos-delay='300'
								key={pack.color}
								className='flex flex-col w-full lg:w-[454px] shadow_itemPack rounded-[20px] bg-[#F4F4F5] pt-[33px] pb-[45px] px-[42px] h-[725px]'
							>
								<div className='border-b border-b-[#B5b5b5] mb-[28px] h-[111px] flex flex-col items-center justify-center '>
									<h4 className='font-bold text-[34px] leading-[46px]'>
										{pack.title}
									</h4>
									<p className='font-medium text-[32px] leading-[46px]'>
										{pack.price}
										<span className='text-[24px] font-normal'>
											/{pack.time}
										</span>{' '}
									</p>
								</div>
								<ul className='flex flex-col flex-1 gap-[17px] text-[22px] leading-[28px]'>
									{pack.list_items.map(
										(item, index) =>
											item && (
												<li
													key={index}
													className='flex items-center gap-[17px] text-[22px] leading-[28px]'
												>
													<img src={pack.img} alt='icon' />
													{item}
												</li>
											)
									)}
								</ul>
								<div className='mt-auto'>
									<div className='pl-[33px] text-lg mb-5'>
										<p>
											<span className='font-bold text-[32px] leading-[28px]'>
												{pack.fullPrice}
											</span>{' '}
											/пакет
										</p>
										<p>
											+ {pack.title !== '"Уроки з нейтів"' ? '750' : '500'} грн
											за підручник
										</p>
										<p>(може бути розстрочка на два платежі)</p>
										{pack.title !== '"Уроки з нейтів"' ? (
											<p className='italic'>
												2 семестри - це 1 рівень англійської
											</p>
										) : null}
									</div>
									<button
										style={{ background: pack.color, color: pack.textColor }}
										onClick={() => setShowForm(!showForm)}
										className='cursor-pointer py-[13px] text-[22px] duration-300 hover:scale-95 font-bold h-[58px] text-center w-full rounded-[6px]'
									>
										Xочу навчатись
									</button>
								</div>
							</div>
						))}
					</div>
					<div className='rounded-[10px] mx-5 max-w-[980px] sm:mx-auto p-3 border-2  text-center border-[#99DBFE] text-lg sm:text-[21px] font-medium leading-6'>
						*Наші підручники розраховані на всі рівні англійської мови для
						дорослих від А0-С1.
					</div>
				</div>
			</section>
			{showForm && (
				<div className='overlay_w'>
					<span
						onClick={() => setShowForm(false)}
						className='absolute cursor-pointer top-10 right-10 font-semibold text-3xl text-white'
					>
						X
					</span>
					<ContactForm adult={true} setShowForm={setShowForm} />
				</div>
			)}
		</>
	);
};

export default PackagesAdult;
