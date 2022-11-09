import Head from 'next/head';
import Link from 'next/link';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { signOut, useSession } from 'next-auth/react';
import { Menu } from '@headlessui/react';
import DropdownLink from './DropdownLink';

const Layout = ({ children, title }) => {
	const { status, data: session } = useSession();

	const logoutClickHandler = () => {
		signOut({ callbackUrl: '/signin' });
	};

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
								<Menu as="div" className="relative inline-block">
									<Menu.Button className="text-blue-600">
										{session.user.name}
									</Menu.Button>
									<Menu.Items className="absolute right-0 w-56 origin-top-right bg-white  shadow-lg flex flex-col">
										<Menu.Item>
											<DropdownLink className="dropdown-link" href="/profile">
												Profile
											</DropdownLink>
										</Menu.Item>
										<Menu.Item>
											<DropdownLink
												className="dropdown-link"
												href="/order-history"
											>
												Order History
											</DropdownLink>
										</Menu.Item>
										<Menu.Item>
											<a
												className="dropdown-link"
												href="#"
												onClick={logoutClickHandler}
											>
												Logout
											</a>
										</Menu.Item>
									</Menu.Items>
								</Menu>
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
