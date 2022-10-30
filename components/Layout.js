import Head from 'next/head';
import Link from 'next/link';

const Layout = ({ children, title }) => {
	return (
		<>
			<Head>
				<title>
					{title ? title + ' | Work Essentials' : 'Work Essentials'}
				</title>
				<meta name="description" content="Schedule Website" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
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
							<Link href={'/login'} className="p-2">
								Login
							</Link>
						</div>
					</nav>
				</header>
				<main className="container m-auto mt-4 px-4">{children}</main>
				<footer className="flex justify-center items-center h-10 shadow-inner">© 2022 Work Essentials. All Rights Reserved.
				</footer>
			</div>
		</>
	);
};

export default Layout;
