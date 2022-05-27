import { format, parseISO } from 'date-fns';
import fs from 'fs';
import matter from 'gray-matter';
import { GetStaticPaths, GetStaticProps } from 'next';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import path from 'path';
import React from 'react';
import EssayLayout, {
  WEBSITE_HOST_URL,
} from '../../components/Essays/EssayLayout';
import { MetaProps } from '../../types/layout';
import { EssayType } from '../../types/essay';
import { postFilePaths, POSTS_PATH } from '../../utils/mdxUtils';
import style from '../../styles/essay.module.css';
import { getAllPosts } from '../../lib/api';

const components = {
  Head,
  Image,
  Link,
};

type EssayPageProps = {
  source: MDXRemoteSerializeResult;
  frontMatter: EssayType;
  essays: EssayType[];
};

const EssayPage = ({
  source,
  frontMatter,
  essays,
}: EssayPageProps): JSX.Element => {
  const customMeta: MetaProps = {
    title: `${frontMatter.title}`,
    keywords: frontMatter.keywords,
    abstract: frontMatter.abstract,
    image: `${frontMatter.image}`,
    date: frontMatter.date,
    length: frontMatter.length,
    type: 'article',
  };
  return (
    <EssayLayout customMeta={customMeta} moreEssays={essays}>
      <article className={style.essay}>
        <div className="w-3/4">
          <MDXRemote {...source} components={components} />
        </div>
      </article>
    </EssayLayout>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params?.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);
  const essays = getAllPosts(['title', 'slug']);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
      essays,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export default EssayPage;
