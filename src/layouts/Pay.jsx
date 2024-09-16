import oferta from '../../public/oferta.pdf';
import ContactForm from '../components/ContactForm';

const Pay = () => {
	return (
		<section className='py-[50px] flex-1'>
			<div className='content'>
				<h2 className='section_title mb-10 text-center'>Оплата</h2>
				<div className='grid xl:grid-cols-2 sm:justify-items-center items-start justify-between'>
					<div className='sm:text-2xl text-xl' data-aos='fade-right'>
						<p className='font-semibold text-2xl xl:text-3xl'>
							Рахунок в евро (для тих хто за кордоном)
						</p>
						<div className='my-5 p-5  w-full s:w-[350px] sm:w-[515px] h-[200px] sm:my-10 border-2 border-purple-500 inline-block rounded-[20px] text-base s:text-lg sm:text-xl'>
							<p className='font-bold'>
								IBAN <br className='sm:hidden block' />{' '}
								PT50001800035794977802060
							</p>
							<br /> Alina Filonenko
							<br /> Країна -Португалія
						</div>
					</div>
					<div className='sm:text-2xl text-xl' data-aos='fade-left'>
						<p className='font-semibold text-2xl xl:text-3xl'>
							Рахунок в гривнях
						</p>
						<div className='my-5 p-5  w-full s:w-[350px] sm:w-[515px] h-[200px] sm:my-10  border-2 border-purple-500 inline-block rounded-[20px] text-base s:text-lg sm:text-xl'>
							<p className='font-bold'>
								IBAN
								<br className='sm:hidden block' /> UA163220010000026006300064444
							</p>
							<br /> Тройно Олександра
						</div>
					</div>
				</div>
				<a
					href={oferta}
					download
					className='my-[50px] w-fit mx-auto block text-lg text-center text-purple-500 font-semibold'
				>
					Скачати та ознайомитися з договором оферти
				</a>

				<div className='flex items-center justify-center'>
					<ContactForm />
				</div>
			</div>
		</section>
	);
};

export default Pay;
