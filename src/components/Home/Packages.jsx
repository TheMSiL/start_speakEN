import { useState } from 'react';

import ContactForm from '../ContactForm';
import PackagesItemsMob from './PackagesItemsMob';

import aqua from '../../assets/list/list_pag-auqa.svg';
import blue from '../../assets/list/list_pag-blue.svg';
import brown from '../../assets/list/list_pag-brown.svg';
import orange from '../../assets/list/list_pag-orange.svg';
import purple from '../../assets/list/list_pag-purple.svg';

const Packages = () => {
	const [showForm, setShowForm] = useState(false);

	return (
		<>
			<section className='sm:pt-[56px] pt-[36px] pb-[55px] sm:pb-[128px] bg-[#FEFCFB]'>
				<div className='sm:max-w-[90%] mx-auto' id='packages'>
					<h2 className='section_title text-center sm:mb-[42px]'>
						Що ми пропонуємо?
					</h2>
					<div className='gap-[37px] hidden sm:flex items-center justify-center flex-wrap'>
						<div
							data-aos='zoom-in-up'
							className='shadow_item grid lg:justify-between 1500:w-[454px] lg:w-[400px] w-full lg:items-start items-center h-[633px] px-[22px] pb-[30px] rounded-[20px] bg-[#FEFCFB]'
						>
							<div className='2xl:h-[130px] h-[147px] lg:grid justify-center'>
								<div className='w-[251px] mx-auto h-[38px] flex items-center justify-center gap-1 text-xl bg-[#F89D18] rounded-packages'>
									Починаємо <span className='font-medium'>30.10.2024</span>
								</div>
								<h5 className='1500:text-[32px] text-[28px] lg:my-0 my-6 text-center leading-[28px] font-bold mx-auto w-fit'>
									«Стандарт»
								</h5>
								<span className='block h-[1px] 1500:w-[370px] lg:w-[340px] mt-auto bg-[#B5B5B5] mx-auto'></span>
							</div>
							<ul className='flex flex-col items-start gap-[17px] '>
								<li className='flex items-center gap-[17px] text-[22px] leading-[28px]'>
									<img src={orange} />
									32 заняття по 60 хв.
								</li>
								<li className='flex items-center gap-[17px] text-[22px] leading-[28px]'>
									<img src={orange} />2 рази на тиждень
								</li>
								<li className='flex items-center gap-[17px] text-[22px] leading-[28px]'>
									<img src={orange} />
									Міні група 4-6 учнів
								</li>
								<li className='flex items-center gap-[17px] text-[22px] leading-[28px]'>
									<img src={orange} />
									Український викладач
								</li>
							</ul>
							<div className='mt-auto'>
								<div className='flex items-start gap-[71px] mb-5 pl-[9px]'>
									<div>
										<p className='text-lg'>
											<span className='1500:text-[30px] text-2xl font-bold'>
												{' '}
												9250 ₴
											</span>{' '}
											/семестр
										</p>
										<p className='mt-[5px] text-lg'>+750 грн. підручник</p>
									</div>
									<div className='relative text-lg'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='75'
											height='30'
											viewBox='0 0 75 30'
											fill='none'
											className='absolute left-[-10px]'
										>
											<path d='M1 28.5L74 1' stroke='#E40404' strokeWidth='2' />
										</svg>
										9720 ₴
									</div>
								</div>
								<p className='text-[#F89D18] text-center px-[20px] font-medium '>
									Набір кожного місяця
								</p>
								<p className='mb-5 italic text-center text-[#a032c7]'>
									Може бути розстрочка на два платежі
								</p>
								<button
									onClick={() => setShowForm(!showForm)}
									className='text-[22px] cursor-pointer block mt-10 lg:mt-auto font-bold w-full sm:w-1/2 mx-auto lg:w-full text-center pt-[13px] pb-[18px] rounded-[6px] bg-[#F89D18] duration-300 hover:bg-[#f1ae49]'
								>
									Залишити заявку
								</button>
							</div>
						</div>
						<div
							data-aos='zoom-in-up'
							data-aos-delay='500'
							className='shadow_item grid lg:justify-between 1500:w-[454px] lg:w-[400px] w-full lg:items-start items-center px-[22px] pb-[45px] rounded-[20px] bg-[#FEFCFB]'
						>
							<div className='h-[147px] lg:grid justify-center'>
								<div className='w-[251px] mx-auto h-[38px] flex items-center justify-center gap-1 text-xl text-[#FEFCFB] bg-[#a032c7] rounded-packages'>
									Починаємо <span className='font-medium'>30.10.2024</span>
								</div>
								<h5 className='1500:text-[32px] lg:my-0 my-4 text-[28px] text-center leading-[28px] font-bold  mx-auto w-fit'>
									«Комплексний» 3,5 місяця
								</h5>
								<p className='text-[#a032c7] text-center px-[20px] font-medium text-xl'>
									Самий популярний серед батьків
								</p>

								<span className='block h-[1px] 1500:w-[370px] w-full lg:w-[340px] bg-[#B5B5B5] mt-2 lg:mt-auto mx-auto'></span>
							</div>
							<ul className='flex flex-col px-[20px] mt-3 items-start gap-[17px]'>
								<li className='flex items-center gap-[17px] text-[22px] leading-[28px]'>
									<img src={purple} />
									42 занять по 80 хв. (1 семестр)
								</li>
								<li className='flex items-center gap-[17px] text-[22px] leading-[28px]'>
									<img src={purple} />3 р/тиждень на 10:00 або 16:00 Вихідні -
									10:00 або 17:00
								</li>
								<li className='flex items-center gap-[17px] text-[22px] leading-[28px]'>
									<img src={purple} />
									Міні група 4-8 учнів
								</li>
								<li className='flex items-center gap-[17px] text-[22px] leading-[28px]'>
									<img src={purple} />
									Український викладач <br /> 2 рази на тиждень
								</li>
								<li className='flex items-center gap-[17px] text-[22px] leading-[28px]'>
									<img src={purple} />
									Англомовний викладач <br /> 1 раз на тиждень
								</li>
							</ul>
							<div className='mt-5'>
								<div className='flex items-start gap-[71px] mb-[27px] pl-[29px]'>
									<div>
										<p className='text-lg'>
											<span className='1500:text-[30px] text-2xl font-bold'>
												{' '}
												14100 ₴
											</span>{' '}
											/семестр
										</p>
										<p className='mt-[5px] text-lg'>+750 грн. підручник</p>
									</div>
									<div className='relative text-lg'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='75'
											height='30'
											viewBox='0 0 75 30'
											fill='none'
											className='absolute left-[-10px]'
										>
											<path d='M1 28.5L74 1' stroke='#E40404' strokeWidth='2' />
										</svg>
										14 500 ₴
									</div>
								</div>
								<p className='text-[#F89D18] text-center px-[20px] font-medium'>
									Набір кожного місяця
								</p>
								<p className='mb-5 italic text-center text-[#a032c7]'>
									Може бути розстрочка на два платежі
								</p>
								<button
									onClick={() => setShowForm(!showForm)}
									className='text-[22px] cursor-pointer font-bold w-full block sm:w-1/2 mx-auto lg:w-full text-center pt-[13px] pb-[18px] text-[#FEFCFB] rounded-[6px] bg-[#a032c7] duration-300 hover:bg-[#8805b8]'
								>
									Залишити заявку
								</button>
							</div>
						</div>
						<div
							data-aos='zoom-in-up'
							data-aos-delay='700'
							className='shadow_item grid lg:justify-between 1500:w-[454px] lg:w-[400px] w-full lg:items-start items-center h-[633px] px-[22px] pb-[30px] rounded-[20px] bg-[#FEFCFB]'
						>
							<div className='2xl:h-[92px] h-[110px] lg:grid justify-center'>
								<h5 className='1500:text-[32px] text-[28px] my-6 text-center mt-[37px] leading-[28px] font-bold mx-auto w-fit'>
									«Уроки з носієм»
								</h5>
								<span className='block h-[1px] 1500:w-[370px] w-full lg:w-[340px] mt-auto bg-[#B5B5B5] mx-auto'></span>
							</div>
							<ul className='flex flex-col px-[20px] items-start gap-[17px]'>
								<li className='flex items-center gap-[17px] text-[22px] leading-[28px]'>
									<img src={blue} />
									12, 24 або 36 уроків
								</li>
								<li className='flex items-center gap-[17px] text-[22px] leading-[28px]'>
									<img src={blue} />
									2-4 рази на тиждень
								</li>
								<li className='flex items-center gap-[17px] text-[22px] leading-[28px]'>
									<img src={blue} />
									Графік по домовленості
								</li>
								<li className='flex items-center gap-[17px] text-[22px] leading-[28px]'>
									<img src={blue} />
									Англомовний викладач
								</li>
								<li className='flex items-center gap-[17px] text-[22px] leading-[28px]'>
									<img src={blue} />
									Індивідуальні або парні уроки
								</li>
							</ul>
							<div className='mt-auto'>
								<div className='flex items-start gap-[71px] mb-[27px] pl-[29px]'>
									<div>
										<p className='text-lg'>
											<span className='1500:text-[30px] text-2xl font-bold'>
												{' '}
												від 9000-27000 ₴
											</span>{' '}
										</p>
										<p className='mt-[5px] text-lg'>+ від 550 ₴ підручник</p>
									</div>
									<div className='relative text-lg'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='75'
											height='30'
											viewBox='0 0 75 30'
											fill='none'
											className='absolute left-[-10px]'
										>
											<path d='M1 28.5L74 1' stroke='#E40404' strokeWidth='2' />
										</svg>
										9500 ₴
									</div>
								</div>
								<p className='text-[#F89D18] text-center mb-5 px-[20px] font-medium'>
									Набір іде постійно
								</p>
								<button
									onClick={() => setShowForm(!showForm)}
									className='text-[22px] cursor-pointer block mt-auto font-bold w-full sm:w-1/2 mx-auto lg:w-full text-center pt-[13px] pb-[18px] rounded-[6px] bg-[#99DBFE] duration-300 hover:bg-[#7fcffa]'
								>
									Залишити заявку
								</button>
							</div>
						</div>
						<div
							data-aos='zoom-in-up'
							data-aos-delay='300'
							className='shadow_item grid lg:justify-between 1500:w-[454px] lg:w-[400px] w-full lg:items-start items-center h-[633px] px-[22px] pb-[30px] rounded-[20px] bg-[#FEFCFB]'
						>
							<div className='2xl:h-[92px] h-[110px] lg:grid justify-center'>
								<h5 className='1500:text-[32px] text-[28px] my-6 text-center mt-[37px] leading-[28px] font-bold mx-auto w-fit'>
									«Розмовний» з ноcіями
								</h5>
								<span className='block h-[1px] 1500:w-[370px] w-full lg:w-[340px] mt-auto bg-[#B5B5B5] mx-auto'></span>
							</div>
							<ul className='flex flex-col items-start gap-[17px] '>
								<li className='flex items-center gap-[17px] text-[22px] leading-[28px]'>
									<img src={aqua} />
									16 занять по 60-80хв.
								</li>
								<li className='flex items-center gap-[17px] text-[22px] leading-[28px]'>
									<img src={aqua} />
									Невеликі групи 6-8 учнів
								</li>
								<li className='flex items-center gap-[17px] text-[22px] leading-[28px]'>
									<img src={aqua} />1 раз на тиждень
								</li>
								<li className='flex items-center gap-[17px] text-[22px] leading-[28px]'>
									<img src={aqua} />
									Англомовний викладач
								</li>
								
							</ul>
							<div className='mt-auto'>
								<div className='flex items-start gap-[71px] mb-[27px] pl-[9px]'>
									<div>
										<p className='text-lg'>
											<span className='1500:text-[30px] text-2xl font-bold'>
												{' '}
												6500 ₴
											</span>{' '}
											/семестр
										</p>
										<p className='mt-[5px] text-lg'>+650 грн. за підручник</p>
									</div>
									<div className='relative text-lg'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='75'
											height='30'
											viewBox='0 0 75 30'
											fill='none'
											className='absolute left-[-10px]'
										>
											<path d='M1 28.5L74 1' stroke='#E40404' strokeWidth='2' />
										</svg>
										7100 ₴
									</div>
								</div>
								<p className='text-[#F89D18] text-center px-[20px] mt-5 font-medium '>
									По набору групи, як допоміжний інструмент
								</p>
								<button
									onClick={() => setShowForm(!showForm)}
									className='text-[22px] cursor-pointer block mt-[37px] font-bold w-full sm:w-1/2 mx-auto lg:w-full text-center pt-[13px] pb-[18px] rounded-[6px] bg-[#3AD0D2] duration-300 hover:bg-[#58f4f7]'
								>
									Залишити заявку
								</button>
							</div>
						</div>
						<div
							data-aos='zoom-in-up'
							data-aos-delay='400'
							className='shadow_item grid lg:justify-between 1500:w-[454px] lg:w-[400px] w-full lg:items-start items-center h-[633px] px-[22px] pb-[30px] rounded-[20px] bg-[#FEFCFB]'
						>
							<div className='2xl:h-[92px] h-[110px] lg:grid justify-center'>
								<h5 className='1500:text-[32px] text-[28px] my-6 text-center mt-[37px] leading-[28px] font-bold mx-auto w-fit'>
									«Індивідуальний»
								</h5>
								<span className='block h-[1px] 1500:w-[370px] w-full lg:w-[340px] mt-auto bg-[#B5B5B5] mx-auto'></span>
							</div>
							<ul className='flex flex-col items-start gap-[17px] '>
								<li className='flex items-center gap-[17px] text-[22px] leading-[28px]'>
									<img src={brown} />
									12, 24 або 36 уроків по 60 хв.
								</li>
								<li className='flex items-center gap-[17px] text-[22px] leading-[28px]'>
									<img src={brown} />2-4 рази на тиждень
								</li>
								<li className='flex items-center gap-[17px] text-[22px] leading-[28px]'>
									<img src={brown} />
									Графік по домовленості
								</li>
								<li className='flex items-center gap-[17px] text-[22px] leading-[28px]'>
									<img src={brown} />
									Український викладач
								</li>
								<li className='flex items-center gap-[17px] text-[22px] leading-[28px]'>
									<img src={brown} />
									Індивідуальні або парні уроки
								</li>
							</ul>
							<div className='mt-auto'>
								<p className='text-lg'>
									<span className='1500:text-[30px] text-2xl font-bold'>
										{' '}
										Від 6600-19800 ₴
									</span>{' '}
								</p>
								<p className='text-lg'>+ підручник від 550 грн</p>
								<p className='text-[#F89D18] text-center px-[20px] mt-5 font-medium '>
									Набір кожного місяця
								</p>
								<button
									onClick={() => setShowForm(!showForm)}
									className='text-[22px] cursor-pointer block font-bold lg:w-full w-full sm:w-1/2 mx-auto text-center pt-[13px] mt-[17px] pb-[18px] rounded-[6px] bg-[#E2D1BA] duration-300 hover:bg-[#eed3ac]'
								>
									Залишити заявку
								</button>
							</div>
						</div>
					</div>
					<PackagesItemsMob setShowForm={setShowForm} />
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
					<ContactForm setShowForm={setShowForm} />
				</div>
			)}
		</>
	);
};

export default Packages;
