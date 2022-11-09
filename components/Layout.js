import Head from 'next/head';
import Link from 'next/link';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSession } from 'next-auth/react';

const Layout = ({ children, title }) => {
	const { status, data: session } = useSession();

	return (
		<>
			<Head>
				<title>
					{title ? title + ' | Work Essentials' : 'Work Essentials'}
				</title>
				<meta name="description" content="Schedule Website" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<ToastContainer position="bottom-center" limit={1} />
			<div className="flex min-h-screen flex-col justify-between">
				<header>
					<nav className="flex h-12 justify-between shadow-md items-center px-4">
						<Link href={'/'} className="text-lg font-bold">
							Work Essentials
						</Link>
						<div>
							<Link href={'/cart'} className="p-2">
								Schedule
							</Link>
							{status === 'loading' ? (
								'Loading'
							) : session?.user ? (
								session.user.name
							) : (
								<Link href={'/signin'} className="p-2">
									Sign in
								</Link>
							)}
						</div>
					</nav>
				</header>
				<main className="container m-auto mt-4 px-4">{children}</main>
				<footer className="flex justify-center items-center h-10 shadow-inner">
					© 2022 Work Essentials. All Rights Reserved.
				</footer>
			</div>
		</>
	);
};

export default Layout;
