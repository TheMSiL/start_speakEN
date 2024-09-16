import ContactForm from '../components/ContactForm';

const Contacts = () => {
	return (
		<section className='py-[50px] flex-1'>
			<div className='content'>
				<h2 className='section_title text-center mb-10'>Контакти</h2>
				<p className='text-center font-medium text-xl sm:text-2xl mb-5'>
					Якщо у вас виникли питання ви можете з нами зв’язатись по пошті або
					написати свої контакти і ми вам передзвонимо.
				</p>
				<div className='sm:text-xl text-[#A032C7] font-medium text-lg flex sm:flex-row flex-col items-center justify-center gap-5'>
					<a href='mailto:startspeaken@ukr.net'>startspeaken@ukr.net</a>
					<a href='tel:+380678377966'>+38 (067) 837-79-66</a>
				</div>
				<div className='mt-[50px] flex items-center justify-center'>
					<ContactForm />
				</div>
			</div>
		</section>
	);
};

export default Contacts;
