import fs from "fs";
import path from "path";

// This is used to get the path of a specific file.
export const POSTS_PATH = path.join(process.cwd(), 'essays');

// This is a list of all of the mdx files in the path. 
export const postFilePaths = fs.readdirSync(POSTS_PATH).filter((path) => /\.mdx?$/.test(path));