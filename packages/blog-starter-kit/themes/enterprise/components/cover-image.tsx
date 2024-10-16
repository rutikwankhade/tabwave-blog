import Image from 'next/image';
import Link from 'next/link';

type Props = {
	title: string;
	src: string;
	slug?: string;
	priority?: boolean;
	className?:string;
};

export const CoverImage = ({ title, src, slug, priority = false, className }: Props) => {
	const postURL = `/${slug}`;

	const image = (
		<div className={`relative pt-[52.5%] ${className}`}>
			<Image
				src={src}
				alt={`Cover Image for ${title}`}
				className="w-full md:rounded-3xl rounded-xl object-cover hover:opacity-90 dark:border-neutral-800"
				fill
				unoptimized
				priority={priority}
			/>
		</div>
	);
	return (
		<div className="sm:mx-0">
			{slug ? (
				<Link href={postURL} aria-label={title}>
					{image}
				</Link>
			) : (
				image
			)}
		</div>
	);
};
