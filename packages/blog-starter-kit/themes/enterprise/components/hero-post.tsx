import { resizeImage } from '@starter-kit/utils/image';
import Link from 'next/link';
import { CoverImage } from './cover-image';
import { DateFormatter } from './date-formatter';

type Props = {
	title: string;
	coverImage: string;
	date: string;
	excerpt: string;
	slug: string;
};

const DEFAULT_COVER =
	'https://cdn.hashnode.com/res/hashnode/image/upload/v1683525272978/MB5H_kgOC.png?auto=format';

export const HeroPost = ({ title, coverImage, date, excerpt, slug }: Props) => {
	const postURL = `/${slug}`;

	return (
		<section className="border rounded-3xl grid grid-cols-1 gap-5">
			<div className="col-span-1 h-full relative">
				<CoverImage
					title={title}
					src={resizeImage(coverImage, { w: 1400, h: 840, c: 'thumb' }) || DEFAULT_COVER}
					slug={slug}
					priority={true}
					className='w-full h-96'
				/>
				<h1 className=" absolute top-0 text-xl font-bold leading-snug text-white p-10 lg:text-5xl">
					<Link
						href={postURL}
						className="hover:text-primary-600  leading-tight tracking-tight hover:underline"
					>
						{title}
					</Link>
				</h1>
			</div>
			{/* <div className="col-span-1 flex flex-col gap-2">
				<h1 className="text-xl font-bold leading-snug text-slate-800  lg:text-3xl">
					<Link
						href={postURL}
						className="hover:text-primary-600  leading-tight tracking-tight hover:underline"
					>
						{title}
					</Link>
				</h1>
				<Link href={postURL}>
					<p className="text-md leading-snug text-slate-500 ">{excerpt}</p>
				</Link>
				<div className="text-sm font-semibold text-slate-500 ">
					<Link href={postURL}>
						<DateFormatter dateString={date} />
					</Link>
				</div>
			</div> */}
		</section>
	);
};
