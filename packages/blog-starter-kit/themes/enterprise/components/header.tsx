import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import Link from 'next/link';
import { PublicationNavbarItem } from '../generated/graphql';
import { Container } from './container';
import { useAppContext } from './contexts/appContext';
import Image from 'next/image';
import logo from '../assets/logo.png'

function hasUrl(
	navbarItem: PublicationNavbarItem,
): navbarItem is PublicationNavbarItem & { url: string } {
	return !!navbarItem.url && navbarItem.url.length > 0;
}

export const Header = () => {
	const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || '/';
	const { publication } = useAppContext();
	const PUBLICATION_LOGO = publication.preferences.darkMode?.logo || publication.preferences.logo;
	const navbarItems = publication.preferences.navbarItems.filter(hasUrl);
	const visibleItems = navbarItems.slice(0, 3);
	const hiddenItems = navbarItems.slice(3);

	const navList = (
		<ul className="flex flex-row items-center gap-2 text-white">
			{visibleItems.map((item) => (
				<li key={item.url}>
					<a
						href={item.url}
						target="_blank"
						rel="noopener noreferrer"
						className="transition-200 block max-w-[200px] truncate text-ellipsis whitespace-nowrap rounded-full p-2 transition-colors hover:bg-white hover:text-black dark:hover:bg-neutral-800 dark:hover:text-white"
					>
						{item.label}
					</a>
				</li>
			))}

			{hiddenItems.length > 0 && (
				<li>
					<DropdownMenu.Root>
						<DropdownMenu.Trigger asChild>
							<button className="transition-200 block rounded-full p-2 transition-colors hover:bg-white hover:text-black dark:hover:bg-neutral-800 dark:hover:text-white">
								More
							</button>
						</DropdownMenu.Trigger>

						<DropdownMenu.Portal>
							<DropdownMenu.Content
								className="w-48 rounded border border-gray-300 bg-white text-neutral-950 shadow-md dark:border-neutral-800 dark:bg-neutral-900 dark:text-white"
								align="end"
								sideOffset={5}
							>
								{hiddenItems.map((item) => (
									<DropdownMenu.Item asChild key={item.url}>
										<a
											href={item.url}
											target="_blank"
											rel="noopener noreferrer"
											className="transition-200 block truncate p-2 transition-colors hover:bg-slate-100 hover:text-black dark:hover:bg-neutral-800 dark:hover:text-white"
										>
											{item.label}
										</a>
									</DropdownMenu.Item>
								))}
							</DropdownMenu.Content>
						</DropdownMenu.Portal>
					</DropdownMenu.Root>
				</li>
			)}
		</ul>
	);

	return (
		<header className="">
        
		<div className='sticky md:top-2 top-0 z-10'>
            <nav className="border bg-white  md:rounded-full md:m-2 text-gray-800 border-gray-50   p-2 md:w-8/12 md:mx-auto flex flex-row items-center">
                <Link href="https://tabwave.app" >
                    <div className="flex items-center cursor-pointer">
                        <div className="w-6 h-6 m-1 border-2 border-white rounded-full">
                            <Image src={logo} alt="logo" />

                        </div>
                        <span className="md:text-lg font-dmsans font-semibold text-lg px-2  ">
                            Tabwave
                        </span>
                    </div>
                </Link>

                <div className="flex font-medium  md:text-lg text-sm flex-row items-center ml-auto mr-2 ">
                    <Link href="https://tabwave.app/about" >
                        <span className="m-2  cursor-pointer hover:text-pink-400  ">About</span>
                    </Link>

                    {/* <Link href="/tag/changelog" >
                        <span className="m-2  cursor-pointer  hover:text-pink-400">What&#39;s new</span>
                    </Link> */}
                    <Link href="/" >
                        <span className="m-2  cursor-pointer hover:text-pink-400  ">Blog</span>
                    </Link>
                </div>
            </nav>
        </div>
			{/* <Container className="grid grid-cols-4 gap-5 px-5">

				<div className="col-span-2 flex flex-row items-center justify-end gap-5 text-slate-300 lg:col-span-3">
					<nav className="">{navList}</nav>
				</div>
			</Container> */}
		</header>
	);
};
