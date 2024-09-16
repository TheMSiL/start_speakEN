import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import hat from '../../assets/team/hat.svg';
import t_1 from '../../assets/team/t_1.jfif';
import t_10 from '../../assets/team/t_10.jfif';
import t_2 from '../../assets/team/t_2.jpg';
import t_3 from '../../assets/team/t_3.jpg';
import t_4 from '../../assets/team/t_4.jpg';
import t_6 from '../../assets/team/t_6.jpg';
import t_5 from '../../assets/team/t_5.jpg';
import t_7 from '../../assets/team/t_7.jpg';
import t_8 from '../../assets/team/t_8.jpg';
import t_9 from '../../assets/team/t_9.jfif';

const teachers = [
	{
		name: 'Алла Пархоменко',
		img: t_4,
	},
	{
		name: 'Віталіна Кухаренко',
		img: t_10,
	},
	{
		name: 'Оксана Кравець',
		img: t_9,
	},
	{
		name: 'Лілія Ченівецька',
		img: t_2,
	},
	{
		name: 'Марина Коноваленко',
		img: t_1,
	},
	{
		name: 'Вікторія Перточак',
		img: t_3,
	},
	{
		name: 'Ірина Коваленко',
		img: t_7,
	},
	{
		name: 'Олівія Джонсон',
		img: t_8,
	},
	{
		name: 'Барбара Рєй',
		img: t_6,
	},
	{
		name: 'Ісла Болдвін',
		img: t_5,
	},
];

const Team = () => {
	return (
		<section className='md:pt-[129px] pt-[49px] pb-[60px] md:pb-[100px] gap-5 relative flex lg:flex-row flex-col 2xl:grid grid-cols-2 items-center bg-[#FEFCFB] justify-between'>
			<img
				className='absolute top-0 md:block hidden md:top-[21px] lg:size-auto size-[100px] 2xl:top-[71px] left-10'
				src={hat}
			/>
			<div className='2xl:pl-[8%] lg:pl-[5%] lg:max-w-[650px] max-w-[90%] sm:text-center'>
				<h2 className='mb-10 text-[32px] sm:text-[36px] md:text-[40px] xl:text-[42px] leading-[40px] sm:leading-[52px] 2xl:text-[48px] 2xl:leading-[60px] font-bold'>
					Наші вчителі, яких ми обрали за їх знання та вміння ладнати з дітьми
				</h2>
			</div>
			<div className='lg:w-[55vw] w-[90vw]'>
				<Swiper
					pagination={{
						dynamicBullets: true,
						clickable: true,
					}}
					modules={[Pagination]}
					spaceBetween={20}
					slidesPerView={1}
					loop={true}
					breakpoints={{
						640: {
							slidesPerView: 2,
							spaceBetween: 20,
						},
						768: {
							slidesPerView: 3,
							spaceBetween: 20,
						},
					}}
				>
					{teachers.map(teacher => {
						return (
							<SwiperSlide key={teacher.name}>
								<div className='relative flex items-end justify-center'>
									<img className='rounded-[20px] h-[450px] sm:h-full' src={teacher.img} />
									<div className='absolute xl:w-[80%] xl:h-[100px] w-[75%] h-[75px] flex flex-col items-center justify-center rounded-[15px] bg-[#FEFCFB] bottom-[17px] px-[19px]'>
										<h5 className='font-bold text-center xl:text-3xl text-[22px]'>
											{teacher.name}
										</h5>
									</div>
								</div>
							</SwiperSlide>
						);
					})}
				</Swiper>
			</div>
		</section>
	);
};

export default Team;
