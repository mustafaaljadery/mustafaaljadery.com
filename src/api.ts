import fs from "fs"; 
import { join } from "path"; 
import matter from "gray-matter"

const postsDirectory = join(process.cwd(), "src/mdx/posts");

export function getPostSlugs(){
  return fs.readdirSync(postsDirectory);
}
