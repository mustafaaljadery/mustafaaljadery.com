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

const components = {
  Head,
  Image,
  Link,
};

type EssayPageProps = {
  source: MDXRemoteSerializeResult;
  frontMatter: EssayType;
};

const EssayPage = ({
  source,
  frontMatter,
}: EssayPageProps): JSX.Element => {
  const customMeta: MetaProps = {
    title: `${frontMatter.title} - Mustafa Aljadery`,
    keywords: frontMatter.keywords,
    abstract: frontMatter.abstract,
    image: `${WEBSITE_HOST_URL}${frontMatter.image}`,
    date: frontMatter.date,
    length: frontMatter.length,
    type: 'article',
  };
  return (
    <EssayLayout customMeta={customMeta}>
      <article>
        <h1 className="mb-3 text-gray-900 dark:text-white">
          {frontMatter.title}
        </h1>
        <div className="prose dark:prose-dark">
          <MDXRemote {...source} components={components} />
        </div>
      </article>
    </EssayLayout>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params?.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
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
