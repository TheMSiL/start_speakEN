import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import blue_vector from '../../assets/side_vectors/vector_blue.svg';
import v_1 from '../../assets/views/v-1.svg';
import v_2 from '../../assets/views/v_2.svg';
import v_3 from '../../assets/views/v_3.svg';
import Btn from '../Btn';

const Views = () => {
	return (
		<section className='sm:pb-[100px] pb-[61px] lg:pb-[142px] relative views'>
			<img
				src={blue_vector}
				className='absolute lg:block hidden left-[-50px] top-0'
			/>
			<div className='content'>
				<h2 className='text-center mb-5 sm:mb-20 section_title'>
					Погляди та ціності школи <span className='block'>«StartSpeakEn»</span>{' '}
				</h2>
				<div className='max-w-[90%] mx-auto sm:hidden block mb-10'>
					<Swiper
						pagination={{
							dynamicBullets: true,
							clickable: true,
						}}
						modules={[Pagination]}
						spaceBetween={50}
						slidesPerView={1}
						loop={true}
					>
						<SwiperSlide>
							<div className='views_item shadow_item relative md:w-[70%] lg:w-1/2 xl:w-full'>
								<img
									className='absolute top-[-35px] sm:top-[-80px] v_img'
									src={v_1}
								/>
								<p className='2xl:text-[22px] text-base sm:text-xl lg:text-lg 2xl:leading-[28px] text-center'>
									Наша онлайн школа англійської мови орієнтується на сучасні
									підходи до навчання, передові методики, які можуть зробити
									конкуренцію Кембриджській системі.
								</p>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className='views_item shadow_item relative  md:w-[70%] lg:w-1/2 xl:w-full'>
								<img
									className='absolute top-[-35px] sm:top-[-80px] v_img'
									src={v_2}
								/>
								<p className='2xl:text-[22px] text-base sm:text-xl lg:text-lg 2xl:leading-[28px] text-center'>
									Ми також враховуємо вік та академічні потреби дитини. Всі
									заннятя проходять тільки на англійській мові, інтерактивній
									платформі
									<span className='text-[#A032C7]'> TalkEn.Cloud</span> та за
									сучасними підручниками рівня CEFR.
								</p>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className='views_item shadow_item relative  md:w-[70%] lg:w-1/2 xl:w-full'>
								<img
									className='absolute top-[-35px] sm:top-[-80px] v_img'
									src={v_3}
								/>
								<p className='2xl:text-[22px] text-base sm:text-xl lg:text-lg 2xl:leading-[28px] text-center'>
									Ми серйозно підходимо до підбору вчителів на онлайн курси
									англійської мови для дітей, тому що вважаємо, що не кожен хто
									говорить на англійській мові може бути гарним вчителем.
								</p>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
				<div className='xl:grid hidden sm:flex lg:flex-row flex-col xl:grid-cols-3 items-center gap-[42px] mb-[76px] justify-between'>
					<div
						data-aos='flip-up'
						className='views_item shadow_item relative md:w-[70%] lg:w-1/2 xl:w-full'
					>
						<img className='absolute top-[-80px] v_img' src={v_1} />
						<p className='2xl:text-[22px] text-xl lg:text-lg 2xl:leading-[28px] text-center'>
							Наша онлайн школа англійської мови орієнтується на сучасні підходи
							до навчання, передові методики, які можуть зробити конкуренцію
							Кембриджській системі.
						</p>
					</div>
					<div
						data-aos='flip-up'
						data-aos-delay='500'
						className='views_item shadow_item relative md:w-[70%] lg:w-1/2 xl:w-full'
					>
						<img className='absolute top-[-80px] v_img' src={v_2} />
						<p className='2xl:text-[22px] text-xl lg:text-lg 2xl:leading-[28px] text-center'>
							Ми також враховуємо вік та академічні потреби дитини. Всі заннятя
							проходять тільки на англійській мові, інтерактивній платформі
							<span className='text-[#A032C7]'> TalkEn.Cloud</span> та за
							сучасними підручниками рівня CEFR.
						</p>
					</div>
					<div
						data-aos='flip-up'
						data-aos-delay='800'
						className='views_item shadow_item relative md:w-[70%] lg:w-1/2 xl:w-full'
					>
						<img className='absolute top-[-80px] v_img' src={v_3} />
						<p className='2xl:text-[22px] text-xl lg:text-lg 2xl:leading-[28px] text-center'>
							Ми серйозно підходимо до підбору вчителів на онлайн курси
							англійської мови для дітей, тому що вважаємо, що не кожен хто
							говорить на англійській мові може бути гарним вчителем.
						</p>
					</div>
				</div>
				<Btn
					text='Пройти тест на рівень за 5 хв'
					href='https://my.talken.cloud/student/registration/a92fca0b9fe1c4b12c8093aea33b9fdbe1577e3e'
					target={true}
					btn_style='test_btn'
				/>
			</div>
		</section>
	);
};

export default Views;
