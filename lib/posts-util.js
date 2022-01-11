import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getPostsFiles() {
  return fs.readdirSync(postsDirectory);
}

// function getPostData(fileName) {
//   const filePath = path.join(postsDirectory, fileName);
//   const fileContent = fs.readFileSync(filePath, 'utf-8');
//   const { data, content } = matter(fileContent);

//   const postSlug = fileName.replace(/\.md$/, ''); // removes the file extension

//   const postData = {
//     slug: postSlug,
//     ...data,
//     content,
//   };

//   return postData;
// }

// 動的POST対応
export function getPostData(postIdentifier) {
  const postSlug = postIdentifier.replace(/\.md$/, ''); // removes the file extension
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
}

export function getAllPosts() {
  const postFiles = getPostsFiles();

  // for (const postFile of postFiles) {
  //   const postData = getPostData(postFile);
  // }
  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });

  const soredPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );

  return soredPosts;
}

export function getFeaturedPosts() {
  debugger;
  const allPosts = getAllPosts();
  const featuredPosts = allPosts.filter((post) => post.isFeatured);
  return featuredPosts;
}
