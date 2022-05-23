import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { POSTS_PATH } from '../utils/mdxUtils';

type PostItems = {
  [key:string]:string;
}

export function getPostSlugs():string[] {
  return fs.readdirSync(POSTS_PATH);
}

export function getPostBySlug(slug:string, fields:string[] = []): PostItems{
    const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = join(POSTS_PATH, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const items: PostItems = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }
    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}


export function getAllPosts(fields:string[] = []): PostItems[] {
  const slugs = getPostSlugs();
  return slugs.map((slug) => getPostBySlug(slug,fields)).sort((post1,post2) => (post1.date > post2.data ? -1: 1));
}