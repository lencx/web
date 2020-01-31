/**
 * @author: lencx
 * @create_at: Jan 23, 2020
 */

export type PostFrontmatter = {
  title: string;
  date?: string;
  type?: string;
  category?: string;
  spoiler?: string;
  tags?: string[];
  readtime?: number;
};

export type PostFields = { slug: string; directoryName: string; lang?: string };

export interface PostOverviewData {
  id?: string;
  frontmatter: PostFrontmatter;
  fields: PostFields;
}

// blog index template
export interface BlogIndexTemplateProps {
  readonly data: AllPostQueryData;
}

export interface AllPostQueryData {
  allMdx: {
    nodes: Array<PostOverviewData>;
  };
}

// post template
export interface PostTemplateProps {
  readonly data: PostQueryData;
  readonly pageContext: {
    previous?: any;
    next?: any;
  };
}

export interface PostQueryData {
  mdx: {
    id?: string;
    excerpt?: string;
    body: string;
    frontmatter: PostFrontmatter;
    fields: PostFields;
  };
}
