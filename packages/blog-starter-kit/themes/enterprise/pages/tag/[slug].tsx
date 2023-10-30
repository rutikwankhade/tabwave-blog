import request from 'graphql-request';
import Head from 'next/head';
import { Container } from '../../components/container';
import { AppProvider } from '../../components/contexts/appContext';
import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import { Layout } from '../../components/layout';
import { MorePosts } from '../../components/more-posts';
import Image from 'next/image';
import pushPin from '../../assets/pushpin.png'
import {
	Post,
	Publication,
	TagPostsByPublicationDocument,
	TagPostsByPublicationQuery,
	TagPostsByPublicationQueryVariables,
} from '../../generated/graphql';

type Props = {
	posts: Post[];
	publication: Publication;
	tag: string;
};

export default function Post({ publication, posts, tag }: Props) {
	const title = `#${tag} - ${publication.title}`;
	return (
		<AppProvider publication={publication}>
			<Layout>
				<Head>
					<title>{title}</title>
				</Head>
				<Header />
				<Container className="bg-pattern-square flex flex-col  justify-center items-center gap-10 px-5 pb-10">
					<div className="flex flex-row gap-2 pt-5">
						<Image src={pushPin} width={40} height={40} alt="tag" />
						<h1 className="text-3xl font-dmsans font-bold text-slate-900 ">{tag}</h1>
					</div>
					<MorePosts context="tag" posts={posts} />
				</Container>
				<Footer />
			</Layout>
		</AppProvider>
	);
}

type Params = {
	params: {
		slug: string;
	};
};

export async function getStaticProps({ params }: Params) {
	const data = await request<TagPostsByPublicationQuery, TagPostsByPublicationQueryVariables>(
		process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT,
		TagPostsByPublicationDocument,
		{
			host: process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST,
			first: 20,
			tagSlug: params.slug,
		},
	);

	const publication = data.publication;
	if (!publication) {
		return {
			notFound: true,
		};
	}
	const posts = publication.posts.edges.map((edge) => edge.node);

	return {
		props: {
			posts,
			publication,
			tag: params.slug,
		},
		revalidate: 1,
	};
}

export async function getStaticPaths() {
	return {
		paths: [],
		fallback: 'blocking',
	};
}
