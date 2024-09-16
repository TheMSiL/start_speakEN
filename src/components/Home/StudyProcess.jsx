import arch from '../../assets/study_process/arch.svg';
import book from '../../assets/study_process/book.svg';
import lamp from '../../assets/study_process/lamp.svg';
import notepad from '../../assets/study_process/notepad.svg';
import Btn from '../Btn';

const StudyProcess = () => {
	return (
		<section className='sm:pt-[66px] pt-[44px] pb-[60px] sm:pb-[80px] bg-[#91E2F8]'>
			<div className='content'>
				<h2 className='section_title text-center mb-[65px]'>
					Яким буде процес навчання вашої
					<br className='lg:block hidden' /> дитини в школі «StartSpeakEn»?
				</h2>
				<div className='grid lg:grid-cols-2 justify-center items-center justify-items-center md:items-start lg:justify-between md:gap-[100px] gap-[50px] mb-[29px] sm:mb-[96px]'>
					<div
						data-aos='zoom-out'
						className='relative rounded-[20px] bg-[#FEFCFB] shadow_item pt-[38px] pl-[25px] s:pl-[45px] sm:pl-[59px] 1500:pl-[79px] sm:max-w-[90%] md:max-w-[723px] 2xl:pr-[58px] s:pr-[38px] pr-[25px] sm:h-[365px] h-auto xl:h-[333px] 1500:h-[314px] sm:pb-[65px] pb-[35px]'
					>
						<img
							className='absolute top-[-50px] sm:size-auto size-[90px] left-0 sm:left-[-20px]'
							src={lamp}
						/>
						<span className='absolute top-[38px] 1500:right-[58px] 2xl:right-[38px] right-[20px] 2xl:text-[50px] sm:text-[40px] text-[32px] leading-[28px] font-bold text-[#FB9D18]'>
							01
						</span>
						<h4 className='2xl:text-[34px] xl:text-3xl text-lg sm:text-2xl leading-[28px] font-bold mb-4 sm:mb-8'>
							Індивідуальний підхід
						</h4>
						<p className='2xl:text-[22px] xl:text-xl lg:text-lg sm:text-xl text-base leading-[28px]'>
							Після визначення рівня за методикою{' '}
							<br className='xl:hidden lg:block hidden sm:block' />
							<span className='font-bold'>( Age+ Level)</span> ми підбираємо
							групу, де рівень інших дітей відповідає рівню вашої дитини, що
							зробить комфортним онлайн курс англійської мови, та якщо потрібно
							протестуємо додатково на першому занняті.
						</p>
					</div>
					<div
						data-aos='zoom-out'
						data-aos-delay='500'
						className='relative rounded-[20px] bg-[#FEFCFB] shadow_item pt-[38px] pl-[25px] s:pl-[45px] sm:pl-[59px] 1500:pl-[79px] sm:max-w-[90%] md:max-w-[723px] 2xl:pr-pr-[88px] s:pr-[38px] pr-[25px] sm:h-[365px] h-auto xl:h-[333px] 1500:h-[314px] sm:pb-[65px] pb-[35px]'
					>
						<img
							className='absolute sm:top-[-40px] top-[-50px] sm:left-[-50px] left-[-15px] sm:size-auto size-[90px]'
							src={book}
						/>
						<span className='absolute top-[38px] 1500:right-[58px] 2xl:right-[38px] right-[20px] 2xl:text-[50px] sm:text-[40px] text-[32px] leading-[28px] font-bold text-[#99DBFE]'>
							02
						</span>
						<h4 className='2xl:text-[34px] xl:text-3xl text-lg sm:text-2xl leading-[28px] font-bold mb-4 sm:mb-8'>
							Досягнення результату
						</h4>
						<p className='2xl:text-[22px] xl:text-xl lg:text-lg sm:text-xl text-base leading-[28px]'>
							Вчитель слідкує за прогресом учня та якщо потрібно, ми надаємо
							додаткові уроки, або завдання для відпрацювання, бо для нас
							важливо щоб поставлені цілі щодо навчання були виконані. Батьки
							можуть завжди подивитись результат уроків.
						</p>
					</div>
					<div
						data-aos='zoom-out'
						data-aos-delay='700'
						className='relative rounded-[20px] bg-[#FEFCFB] shadow_item pt-[38px] pl-[25px] s:pl-[45px] sm:pl-[59px] 1500:pl-[79px] sm:max-w-[90%] md:max-w-[723px] 2xl:pr-[58px] s:pr-[38px] pr-[25px] sm:h-[365px] h-auto xl:h-[333px] 1500:h-[314px] sm:pb-[65px] pb-[35px]'
					>
						<img
							className='absolute sm:top-[-30px] top-[-45px] left-[-20px] sm:size-auto size-[90px]'
							src={notepad}
						/>
						<span className='absolute top-[38px] 1500:right-[58px] 2xl:right-[38px] right-[20px] 2xl:text-[50px] sm:text-[40px] text-[32px] leading-[28px] font-bold text-[#23BEC0]'>
							03
						</span>
						<h4 className='2xl:text-[34px] xl:text-3xl text-lg sm:text-2xl leading-[28px] font-bold mb-4 sm:mb-8'>
							Цікавість та інтерес
						</h4>
						<p className='2xl:text-[22px] xl:text-xl lg:text-lg sm:text-xl text-base leading-[28px]'>
							Діти всі різні, але наша задача зацікавити, розкрити або задіяти
							дитину. Тому навчання проходить на цікаві теми за допомогою
							сучасних ігор таких як Kahhot, Quizlet та інших, вони вбудовані в
							процес навчання по наших підручниках,  розбираємо тренди наших
							днів, та ті теми які викликать інтерес у дітей.
						</p>
					</div>
					<div
						data-aos='zoom-out'
						data-aos-delay='900'
						className='relative rounded-[20px] bg-[#FEFCFB] shadow_item pt-[38px] pl-[25px] s:pl-[45px] sm:pl-[59px] 1500:pl-[79px] sm:max-w-[90%] md:max-w-[723px] 2xl:pr-pr-[88px] s:pr-[38px] pr-[25px] sm:h-[365px] h-auto xl:h-[333px] 1500:h-[314px] sm:pb-[65px] pb-[35px]'
					>
						<img
							className='absolute sm:top-[-40px] top-[-50px] sm:left-[-50px] left-[-15px] sm:size-auto size-[90px]'
							src={arch}
						/>
						<span className='absolute top-[38px] 1500:right-[58px] 2xl:right-[38px] right-[20px] 2xl:text-[50px] sm:text-[40px] text-[32px] leading-[28px] font-bold text-[#E2D1BA]'>
							04
						</span>
						<h4 className='2xl:text-[34px] xl:text-3xl sm:max-w-[90%] max-w-[85%] text-lg sm:text-2xl leading-[28px] font-bold mb-4 sm:mb-8'>
							Методика «Перевернутого <br className='md:block hidden' /> уроку»
							Flipped classroom
						</h4>
						<p className='2xl:text-[22px] xl:text-xl lg:text-lg sm:text-xl text-base leading-[28px]'>
							<span className='font-bold'>Flipped classroom</span> дуже діюча та
							вражаюча методика у світовій практиці. Це коли дитина
							продивлюється урок до уроку, i ця методика дозволяє відчувати себе
							більш впевненою на уроці та швидше запам’ятовувати матеріал.
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

export default StudyProcess;
