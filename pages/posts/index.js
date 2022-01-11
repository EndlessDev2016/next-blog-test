import Head from 'next/head';
import { Fragment } from 'react';

// import classes from './post-item.module.css';

import AllPosts from '../../components/posts/all-posts';
import { getAllPosts } from '../../lib/posts-util';

export function getStaticProps() {
  const allPosts = getAllPosts();

  console.log('---', allPosts);

  return {
    props: {
      posts: allPosts,
    },
    // // もし内容が変わるのであれば、新たに生成 (re generate)
    // revalidate: 60 // 60 seconds
  };
}

function AllPostsPage(props) {
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta name="description" content="All Posts." />
      </Head>
      <AllPosts posts={props.posts} />
    </Fragment>
  );
}
export default AllPostsPage;
