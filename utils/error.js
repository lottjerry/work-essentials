const getError = (error) =>
	error.response && error.response.data && error.response.message
		? error.response.data.message
		: error.message;

export { getError };
