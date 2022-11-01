import Link from 'next/link';
import Head from 'next/head';
import { useForm } from 'react-hook-form';
import { useRef } from 'react';

const Register = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	const password = useRef({});
	password.current = watch('password', '');

	const submitHandler = (data) => {
		console.log(data);
	};
	return (
		<>
			<Head>
				<title>{'Create Account | Work Essentials'}</title>
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
							Create your Work Essentials Account
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
									placeholder="First name"
									autoFocus
									{...register('firstName', {
										required: '⚠ Enter your first name',
										maxLength: 20,
										pattern: {
											value: /^[A-Z][a-z]+$/,
											message:
												'⚠ Sorry, first name must start with an upper-case letter and can only contain letters',
										},
									})}
									className={
										errors.firstName
											? 'relative block w-full appearance-none rounded-md border border-red-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm'
											: 'relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
									}
								/>
								{errors.firstName && (
									<div className="text-red-500 ml-2 block text-sm pt-2">
										{errors.firstName.message}
									</div>
								)}
							</div>
							<div>
								<input
									type="text"
									placeholder="Last name"
									autoFocus
									{...register('lastName', {
										required: '⚠ Enter your last name',
										maxLength: 20,
										pattern: {
											value: /^[A-Z][a-z]+$/,
											message:
												'⚠ Sorry, last name must start with an upper-case letter and can only contain letters',
										},
									})}
									className={
										errors.lastName
											? 'relative block w-full appearance-none rounded-md border border-red-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm'
											: 'relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
									}
								/>
								{errors.lastName && (
									<div className="text-red-500 ml-2 block text-sm pt-2">
										{errors.lastName.message}
									</div>
								)}
							</div>
							<div>
								<input
									type="text"
									placeholder="User name"
									autoFocus
									{...register('userName', {
										required: '⚠ Enter a user name',
										maxLength: {
											value: 15,
											message:
												'⚠ Sorry, your username must be between 4 and 15 characters long',
										},
										minLength: {
											value: 4,
											message:
												'⚠ Sorry, your username must be between 4 and 15 characters long',
										},
										pattern: {
											value: /^[A-Za-z0-9]*$/,
											message:
												'⚠ Sorry, your username can only contain alphanumeric characters',
										},
									})}
									className={
										errors.userName
											? 'relative block w-full appearance-none rounded-md border border-red-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm'
											: 'relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
									}
								/>
								{errors.userName && (
									<div className="text-red-500 ml-2 block text-sm pt-2">
										{errors.userName.message}
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
										minLength: {
											value: 8,
											message:
												'⚠ Sorry, your password must be at least 8 characters long',
										},
										pattern: {
											value: /^[A-Za-z0-9@]*$/,
											message:
												'⚠ Sorry, your password can only contain alphanumeric characters and @',
										},
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
							<div>
								<input
									type="password"
									placeholder="Confirm Password"
									autoFocus
									{...register('confirmPassword', {
										required: '⚠ Please confirm Password',
										maxLength: 100,
										validate: (value) =>
											value === password.current || '⚠ Passwords do not match',
									})}
									className={
										errors.confirmPassword
											? 'relative block w-full appearance-none rounded-md border border-red-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm'
											: 'relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
									}
								/>
								{errors.confirmPassword && (
									<div className="text-red-500 ml-2 block text-sm pt-2">
										{errors.confirmPassword.message}
									</div>
								)}
							</div>
						</div>
						<div>
							<button
								type="submit"
								className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
							>
								<span className="absolute inset-y-0 left-0 flex items-center pl-3"></span>
								Create Account
							</button>
						</div>
						<div className="mb-4 ml-2 block text-sm text-gray-900">
							Already have an account? &nbsp;
							<Link
								href={'/signin'}
								className=" text-indigo-600 hover:text-indigo-500"
							>
								Sign in
							</Link>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default Register;
