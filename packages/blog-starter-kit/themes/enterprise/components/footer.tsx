import Link from 'next/link';
export const Footer = () => {
	return (
		<footer className="md:px-20 p-10 md:flex-row flex-col items-center justify-center rounded-t-3xl lg:mx-10 bg-gray-900 ">

			<div className=" text-gray-100 py-20  flex  md:flex-row flex-col">
				<div className="md:w-1/2 mx-auto m-4 md:text-left ">

					<p className="mt-2  text-4xl font-manrope  font-extrabold text-white">Replace your new tab with a mindful productive app</p>
					<div className="flex items-center ">
						<a href="https://twitter.com/tabwaveapp" target="_blank" rel="noreferrer" className=" flex justify-center p-2 rounded">
							<svg xmlns="http://www.w3.org/2000/svg" className="fill-current text-gray-600 hover:text-white" fill="current" width="24" height="24" ><path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path></svg>
						</a>
						<a href="https://www.instagram.com/tabwaveapp" target="_blank" rel="noreferrer" className="rounded flex justify-center p-2">
							<svg xmlns="http://www.w3.org/2000/svg" fill="current" className="fill-current  text-gray-600 hover:text-white " width="24" height="24"><path d="M20.947 8.305a6.53 6.53 0 0 0-.419-2.216 4.61 4.61 0 0 0-2.633-2.633 6.606 6.606 0 0 0-2.186-.42c-.962-.043-1.267-.055-3.709-.055s-2.755 0-3.71.055a6.606 6.606 0 0 0-2.185.42 4.607 4.607 0 0 0-2.633 2.633 6.554 6.554 0 0 0-.419 2.185c-.043.963-.056 1.268-.056 3.71s0 2.754.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.043 1.268.056 3.71.056s2.755 0 3.71-.056a6.59 6.59 0 0 0 2.186-.419 4.615 4.615 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.187.043-.962.056-1.267.056-3.71-.002-2.442-.002-2.752-.058-3.709zm-8.953 8.297c-2.554 0-4.623-2.069-4.623-4.623s2.069-4.623 4.623-4.623a4.623 4.623 0 0 1 0 9.246zm4.807-8.339a1.077 1.077 0 0 1-1.078-1.078 1.077 1.077 0 1 1 2.155 0c0 .596-.482 1.078-1.077 1.078z"></path><circle cx="11.994" cy="11.979" r="3.003"></circle></svg>
						</a>
					</div>
				</div>


				<div className="md:w-1/2 text-lg m-4  flex md:flex-row flex-col  md:text-left text-gray-700 ">
					<div className="md:w-1/2 w-full px-4">

						<span className="font-semibold text-gray-200">Resources</span>
						<nav className="list-none text-gray-400 ">
							<li className="my-1 hover:text-gray-100">
								<Link href="https://tabwave.app/about">About</Link>
							</li>
							<li className="my-1 hover:text-gray-100">
								<Link href="/">Blog</Link>
							</li>
							<li className="my-1 hover:text-gray-100">
								<Link href="https://tabwave.app/blog/tag/changelog"><div className="cursor-pointer">Changelog <span className="text-xs mx-2 text-white bg-pink-500 px-4 p-1 rounded-lg">New</span></div></Link>
							</li>
							<li className="my-1 hover:text-gray-100">
								<a href="https://tally.so/r/wA77XW" target="_blank" rel="noreferrer">Feedback</a>
							</li>

							<li className="my-1 hover:text-gray-100">
								<Link href="ttps://tabwave.app/faq">FAQ</Link>
							</li>

						</nav>
					</div>

					<div className="md:w-1/2 w-full px-4">
						<nav className="list-none ">
							<span className="font-semibold text-gray-200">Product</span>

							<div className="text-gray-400">

								<li className="my-1 hover:text-gray-100">
									<button onClick={() => window.open('https://web.tabwave.app', '_blank', "width=1300, height=700", 'toolbar=0,location=0,menubar=0')} >
										Web app
									</button>
								</li>

								<li className="my-1 hover:text-gray-100">
									<a href="https://chrome.google.com/webstore/detail/tabwave/kilclhheeidneiiiaeggbadgommkdhbc" target="_blank" rel="noreferrer">Chrome Extension</a>
								</li>

								<li className="my-1 hover:text-gray-100">
									<a href="https://addons.mozilla.org/en-US/firefox/addon/tabwave/" target="_blank" rel="noreferrer">Firefox addons</a>
								</li>
							</div>

						</nav>
					</div>

				</div>

			</div>
		</footer>
	);
};
