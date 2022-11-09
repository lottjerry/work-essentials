import Link from 'next/link';
import React, { useEffect } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import { getError } from '../utils/error';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
	const { data: session } = useSession();

	const router = useRouter();
	const { redirect } = router.query;

	useEffect(() => {
		if (session?.user) {
			router.push(redirect || '/');
		}
	}, [router, session, redirect]);

	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm();
	const submitHandler = async ({ email, password }) => {
		try {
			const result = await signIn('credentials', {
				redirect: false,
				email,
				password,
			});
			if (result.error) {
				toast.error(result.error);
			}
		} catch (err) {
			toast.error(getError(err));
		}
	};
	return (
		<>
			<Head>
				<title>{'Sign in | Work Essentials'}</title>
				<meta name="description" content="Schedule Website" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<ToastContainer position="bottom-center" limit={1} />
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
						<div className="flex flex-col gap-5 rounded-md shadow-sm">
							<div>
								<input
									type="text"
									placeholder="Email"
									autoFocus
									{...register('email', {
										required: '⚠ Enter a email',
										pattern: {
											value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
											message: 'Please enter valid email',
										},
									})}
									className={
										errors.email
											? 'relative block w-full appearance-none rounded-md border border-red-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm'
											: 'relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
									}
								/>
								{errors.email && (
									<div className="text-red-500 ml-2 block text-sm pt-2">
										{errors.email.message}
									</div>
								)}
							</div>
							<div>
								<input
									type="password"
									placeholder="Password"
									autoFocus
									{...register('password', {
										required: '⚠ Enter a password',
										maxLength: 100,
									})}
									className={
										errors.password
											? 'relative block w-full appearance-none rounded-md border border-red-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm'
											: 'relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
									}
								/>
								{errors.password && (
									<div className="text-red-500 ml-2 block text-sm pt-2">
										{errors.password.message}
									</div>
								)}
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
								data-mdb-ripple="true"
								data-mdb-ripple-color="light"
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
								Create Account
							</Link>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default Login;
