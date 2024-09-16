import Btn from '../Btn';

import certificate from '../../assets/certificate.svg';
import school from '../../assets/school.svg';

const StudyStart = () => {
	return (
		<section className='pb-[50px] sm:pb-[103px]'>
			<div className='content '>
				<h2 className='section_title md:text-center mb-10 sm:mb-[76px]'>
					Я хочу щоб моя дитина навчалась <br className='md:block hidden' /> у
					вашій школі, з чого почати?
				</h2>
				<div className='grid lg:grid-cols-2 items-start justify-between lg:gap-[80px] 2xl:gap-[150px] mb-[104px] '>
					<div className='grid'>
						<div
							data-aos='zoom-in-down'
							className='pt-[21px] relative pl-[20px] pb-[29px]  2xl:h-[182px] lg:h-[200px] xl:h-[210px] '
						>
							<div className='text-[#FB9D18] absolute sm:top-0 top-3 lg:left-[-50px] sm:left-[-30px] left-[-15px] lg:text-[100px] sm:text-[70px] text-[50px] tracking-[5px] font-bold'>
								1
							</div>
							<img
								src={school}
								className='absolute z-[1] lg:size-auto size-[70px] s:size-[100px] bottom-4 s:top-[50px] lg:hidden block xl:block 1500:top-[20px] right-0 lg:right-[-10px]'
							/>
							<p className='leading-[28px] xl:text-[22px] lg:text-xl sm:text-[22px] mb-4'>
								Онлайн-тест на визначення рівня англійської мови.
								<br className='lg:block hidden' /> Це займе 5 хв. але це дуже
								важливо,{' '}
							</p>
							<Btn
								text='Заповніть анкету та Пройдіть тест'
								target='_blank'
								href='https://my.talken.cloud/student/registration/a92fca0b9fe1c4b12c8093aea33b9fdbe1577e3e'
								btn_style='test_btn study_start'
							/>
							<Btn
								text='Залишити заявку'
								target='_blank'
								href='https://my.talken.cloud/student/registration/a92fca0b9fe1c4b12c8093aea33b9fdbe1577e3e'
								btn_style='test_btn study_startMob'
							/>
						</div>
						<div
							data-aos='zoom-in-up'
							data-aos-delay='500'
							className='pt-[21px] pb-[14px] pl-[20px] lg:h-[140px] relative z-[5] '
						>
							<div className='text-[#99DBFE] absolute sm:top-0 top-3 lg:left-[-50px] sm:left-[-30px] left-[-15px] lg:text-[100px] sm:text-[70px] text-[50px] tracking-[5px] font-bold'>
								2
							</div>
							<p className='leading-[28px] xl:text-[22px] lg:text-xl sm:text-[22px] mb-4 '>
								Після тестування наш адміністратор з’яжеться з вами та розкаже в
								яку групу піде ваша дитина враховуючи рівень англійської за
								методикою <span className='font-bold'>(Age+Level)</span>.
							</p>
						</div>
						<div
							data-aos='zoom-in-up'
							data-aos-delay='700'
							className='pt-[21px] pb-[12px] pl-[20px] lg:h-[200px] xl:h-[200px] relative 2xl:h-[170px]'
						>
							<div className='text-[#23BEC0] absolute sm:top-0 top-3 lg:left-[-50px] sm:left-[-30px] left-[-15px] lg:text-[100px] sm:text-[70px] text-[50px] tracking-[5px] font-bold'>
								3
							</div>
							<p className='leading-[28px] xl:text-[22px] lg:text-xl sm:text-[22px] mb-4 '>
								Перший урок на онлан курсі англійської мови є пробним, де учні
								знайомляться з вчителем та між собою. У цій групі дитина
								продовжить навчання, якщо буде рекомендація від вчителя чи за
								бажання батьків, групу можна змінити (за навності).
							</p>
						</div>
					</div>
					<div className='grid'>
						<div
							data-aos='zoom-in-up'
							data-aos-delay='900'
							className='pt-[21px]  relative pl-[20px] pb-[29px] 2xl:h-[182px] lg:h-[200px] xl:h-[210px] '
						>
							<div className='text-[#534C72] absolute sm:top-0 top-3 lg:left-[-50px] sm:left-[-30px] left-[-15px] lg:text-[100px] sm:text-[70px] text-[50px] tracking-[5px] font-bold'>
								4
							</div>
							<p className='leading-[28px] xl:text-[22px] lg:text-xl sm:text-[22px] '>
								Всі уроки онлайн англійської мови будуть проходити на
								онлайн-платформі <span className='font-bold'>TalkEn.Cloud</span>{' '}
								серед однолітків, що зробить навчання комфортним та цікавим з
								любого девайсу.{' '}
								<a
									href='https://drive.google.com/file/d/1KUEsIK_81QJjHV53dostSkJ0xQ1ZvLVj/view'
									target='_blank'
									className='text-[#A032C7] font-semibold'
								>
									Презентація платформи TalkEn.Cloud
								</a>{' '}
							</p>
						</div>
						<div
							data-aos='zoom-in-up'
							data-aos-delay='1100'
							className='pt-[21px]  relative pl-[20px] pb-[14px] lg:h-[140px] '
						>
							<div className='text-[#A032C7] absolute sm:top-0 top-3 lg:left-[-50px] sm:left-[-30px] left-[-15px] lg:text-[100px] sm:text-[70px] text-[50px] tracking-[5px] font-bold'>
								5
							</div>
							<img
								src={certificate}
								className='absolute lg:size-auto size-[70px] s:size-[90px] 2xl:right-[-90px] right-[-25px] s:right-0 lg:right-[-60px] top-[40%] s:top-[10%] lg:top-[40%] lg:hidden block xl:block'
							/>
							<p className='leading-[28px] xl:text-[22px] lg:text-xl sm:text-[22px] max-w-[85%] lg:max-w-[92%] mb-4'>
								Після закінчення курсу є фінальний тест. Сертифікат доступний
								онлайн, де буде прописано дані учня та його результат
							</p>
						</div>
						<div
							data-aos='zoom-in-up'
							data-aos-delay='1300'
							className='pt-[21px]  relative pl-[20px] pb-[12px] lg:h-[200px] xl:h-[200px] 2xl:h-[170px] '
						>
							<div className='text-[#E2D1BA] absolute sm:top-0 top-3 lg:left-[-50px] sm:left-[-30px] left-[-15px] lg:text-[100px] sm:text-[70px] text-[50px] tracking-[5px] font-bold'>
								6
							</div>
							<p className='leading-[28px] xl:text-[22px] lg:text-xl sm:text-[22px] mb-4 '>
								Перехід на інший рівень після закінчення курсу проходить
								автоматично. Якщо дитина не готова, для неї буде підібраний
								індивідуальний план навчання, такі випадки обговорюються з
								батьками особисто.
							</p>
						</div>
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

export default StudyStart;
