import Link from 'next/link';
import Head from 'next/head';
import { useForm } from 'react-hook-form';
const Login = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const submitHandler = (data) => {};

	return (
		<>
			<Head>
				<title>{'Login | Work Essentials'}</title>
				<meta name="description" content="Schedule Website" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
				<div className="w-full max-w-md  shadow-2xl border-2 rounded-md">
					<div>
						<img
							className="mx-auto h-12 w-auto mt-5"
							src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
							alt="Your Company"
						/>
						<h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
							Sign in to your account
						</h2>
					</div>
					<form
						className="m-8 space-y-6"
						onSubmit={handleSubmit(submitHandler)}
					>
						<input type="hidden" name="remember" defaultValue="true" />
						<div className="-space-y-px rounded-md shadow-sm">
							<div>
								<input
									type="text"
									placeholder="User name"
									{...register('user-name', { required: 'Please enter a user name', maxLength: 15 })}
									className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
								/>
								{errors.text && (<div className='text-red-500'>{errors.email.message}</div>)}
							</div>
							<div>
								<input
									type="password"
									placeholder="Password"
									{...register('Password', {
										required: true,
										min: 5,
										maxLength: 100,
									})}
									className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
								/>
							</div>
						</div>

						<div className="flex items-center justify-between">
							<div className="flex items-center">
								<input
									id="remember-me"
									name="remember-me"
									type="checkbox"
									className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
								/>
								<label
									htmlFor="remember-me"
									className="ml-2 block text-sm text-gray-900"
								>
									Remember me
								</label>
							</div>

							<div className="text-sm">
								<a
									href="#"
									className="font-medium text-indigo-600 hover:text-indigo-500"
								>
									Forgot your password?
								</a>
							</div>
						</div>

						<div>
							<button
								type="submit"
								className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
							>
								<span className="absolute inset-y-0 left-0 flex items-center pl-3"></span>
								Sign in
							</button>
						</div>
						<div className="mb-4 ml-2 block text-sm text-gray-900">
							Don&apos;t have an account? &nbsp;
							<Link
								href={'/register'}
								className=" text-indigo-600 hover:text-indigo-500"
							>
								Register
							</Link>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default Login;
