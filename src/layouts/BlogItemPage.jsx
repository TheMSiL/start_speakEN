import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { ArticlesContext } from '../context/ArticlesContext';
import ContactForm from '../components/ContactForm'

const BlogItemPage = () => {
	const { id } = useParams();
	const articles = useContext(ArticlesContext);
	const article = articles.find(article => article.id === id);

	if (!article) {
		return <div className='text-4xl sm:text-[60px] lg:text-[100px] flex-1 text-center py-[100px] text-red-500'>Сторінка не найдена</div>;
	}

	return (
		<section className='pb-[50px]'>
			<div className='content'>
				<img className='w-[500px] mx-auto block mb-10' src={article.img}  />
				{article.text}
				<div className='mt-[50px] flex items-center justify-center'>
				<ContactForm/>
				</div>
			</div>
		</section>
	);
};

export default BlogItemPage;
