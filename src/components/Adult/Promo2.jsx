import { useState } from 'react';
import promo from '../../assets/adult/promo_2.png';
import ContactForm from '../ContactForm';

import Btn from '../Btn';

const Promo2 = () => {
	const [showForm, setShowForm] = useState(false);

	return (
		<>
			<section className='pb-[50px] sm:pb-[100px] bg-[#FEFCFB]'>
				<div className='content flex flex-col justify-center items-center gap-10 lg:gap-[70px]'>
					<div className='w-full flex lg:flex-row flex-col-reverse items-center lg:items-start lg:py-0 py-5 justify-center px-[25px] sm:px-[55px] xl:px-[105px]  lg:justify-between rounded-[20px] relative md:mb-16 bg-[#FEECBD]'>
						<div
							data-aos='fade-right'
							className='lg:max-w-[510px] lg:text-start text-center lg:pt-[90px] lg:pb-[90px] pt-[20px] pb-[30px] sm:pb-[50px]'
						>
							<h3 className='font-bold text-2xl s:text-3xl sm:text-[38px] xl:text-[48px] mb-5 sm:mb-10 leading-normal sm:leading-[46px] xl:leading-[56px] '>
								Start speaking English with us, open your mind and your way to
								the future!
							</h3>
							<Btn
								text='Start Speak En'
								href='https://my.talken.cloud/student/registration/a92fca0b9fe1c4b12c8093aea33b9fdbe1577e3e'
								target={true}
								btn_style='main_btn testAdult_btn'
							/>
						</div>
						<img data-aos='fade-left' src={promo} />
					</div>
					<div>
						<h3 className='font-bold text-2xl text-center s:text-3xl sm:text-[38px] xl:text-[48px] mb-5 sm:mb-10 leading-normal sm:leading-[46px] xl:leading-[56px]'>
							Залишились питання ?
						</h3>
						<button
							className='text-center w-[247px] duration-300 bg-transparent hover:bg-[#A032c7] block mx-auto text-[22px] font-bold rounded-md border-[3px] py-[14px] h-[58px] border-[#A032c7]'
							onClick={() => setShowForm(!showForm)}
						>
							Напишіть нам
						</button>
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

export default Promo2;
