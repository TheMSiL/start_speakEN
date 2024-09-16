import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import aqua from '../../assets/list//list_pag-auqa.svg';
import blue from '../../assets/list/list_pag-blue.svg';
import brown from '../../assets/list/list_pag-brown.svg';
import orange from '../../assets/list/list_pag-orange.svg';
import purple from '../../assets/list/list_pag-purple.svg';

const PackagesItemsMob = ({ setShowForm }) => {
	return (
		<div className='sm:hidden block mb-10 packages_items'>
			<Swiper
				pagination={{
					dynamicBullets: true,
					clickable: true,
				}}
				modules={[Pagination]}
				spaceBetween={0}
				slidesPerView={1}
				loop={true}
			>
				<SwiperSlide>
					<div className='shadow_itemPack grid w-[80%] h-[532px] s:px-[36px] px-[22px] pb-[38px] rounded-[20px] bg-[#FEFCFB]'>
						<div className='h-[107px]'>
							<div className='w-[251px] mx-auto h-[38px] flex items-center justify-center gap-1 text-xl bg-[#F89D18] rounded-packages'>
								Починаємо <span className='font-medium'>30.10.2024</span>
							</div>
							<h5 className='text-2xl text-center mt-5 mb-2 leading-[28px] font-bold '>
								«Стандарт»
							</h5>
							<span className='block h-[1px] bg-[#B5B5B5] mx-auto'></span>
						</div>
						<ul className='flex flex-col items-start gap-[10px] '>
							<li className='flex items-center gap-[15px] sm:text-lg'>
								<img src={orange} />
								32 заняття по 60 хв.
							</li>
							<li className='flex items-center gap-[15px] sm:text-lg'>
								<img src={orange} />2 рази на тиждень
							</li>
							<li className='flex items-center gap-[15px] sm:text-lg'>
								<img src={orange} />
								Міні група 4-6 учнів
							</li>
							<li className='flex items-center gap-[15px] sm:text-lg'>
								<img src={orange} />
								Український викладач
							</li>
						</ul>
						<div className='mt-auto'>
							<div className='flex items-start s:gap-[71px] gap-[41px] mb-[24px] pl-[30px]'>
								<div>
									<p className='text-lg'>
										<span className='text-2xl font-bold'> 9250 ₴</span>
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
									9500 ₴
								</div>
							</div>
							<p className='text-[#F89D18] text-center px-[20px] font-medium '>
								Набір кожного місяця
							</p>
							<p className='mb-5 italic text-center text-[#a032c7]'>
								Може бути розстрочка на два платежі
							</p>
							<button
								onClick={() => setShowForm(true)}
								className='text-lg cursor-pointer block mt-10 lg:mt-auto font-bold w-full sm:w-1/2 mx-auto lg:w-full text-center py-[12px] rounded-[6px] bg-[#F89D18] duration-300 hover:bg-[#f1ae49]'
							>
								Залишити заявку
							</button>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='shadow_itemPack grid w-[80%] h-[532px] s:px-[36px] px-[22px] pb-[38px] rounded-[20px] bg-[#FEFCFB]'>
						<div className='h-[107px]'>
							<div className='w-[251px] mx-auto h-[38px] flex items-center justify-center gap-1 text-xl text-[#FEFCFB] bg-[#a032c7] rounded-packages'>
								Починаємо <span className='font-medium'>30.10.2024</span>
							</div>
							<h5 className='text-2xl text-center my-2 leading-[28px] font-bold'>
								«Комплексний» 3,5 місяця
							</h5>
							<p className='text-[#a032c7] text-center font-medium text-lg'>
								Самий популярний серед батьків
							</p>
							<span className='block h-[1px] bg-[#B5B5B5] mx-auto'></span>
						</div>
						<ul className='flex flex-col items-start gap-[10px]'>
							<li className='flex items-center gap-[15px] sm:text-lg'>
								<img src={purple} />
								42 занять по 80 хв. (1 семестр)
							</li>
							<li className='flex items-center gap-[15px] sm:text-lg'>
								<img src={purple} />3 р/тиждень на 10:00 або 16:00 Вихідні -
								10:00 або 17:00
							</li>
							<li className='flex items-center gap-[15px] sm:text-lg'>
								<img src={purple} /> Міні група 4-8 учнів
							</li>
							<li className='flex items-center gap-[15px] sm:text-lg'>
								<img src={purple} />
								Український викладач 2 рази на тиждень
							</li>
							<li className='flex items-center gap-[15px] sm:text-lg'>
								<img src={purple} />
								Англомовний викладач 1 раз на тиждень
							</li>
						</ul>
						<div className='mt-auto'>
							<div className='flex items-start s:gap-[71px] gap-[41px] mb-[24px] pl-[30px]'>
								<div>
									<p className='text-lg'>
										<span className=' text-2xl font-bold'>14100 ₴</span>{' '}
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
								onClick={() => setShowForm(true)}
								className='text-[22px] cursor-pointer font-bold w-full block sm:w-1/2 mx-auto lg:w-full text-center py-[12px] text-[#FEFCFB] rounded-[6px] bg-[#a032c7] duration-300 hover:bg-[#8805b8]'
							>
								Залишити заявку
							</button>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='shadow_itemPack grid w-[80%] h-[532px] s:px-[36px] px-[22px] pb-[38px] rounded-[20px] bg-[#FEFCFB]'>
						<div className='h-[107px]'>
							<h5 className='text-2xl text-center my-5 leading-[28px] font-bold '>
								«Уроки з носієм»
							</h5>
							<span className='block h-[1px] bg-[#B5B5B5] mx-auto'></span>
						</div>
						<ul className='flex flex-col items-start gap-[10px] '>
							<li className='flex items-center gap-[15px] sm:text-lg'>
								<img src={blue} />
								12, 24 або 36 уроків
							</li>
							<li className='flex items-center gap-[15px] sm:text-lg'>
								<img src={blue} />
								2-4 рази на тиждень
							</li>
							<li className='flex items-center gap-[15px] sm:text-lg'>
								<img src={blue} />
								Графік по домовленості
							</li>
							<li className='flex items-center gap-[15px] sm:text-lg'>
								<img src={blue} />
								Англомовний викладач
							</li>
							<li className='flex items-center gap-[15px] sm:text-lg'>
								<img src={blue} />
								Індивідуальні або парні уроки
							</li>
						</ul>
						<div className='mt-auto'>
							<div className='flex items-start s:gap-[71px] gap-[41px] mb-[24px] pl-[30px]'>
								<div>
									<p className='text-lg'>
										<span className=' text-2xl font-bold'>
											{' '}
											від 9000-27000 ₴
										</span>{' '}
									</p>
									<p className='mt-[5px] text-lg'>+ від 550 ₴ підручник</p>
								</div>
							</div>
							<p className='text-[#F89D18] text-center mb-5 px-[20px] font-medium'>
								Набір іде постійно
							</p>
							<button
								onClick={() => setShowForm(true)}
								className='text-lg cursor-pointer block mt-auto font-bold w-full sm:w-1/2 mx-auto lg:w-full text-center py-[12px] rounded-[6px] bg-[#99DBFE] duration-300 hover:bg-[#7fcffa]'
							>
								Залишити заявку
							</button>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='shadow_itemPack grid w-[80%] h-[532px] s:px-[36px] px-[22px] pb-[38px] rounded-[20px] bg-[#FEFCFB]'>
						<div className='h-[107px]'>
							<h5 className='text-2xl text-center my-5 leading-[28px] font-bold '>
								«Розмовний» з ноcіями
							</h5>
							<span className='block h-[1px] bg-[#B5B5B5] mx-auto'></span>
						</div>
						<ul className='flex flex-col items-start gap-[10px] '>
							<li className='flex items-center gap-[15px] sm:text-lg'>
								<img src={aqua} />
								16 занять по 60-80хв.
							</li>
							<li className='flex items-center gap-[15px] sm:text-lg'>
								<img src={aqua} />
								Невеликі групи 6-8 учнів
							</li>
							<li className='flex items-center gap-[15px] sm:text-lg'>
								<img src={aqua} />1 раз на тиждень
							</li>
							<li className='flex items-center gap-[15px] sm:text-lg'>
								<img src={aqua} />
								Англомовний викладач
							</li>
						</ul>
						<div className='mt-auto'>
							<div className='flex items-start s:gap-[71px] gap-[41px] mb-[24px] pl-[30px]'>
								<div>
									<p className='text-lg'>
										<span className=' text-2xl font-bold'>6500 ₴</span> /семестр
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
							<p className='text-[#F89D18] text-center mb-5 px-[20px] font-medium'>
								По набору групи, як допоміжний інструмент
							</p>
							<button
								onClick={() => setShowForm(true)}
								className='text-lg block cursor-pointer mt-[37px] font-bold w-full sm:w-1/2 mx-auto lg:w-full text-center py-[12px] rounded-[6px] bg-[#3AD0D2] duration-300 hover:bg-[#58f4f7]'
							>
								Залишити заявку
							</button>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='shadow_itemPack grid w-[80%] h-[532px] s:px-[36px] px-[22px] pb-[38px] rounded-[20px] bg-[#FEFCFB]'>
						<div className='h-[107px]'>
							<h5 className='text-2xl text-center my-5 leading-[28px] font-bold '>
								«Індивідуальний»
							</h5>
							<span className='block h-[1px] bg-[#B5B5B5] mx-auto'></span>
						</div>
						<ul className='flex flex-col items-start gap-[10px] '>
							<li className='flex items-center gap-[15px] sm:text-lg'>
								<img src={brown} />
								12, 24 або 36 уроків по 60 хв.
							</li>
							<li className='flex items-center gap-[15px] sm:text-lg'>
								<img src={brown} />
								2-4 рази на тиждень
							</li>
							<li className='flex items-center gap-[15px] sm:text-lg'>
								<img src={brown} />
								Графік по домовленості
							</li>
							<li className='flex items-center gap-[15px] sm:text-lg'>
								<img src={brown} />
								Український викладач
							</li>
							<li className='flex items-center gap-[15px] sm:text-lg'>
								<img src={brown} />
								Індивідуальні або парні уроки
							</li>
						</ul>
						<div className='mt-auto'>
							<p className='text-lg'>
								<span className=' text-2xl font-bold'>Від 6600-19800 ₴</span>{' '}
							</p>
							<p className='text-lg'>+ підручник від 550 грн</p>
							<p className='text-[#F89D18] text-center px-[20px] mt-5 font-medium '>
								Набір кожного місяця
							</p>
							<button
								onClick={() => setShowForm(true)}
								className='text-lg cursor-pointer block font-bold lg:w-full w-full sm:w-1/2 mx-auto text-center pt-[13px] mt-[37px] pb-[18px] rounded-[6px] bg-[#E2D1BA] duration-300 hover:bg-[#eed3ac]'
							>
								Залишити заявку
							</button>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default PackagesItemsMob;
