import promo_img from '../../assets/promo/promo_img.png';
import promo_mob from '../../assets/promo/promo_mob.png';
import vector from '../../assets/side_vectors/vector_orange.svg';
import Btn from '../Btn';

const Promo = () => {
	return (
		<section className='relative mb-[37px] sm:mb-[97px] bg-[#99DBFE]'>
			<div className='xl:grid grid-cols-2 flex flex-col-reverse'>
				<div
					data-aos='zoom-in'
					className='sm:pt-[48px] pt-[25px] pl-[24px] sm:pl-[8%] pr-[24px] s:pr-[58px] sm:pr-[81px] pb-[44px] sm:pb-[68px]'
				>
					<h2 className='section_title mb-10'>
						Пройти тестування, щоб <br className='2xl:block hidden' /> обрати
						найкращий варіант групи для вашої дитини
					</h2>
					<Btn
						text='Пройти тест'
						href='https://my.talken.cloud/student/registration/a92fca0b9fe1c4b12c8093aea33b9fdbe1577e3e'
						target={true}
						btn_style='main_btn'
					/>
				</div>
				<img
					src={vector}
					className='absolute xl:block hidden top-[65%] left-[45%]'
				/>
				<img
					className='sm:h-full sm:block hidden w-full object-cover'
					src={promo_img}
				/>
				<img
					className='s:h-[262px] sm:hidden block w-full object-cover'
					src={promo_mob}
				/>
			</div>
		</section>
	);
};

export default Promo;
