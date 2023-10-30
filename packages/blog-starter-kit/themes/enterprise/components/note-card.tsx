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

export const NoteCard = ({ title, coverImage, date, excerpt, slug }: Props) => {
	const postURL = `/${slug}`;

	return (
		<section className="relative  hover:scale-105 duration-300 hover:rotate-3 drop-shadow-lg hover:drop-shadow-xl  font-nanum shadow-slate-500  p-6 bg-pink-300 w-60 h-60  items-start  ">
			
            <Link href={postURL}>

			<div className="flex flex-col gap-2">
				<h1 className="text-3xl   text-slate-900 font-medium ">
						{title}
				</h1>
				<div className="text-lg mt-2 font-medium text-slate-850 ">
						<DateFormatter dateString={date} />
				</div>
			</div>

            </Link> 

		</section>
	);
};