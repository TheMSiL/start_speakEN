import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import one from '../../assets/adult/study_start/1.svg';
import two from '../../assets/adult/study_start/2.svg';
import three from '../../assets/adult/study_start/3.svg';
import four from '../../assets/adult/study_start/4.svg';
import five from '../../assets/adult/study_start/5.svg';

const items = [
	{
		img: one,
		num: '1',
		text: 'Пройти тестування або залишити заявку',
		arrow: true,
		delay: 300,
	},
	{
		img: two,
		num: '2',
		text: 'Потім вам передзвонить наш менеджер',
		arrow: true,
		delay: 400,
	},
	{
		img: three,
		num: '3',
		text: 'Підбираємо зручний час для пробного уроку',
		arrow: true,
		delay: 500,
	},
	{
		img: four,
		num: '4',
		text: 'На уроці ще раз вчитель проводить тестування за потреби',
		arrow: true,
		delay: 400,
	},
	{
		img: five,
		num: '5',
		text: 'Проводите оплату та починаєте навчання.',
		delay: 500,
	},
];

const StudyStartAdult = () => {
	return (
		<section className='py-10 sm:py-[90px] bg-[#99DBFE] adultPackages'>
			<div className='sm:max-w-[95%] max-w-[90%] mx-auto'>
				<h2 className='font-bold text-2xl s:text-[32px] text-center sm:text-[38px] 2xl:text-[48px] mb-5 sm:mb-10 leading-normal sm:leading-[46px] xl:leading-[56px] '>
					Як розпочати навчання?
				</h2>
				<div className='sm:flex hidden 2xl:flex-nowrap flex-wrap items-center justify-center 2xl:justify-between gap-10 2xl:gap-5 3xl:gap-[48px]'>
					{items.map(item => {
						return (
							<div
								data-aos='flip-up'
								data-aos-delay={item.delay}
								className='flex flex-col items-center'
								key={item.num}
							>
								<div className='size-[146px] mb-3 rounded-[50%] flex  items-center justify-center relative bg-[#FEFCFB]'>
									{item.arrow && (
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='68'
											height='23'
											viewBox='0 0 68 23'
											fill='none'
											className='absolute right-[-90px] 2xl:block hidden 3xl:right-[-120px]'
										>
											<path
												d='M67.5607 12.5607C68.1464 11.9749 68.1464 11.0251 67.5607 10.4393L58.0147 0.893398C57.4289 0.307611 56.4792 0.307611 55.8934 0.893398C55.3076 1.47919 55.3076 2.42893 55.8934 3.01472L64.3787 11.5L55.8934 19.9853C55.3076 20.5711 55.3076 21.5208 55.8934 22.1066C56.4792 22.6924 57.4289 22.6924 58.0147 22.1066L67.5607 12.5607ZM0 13H66.5V10H0V13Z'
												fill='#534C72'
											/>
										</svg>
									)}
									<img src={item.img} />
								</div>
								<h5 className='text-[#534C72] text-[100px] font-bold'>
									{item.num}
								</h5>
								<p className='break-words text-center  text-xl leading-7'>
									{item.text}
								</p>
							</div>
						);
					})}
				</div>
				<div className='block sm:hidden'>
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
						{items.map(item => {
							return (
								<SwiperSlide key={item.num}>
									<div className='flex flex-col items-center' key={item.num}>
										<div className='size-[140px] mb-3 rounded-[50%] flex items-center justify-center relative bg-[#FEFCFB]'>
											<img src={item.img} />
										</div>
										<h5 className='text-[#534C72] text-[80px] font-bold'>
											{item.num}
										</h5>
										<p className='break-words text-center text-xl leading-7'>
											{item.text}
										</p>
									</div>
								</SwiperSlide>
							);
						})}
					</Swiper>
				</div>
			</div>
		</section>
	);
};

export default StudyStartAdult;
