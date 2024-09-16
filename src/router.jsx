import { createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import HomePage from './layouts/HomePage';
import Blog from './layouts/Blog'
import BlogItemPage from './layouts/BlogItemPage'
import Career from './layouts/Career';
import Contacts from './layouts/Contacts';
import Pay from './layouts/Pay';
import Adult from './layouts/Adult';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				element: <HomePage />,
				index: true,
			},
			{
				element: <Adult />,
				path: '/adult',
			},
			{
				element: <Blog />,
				path: '/blog',
			},
			{
				element: <BlogItemPage />,
				path: '/blog/:id',
			},
			{
				element: <Career />,
				path: '/career',
			},
			{
				element: <Contacts />,
				path: '/contacts',
			},
			{
				element: <Pay />,
				path: '/pay',
			},
		],
	},
]);

export default router;
