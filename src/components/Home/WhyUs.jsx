import { useState } from 'react';
import blue_vector from '../../assets/side_vectors/vector_blue.svg';
import main_img from '../../assets/whyus/boy.png';
import h_1 from '../../assets/whyus/h_1.svg';
import h_2 from '../../assets/whyus/h_2.svg';
import h_3 from '../../assets/whyus/h_3.svg';
import light from '../../assets/whyus/light.svg';
import pencil from '../../assets/whyus/pencil.svg';

import Btn from '../Btn';
import ContactForm from '../ContactForm';

const pluses = [
	{
		plus: '1000+',
		text: 'Дітей вже пройшли курси  в нашій школі.',
	},
	{
		plus: '57+',
		text: 'Вчителів як україномовних так і нейтіви з англомовних країн.',
	},
	{
		plus: '100+',
		text: 'Груп навчається на протязі року.',
	},
];

const WhyUs = () => {
	const [showForm, setShowForm] = useState(false);
	return (
		<>
			<section className='pb-[33px] sm:pb-[58px] relative'>
				<img
					src={blue_vector}
					className='absolute hidden lg:block right-[-50px] top-0'
				/>
				<div className='content'>
					<h2 className='section_title mb-[27px] text-center lg:text-start'>
						Чому обирають нашу школу?
					</h2>
					<ul className='lg:mb-[60px] mb-[34px] sm:mb-20 text-center lg:text-start '>
						{pluses.map(plus => {
							return (
								<li
									className='sm:text-[22px]  flex text-base items-start text-start gap-[9px] sm:gap-0 sm:leading-[32px]'
									key={plus.plus}
								>
									<span className='font-bold sm:w-auto w-[50px] sm:text-start text-end mr-1'>
										{plus.plus}
									</span>
									<p className='sm:w-full w-[85%]'>{plus.text}</p>
								</li>
							);
						})}
					</ul>
					<div className='flex flex-col-reverse xl:grid 2xl:grid-cols-2 gap-16 sm:gap-28 mb-[60px] sm:mb-[102px]'>
						<div className='flex flex-col justify-center items-center gap-[56px] sm:text-lg text-base md:text-[22px] leading-[28px] lg:w-full w-[85%] mx-auto lg:flex-1'>
							<div
								data-aos='fade-right'
								className='shadow_item whyus_item rounded-[20px] bg-[#FEFCFB] relative flex-1 flex flex-col'
							>
								<div className='absolute top-[-20px] left-[-30px] sm:left-[-50px] size-[60px] sm:size-[115px] rounded-[50%] flex items-center justify-center bg-[#FB9D18] text-[#FEFCFB] sm:text-[80px] text-[50px] font-bold leading-[60px]'>
									1
								</div>
								<div className='sm:p-6'>
									Всі уроки в онлайн школі англійської мови
									<span className='font-bold'>«StartSpeakEn»</span> проходять на
									професійній та інтерактивній платформі для навчання
									англійської мови
									<span className='text-[#A032C7] font-medium'>
										TalkEn.Cloud
									</span>
									, де проходять всі процеси навчання з любого девайсу. Уроки,
									вправи-тренажери та звіти для батьків.
								</div>
							</div>
							<div
								data-aos='fade-right'
								data-aos-delay='400'
								className='shadow_item whyus_item rounded-[20px] bg-[#FEFCFB] relative flex-1 flex flex-col'
							>
								<div className='absolute top-[-20px] left-[-30px] sm:left-[-50px] size-[60px] sm:size-[115px] rounded-[50%] flex items-center justify-center bg-[#99DBFE] text-[#FEFCFB] sm:text-[80px] text-[50px] font-bold leading-[60px]'>
									2
								</div>
								<div className='sm:p-6'>
									Граматика легка для вивчення в ігровій формі, що дає гарний
									результат без напруги для дитини. Всі уроки проходять на
									англійській мові, що дає змогу занурити дитину в середовище
									англійської мови максимально.
								</div>
							</div>
							<div
								data-aos='fade-right'
								data-aos-delay='500'
								className='shadow_item whyus_item rounded-[20px] bg-[#FEFCFB] relative flex-1 flex flex-col'
							>
								<div className='absolute top-[-20px] left-[-30px] sm:left-[-50px] size-[60px] sm:size-[115px] rounded-[50%] flex items-center justify-center bg-[#23BEC0] text-[#FEFCFB] sm:text-[80px] text-[50px] font-bold leading-[60px]'>
									3
								</div>
								<div className='sm:p-6'>
									Підбір програми та групи з урахуванням віку та рівня
									англійської мови дитини за технікою
									<span className='font-bold'>«Age+Level»</span> якою
									користуються у всьому світі. Що дасть ефективне та комфортне
									навчання.
								</div>
							</div>
							<div
								data-aos='fade-right'
								data-aos-delay='600'
								className='shadow_item whyus_item rounded-[20px] bg-[#FEFCFB] relative flex-1 flex flex-col'
							>
								<div className='absolute top-[-20px] left-[-30px] sm:left-[-50px] size-[60px] sm:size-[115px] rounded-[50%] flex items-center justify-center bg-[#E2D1BA] text-[#FEFCFB] sm:text-[80px] text-[50px] font-bold leading-[60px]'>
									4
								</div>
								<div className='sm:p-6'>
									В онлайн школі англійської мови
									<span className='font-bold'>«StartSpeakEn»</span> розроблені
									підручники на всі рівні від{' '}
									<span className='font-bold'>А0-</span> до{' '}
									<span className='font-bold'>С1</span>, вам не треба змінювати
									школу після першого курсу, всі програми розраховані як на
									дітей так і на дорослих.
								</div>
							</div>
						</div>
						<div className='flex 2xl:flex-col items-center justify-center lg:justify-between gap-5 lg:flex-1'>
							<div
								data-aos='zoom-in'
								className='relative rounded-[20px] 2xl:w-[633px] xl:w-[500px] lg:w-[450px] w-[85%] sm:w-[550px] md:w-[633px] bg-[#E2D1BA] flex-shrink-0'
							>
								<img
									className='absolute top-[-40px] sm:top-[-90px] right-4 sm:right-0 sm:size-[142px] size-[65px]'
									src={light}
								/>
								<img
									className='absolute top-[33px] left-[-45px] sm:size-[90px] size-[50px]'
									src={h_1}
								/>
								<img
									className='absolute top-[33px] left-[0px] sm:size-[90px] size-[50px]'
									src={h_2}
								/>
								<img
									className='absolute top-[33px] left-[42px] sm:size-[90px] size-[50px]'
									src={h_3}
								/>

								<img src={main_img} />
								<div className='py-[16px] px-[25px] text-base sm:text-[22px] sm:leading-[30px] font-medium italic'>
									Це не просто 1000+ учнів, це запалені серця дітей любовʼю та
									цікавістю до англійської мови
								</div>
							</div>
							<div
								data-aos='flip-down'
								className='2xl:flex-grow hidden lg:flex flex-col 1500:justify-end justify-center'
							>
								<div className='2xl:w-[633px] xl:w-[500px] lg:w-[450px] shadow_item rounded-[20px] relative bg-[#23BEC0] shadow_item pt-[28px] pr-[118px] pb-[43px] pl-[41px]'>
									<img className='absolute right-10 top-[40%]' src={pencil} />
									<p className='text-[#FEFCFB] text-[44px] font-bold mb-[44px]'>
										Дізнайтесь рівень дитини за технологією “Age+Level”
									</p>
									<button
										onClick={() => setShowForm(true)}
										className='rounded-[6px] cursor-pointer bg-[#E2D1BA] duration-300 hover:bg-[#e6caa3] text-[22px] font-bold pt-[14px] pb-[17px] w-[245px] text-center'
									>
										Залишити заявку
									</button>
								</div>
							</div>
						</div>
					</div>
					<div
						className='lg:hidden flex flex-col justify-center 1500:justify-end'
						data-aos='flip-down'
					>
						<div className='w-full shadow_item rounded-[20px] relative bg-[#23BEC0] mb-[61px] shadow_item sm:pt-[28px] sm:pr-[118px] sm:pb-[43px] sm:pl-[41px] pt-[17px] pr-[15px] pb-[26px] pl-[24px]'>
							<img
								className='absolute sm:right-10 right-5 top-[40%] size-[50px] sm:size-[83px]'
								src={pencil}
							/>
							<p className='text-[#FEFCFB] text-3xl sm:text-[36px] lg:text-[44px] font-bold mb-[44px]'>
								Дізнайтесь рівень дитини за технологією “Age+Level”
							</p>
							<button
								onClick={() => setShowForm(true)}
								className='rounded-[6px] cursor-pointer bg-[#E2D1BA] duration-300 hover:bg-[#e6caa3] text-[22px] font-bold pt-[14px] pb-[17px] w-[245px] text-center'
							>
								Залишити заявку
							</button>
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

export default WhyUs;
