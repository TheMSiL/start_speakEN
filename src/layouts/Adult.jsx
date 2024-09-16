import AdvantagesAdult from '../components/Adult/AdvantagesAdult';
import MainAdult from '../components/Adult/MainAdult';
import Notes from '../components/Adult/Notes';
import PackagesAdult from '../components/Adult/PackagesAdult';
import Promo from '../components/Adult/Promo';
import Promo2 from '../components/Adult/Promo2';
import QuestionsAdult from '../components/Adult/QuestionsAdult';
import Results from '../components/Adult/Results';
import ReviewsAdult from '../components/Adult/ReviewsAdult';
import SignAdult from '../components/Adult/SignAdult';
import StudyStartAdult from '../components/Adult/StudyStartAdult';
import WhyUsAdult from '../components/Adult/WhyUsAdult';
import ContactForm from '../components/ContactForm';

const Adult = () => {
	return (
		<>
			<MainAdult />
			<section className='flex items-center justify-center pb-[50px] sm:pb-[100px]'>
				<div className='content'>
					<ContactForm
						animate={true}
						title='Запишись на пробний урок і отримай знижку 5%!'
					/>
				</div>
			</section>
			<AdvantagesAdult />
			<PackagesAdult />
			<Results />
			<Promo />
			<WhyUsAdult />
			<Notes />
			<StudyStartAdult />
			<ReviewsAdult/>
			<SignAdult />
			<QuestionsAdult />
			<Promo2 />
		</>
	);
};

export default Adult;
