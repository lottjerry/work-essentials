import Head from 'next/head';
import Link from 'next/link';

const Register = () => {
	return (
		<>
			<Head>
				<title>{'Register | Work Essentials'}</title>
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
							Create Account
						</h2>
					</div>
					<form className="m-8 space-y-6" action="#" method="POST">
						<input type="hidden" name="remember" defaultValue="true" />
						<div className="flex flex-col gap-5 shadow-sm">
							<div>
								<label htmlFor="first-name" className="sr-only">
									First Name
								</label>
								<input
									id="first-name"
									name="text"
									type="text"
									autoComplete="text"
									required
									className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
									placeholder="First Name"
								/>
							</div>
							<div>
								<label htmlFor="last-name" className="sr-only">
									Last Name
								</label>
								<input
									id="last-name"
									name="text"
									type="text"
									autoComplete="text"
									required
									className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
									placeholder="Last Name"
								/>
							</div>
							<div>
								<label htmlFor="user-name" className="sr-only">
									UserName
								</label>
								<input
									id="user-name"
									name="text"
									type="text"
									autoComplete="text"
									required
									className="relative block w-full appearance-none rounded md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
									placeholder="User Name"
								/>
							</div>
							<div>
								<label htmlFor="password" className="sr-only">
									Password
								</label>
								<input
									id="password"
									name="password"
									type="password"
									required
									className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
									placeholder="Password"
								/>
							</div>
							<div>
								<label htmlFor="confirm-password" className="sr-only">
									Confirm Password
								</label>
								<input
									id="confirm-password"
									name="password"
									type="password"
									required
									className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
									placeholder="Confirm Password"
								/>
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
								href={'/login'}
								className=" text-indigo-600 hover:text-indigo-500"
							>
								Login
							</Link>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default Register;
