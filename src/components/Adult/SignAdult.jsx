import sigh_img from '../../assets/adult/form_img.png';
import ContactForm from '../ContactForm';

const SignAdult = () => {
	return (
		<section className='pt-[50px] bg-[#FEFCFB] sm:pt-[80px] pb-[50px] sm:pb-[100px]'>
			<div className='content'>
				<h2 className='section_title mx-auto text-center max-w-[90%] sm:max-w-[744px] mb-[10px] sm:mb-[50px]'>
					Мені все зрозуміло,
					<br /> хочу навчатись!
				</h2>
				<div className='flex lg:flex-row flex-col justify-center'>
					<img
						loading='lazy'
						className='sign_img relative bg-[#F4F4F5] z-10 object-cover w-full  lg:w-[450px] lg:bottom-0 bottom-[-10px] xl:w-[550px] 2xl:w-[710px] lg:left-4'
						src={sigh_img}
					/>
					<ContactForm adult={true} sign={true} />
				</div>
			</div>
		</section>
	);
};

export default SignAdult;
