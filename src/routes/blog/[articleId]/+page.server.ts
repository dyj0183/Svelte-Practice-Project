export const load = async ({ params }) => {
	console.log('params', params);

	return {
		articleDetails: 'article details from BE',
		articleId: params.articleId
	};
};
