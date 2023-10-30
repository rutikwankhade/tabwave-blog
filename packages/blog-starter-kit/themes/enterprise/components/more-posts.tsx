import { PostFragment } from '../generated/graphql';
import { PostPreview } from './post-preview';
import { NoteCard } from './note-card';

type Props = {
	posts: PostFragment[];
	context: 'home' | 'series' | 'tag';
};

export const MorePosts = ({ posts, context }: Props) => {
	return (
		<section className="mb-10 flex flex-col items-start gap-10">
			{context === 'home' && (
				<h2 className="text-xl font-bold leading-tight tracking-tight text-slate-900 dark:text-neutral-50 lg:text-3xl">
					More Posts
				</h2>
			)}
			<div className="grid items-start gap-5 md:grid-cols-2 xl:grid-cols-3">
				{posts.map((post) => (
					<NoteCard
						key={post.slug}
						title={post.title}
						date={post.publishedAt}

						slug={post.slug}
						excerpt={post.brief} coverImage={''}					/>
				))}
			</div>
		</section>
	);
};
