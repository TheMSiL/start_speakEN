import { useState } from 'react';
import certifacete from '../../assets/adult/certifacete.png';
import promo_1 from '../../assets/adult/promo.png';
import ContactForm from '../ContactForm';

import Btn from '../Btn';

const Promo = () => {
	const [showForm, setShowForm] = useState(false);

	return (
		<>
			<section>
				<div className='content flex flex-col justify-center items-center gap-10 sm:gap-[70px]'>
					<div className='w-full flex lg:flex-row flex-col-reverse items-center lg:py-0 py-[25px] sm:py-[55px] px-[25px] sm:px-[55px] xl:px-[105px] justify-between rounded-[20px] relative bg-[#99DBFE] '>
						<div
							data-aos='fade-right'
							className='lg:w-[465px] lg:text-start text-center lg:pt-[100px] my-5 sm:my-10 lg:my-0 lg:pb-[110px]'
						>
							<h3 className='font-bold text-2xl s:text-3xl sm:text-[38px] xl:text-[48px] mb-5 sm:mb-10 leading-normal sm:leading-[46px] xl:leading-[56px] '>
								Дізнатися свій рівень англійської
							</h3>
							<Btn
								text='Пройти тест'
								href='https://my.talken.cloud/student/registration/a92fca0b9fe1c4b12c8093aea33b9fdbe1577e3e'
								target={true}
								btn_style='main_btn testAdult_btn'
							/>
						</div>
						<img data-aos='fade-left' src={promo_1} />
					</div>
					<div>
						<h3 className='font-bold text-2xl text-center s:text-3xl sm:text-[38px] xl:text-[48px] mb-5 sm:mb-10 leading-normal sm:leading-[46px] xl:leading-[56px]'>
							Знижка для нових учнів
							<span className='text-[#A032c7]'> -5%</span>
						</h3>
						<button
							className='text-center cursor-pointer w-[247px] hover:text-[#FFF] duration-300 bg-transparent hover:bg-[#A032c7] block mx-auto text-xl sm:text-[22px] font-bold rounded-md border-[3px] py-[12px] sm:py-[14px] sm:h-[58px] border-[#A032c7]'
							onClick={() => setShowForm(!showForm)}
						>
							Отримати знижку
						</button>
					</div>
					<div className='w-full flex lg:flex-row flex-col-reverse items-start lg:py-0 justify-center px-[25px] sm:px-[55px] xl:px-[105px] certificate_adult lg:justify-between rounded-[20px] border-4 border-[#99DBFE] relative mb-16'>
						<div
							data-aos='zoom-in-right'
							className='pt-[20px] pb-[20px] sm:pb-[50px] relative z-[5] lg:max-w-[450px] 2xl:max-w-[565px] lg:text-start text-center lg:pt-[100px] my-5 sm:my-10 lg:my-0 lg:pb-[110px]'
						>
							<h3 className='font-bold text-2xl s:text-3xl sm:text-[38px] xl:text-[48px] mb-5 sm:mb-10 leading-normal sm:leading-[46px] xl:leading-[56px] '>
								Подарунковий сертифікат на онлайн курси англійської мови
							</h3>
							<button
								onClick={() => setShowForm(!showForm)}
								className='main_btn gift_btn adult_certificate'
							>
								Замовити сертифікат
							</button>
						</div>
						<img
							data-aos='zoom-in-left'
							className='relative z-[5] lg:m-0 mx-auto sm:w-auto w-[150px]'
							src={certifacete}
						/>
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

export default Promo;
