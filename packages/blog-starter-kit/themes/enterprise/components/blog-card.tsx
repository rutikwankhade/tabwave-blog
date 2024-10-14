import { resizeImage } from '@starter-kit/utils/image';
import Link from 'next/link';
import { CoverImage } from './cover-image';
import { DateFormatter } from './date-formatter';
import Image from 'next/image';

type Props = {
    title: string;
    coverImage: string;
    date: string;
    excerpt: string;
    slug: string;
};

const DEFAULT_COVER =
    'https://cdn.hashnode.com/res/hashnode/image/upload/v1683525272978/MB5H_kgOC.png?auto=format';

export const BlogCard = ({ title, coverImage, date, excerpt, slug }: Props) => {
    const postURL = `/${slug}`;

    return (
        <section className=" hover:scale-105 duration-300   rounded-xl p-2  md:w-4/12 bg-white  ">

            <Link href={postURL}>

                <div className="flex flex-col gap-2">
                    <img src={coverImage} alt="cover" className="rounded-xl" />
                    <h1 className=" text-xl md:text-2xl pb-4  text-slate-800 font-semibold font-inter tracking-tighter	 ">
                        {title}
                    </h1>
                    {/* <div className="text-lg mt-2 font-medium text-slate-850 ">
						<DateFormatter dateString={date} />
				</div> */}
                </div>

            </Link>

        </section>
    );
};