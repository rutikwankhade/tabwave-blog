import Link from 'next/link';
import Image from 'next/image';
export const Footer = () => {
	return (
		<div className='lg:px-10'>

        <footer className="md:p-20 p-10 md:flex-row flex-col items-center justify-center  rounded-t-3xl  bg-gray-900 ">


                <div className=" text-gray-100  flex  md:flex-row flex-col">
                    <div className="md:w-1/2 mx-auto m-4 md:text-left ">
                        <a href="https://chrome.google.com/webstore/detail/tabwave/kilclhheeidneiiiaeggbadgommkdhbc" target="_blank" rel="noreferrer"
                            className="px-4 group flex justify-center items-center my-2 rounded-full bg-gray-800 border-2 border-gray-800 hover:border-gray-700 text-white p-2 text-center  text-lg w-max font-dmsans  font-semibold">

							<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" className='w-6 h-6 mr-2'><path fill="#4caf50" d="M44,24c0,11.044-8.956,20-20,20S4,35.044,4,24S12.956,4,24,4S44,12.956,44,24z"/><path fill="#ffc107" d="M24,4v20l8,4l-8.843,16c0.317,0,0.526,0,0.843,0c11.053,0,20-8.947,20-20S35.053,4,24,4z"/><path fill="#4caf50" d="M44,24c0,11.044-8.956,20-20,20S4,35.044,4,24S12.956,4,24,4S44,12.956,44,24z"/><path fill="#ffc107" d="M24,4v20l8,4l-8.843,16c0.317,0,0.526,0,0.843,0c11.053,0,20-8.947,20-20S35.053,4,24,4z"/><path fill="#f44336" d="M41.84,15H24v13l-3-1L7.16,13.26H7.14C10.68,7.69,16.91,4,24,4C31.8,4,38.55,8.48,41.84,15z"/><path fill="#dd2c00" d="M7.158,13.264l8.843,14.862L21,27L7.158,13.264z"/><path fill="#558b2f" d="M23.157,44l8.934-16.059L28,25L23.157,44z"/><path fill="#f9a825" d="M41.865,15H24l-1.579,4.58L41.865,15z"/><path fill="#fff" d="M33,24c0,4.969-4.031,9-9,9s-9-4.031-9-9s4.031-9,9-9S33,19.031,33,24z"/><path fill="#2196f3" d="M31,24c0,3.867-3.133,7-7,7s-7-3.133-7-7s3.133-7,7-7S31,20.133,31,24z"/></svg>
                            <span>Add to Chrome</span>
                        </a>
                        <p className="mt-2  xl:text-4xl text-3xl font-dmsans  font-extrabold text-white">Replace your new tab with a mindful productive app</p>
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
                            <nav className="list-none font-inter text-gray-400 ">
                                <li className="my-1 hover:text-gray-100">
                                    <Link href="https://tabwave.app/about">About</Link>
                                </li>
                                <li className="my-1 hover:text-gray-100">
                                    <Link href="/">Blog</Link>
                                </li>
                                <li className="my-1 hover:text-gray-100">
                                    <Link href="/tag/changelog"><div className="cursor-pointer">Changelog <span className="text-xs mx-2 text-white bg-pink-500 px-4 p-1 rounded-lg">New</span></div></Link>
                                </li>
                                <li className="my-1 hover:text-gray-100">
                                    <a href="https://tally.so/r/wA77XW" target="_blank" rel="noreferrer">Feedback</a>
                                </li>

                                <li className="my-1 hover:text-gray-100">
                                    <Link href="https://tabwave.app/faq">FAQ</Link>
                                </li>

                            </nav>
                        </div>

                        <div className="md:w-1/2 w-full px-4">
                            <nav className="list-none ">
                                <span className="font-semibold text-gray-200">Product</span>

                                <div className="text-gray-400 font-inter">

                                    <li className="my-1 hover:text-gray-100">
                                        <a href="https://web.tabwave.app" target="_blank" rel="noreferrer" >
                                            Web app
                                        </a>
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
				<p className='bg-slate-900  rounded-full text-slate-200 text-md font-inter'><span className='italic'>Blog powered by</span> <a href='https://hashnode.com/headless' target='_blank' rel='noreferrer' className='underline decoration-wavy decoration-slate-700 hover:decoration-purple-400	'>Headless Hashnode</a></p>

            </footer>

			</div>

	);
};
