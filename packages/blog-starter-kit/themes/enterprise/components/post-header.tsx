import { resizeImage } from '@starter-kit/utils/image';
import { User } from '../generated/graphql';
import { Avatar } from './avatar';
import { CoverImage } from './cover-image';
import { DateFormatter } from './date-formatter';
import { PostTitle } from './post-title';

type Author = Pick<User, 'username' | 'name' | 'profilePicture'>;

type Props = {
	title: string;
	coverImage: string | null | undefined;
	date: string;
	author: Author;
};

export const PostHeader = ({ title, coverImage, date, author }: Props) => {
	return (
		<>
			<PostTitle>{title}</PostTitle>
		
			{coverImage && (
				<div className="md:w-10/12 mx-auto md:px-5 px-3 w-full ">
					<CoverImage
						title={title}
						src={resizeImage(coverImage, { w: 1600, h: 840, c: 'thumb' })}
						priority={true}
					/>
				</div>
			)}
		</>
	);
};
