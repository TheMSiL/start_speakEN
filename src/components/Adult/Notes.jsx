import notes from '../../assets/adult/notes.png';

const Notes = () => {
	return (
		<section className='bg-[#f6f6f6] py-10 xl:py-[105px]'>
			<div className='content flex xl:flex-row flex-col-reverse items-center xl:items-start justify-between gap-12'>
				<img data-aos='zoom-out-up' src={notes} />
				<div
					data-aos='zoom-out-down'
					className='s:text-lg text-base sm:text-[22px] leading-7 max-w-[860px] flex flex-col gap-3 s:gap-5'
				>
					<div className='rounded-[10px] p-3 border-2 mb-10 text-center border-[#99DBFE] text-lg lg:text-[21px] font-medium leading-6'>
						Трохи інформаціі про нашу сучасну платформу, яка дійсно заслуговує
						уваги при виборі онлайн курсів англійської мови.
					</div>
					<h2 className='font-bold sm:text-[32px] text-2xl sm:leading-[38px]'>
						<span className='text-[#a032c7]'>«NOTES» -</span> ЦЕ ІНТЕРАКТИВНА ТА
						УНІКАЛЬНА ПЛАТФОРМА В УКРАЇНІ ДЛЯ ВИВЧЕННЯ АНГЛІЙСЬКОЇ МОВИ ОНЛАЙН
						ДЛЯ ДОРОСЛИХ.
					</h2>
					<p>
						Гібридна платформа <span className='font-bold'>«Notes»</span> - це
						найсучасніша розробка в сфері вивчення англійської мови в Україні та
						наша перевага на ринку.
					</p>
					<p>
						П’ятикомпонентна система засвоєння матеріалу, гарантує швидкий
						прогрес в оволодінні англійської мови. В цю систему входить:
						інтерактивний підручник, практичні уроки, система тестування, відео
						заняття, доступ до інших коригуючих спецкурсів з любого девайсу.
					</p>
					<p>
						А також{' '}
						<span className='font-bold'>
							650 безкоштовних додаткових спецкурсів, розмовних клубів,
							граматичних та лексичних курсів
						</span>{' '}
						для всіх вікових категорій та рівнів студента.
					</p>
					<p>
						<span className='font-bold'>
							9 найсучасніших підходів в комунікативній методиці викладання
							англійської мови онлайн
						</span>{' '}
						(CA, GDA, TBL, TTT, ESA, Suggestopedia, Dogme, GTM, ALA).
					</p>
					<div className='rounded-[10px] p-3 border-2 mb-10 text-center border-[#99DBFE] text-lg lg:text-[21px] font-medium leading-6'>
						Набір в групи проводиться щоміся для всіх рівнів від Beginner до
						Advanced, для різних цілей та задач, результат гарантовано при умові
						проходження програми. Все дуже просто коли є мотивація та ціль.
					</div>
				</div>
			</div>
		</section>
	);
};

export default Notes;
