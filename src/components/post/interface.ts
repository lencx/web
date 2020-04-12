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

export type PostFields = {
  slug: string;
  directoryName: string;
  defaultLang: string;
  lang?: string;
};

export type PageContext = {
  slug?: string;
  previous?: any;
  next?: any;
  lang?: string;
  langName: string;
  otherLangs?: any;
  originURL?: string;
};

export interface PostOverviewData {
  id?: string;
  frontmatter: PostFrontmatter;
  fields: PostFields;
}

// blog index template
export interface BlogIndexTemplateProps {
  readonly data: AllPostQueryData;
  readonly pageContext: {
    langKey: string;
    langName: string;
    allLanguages: any;
  };
}

export interface AllPostQueryData {
  allMdx: {
    nodes: Array<PostOverviewData>;
  };
}

// post template
export interface PostTemplateProps {
  readonly data: PostQueryData;
  readonly pageContext: PageContext;
}

export interface PostQueryData {
  mdx: {
    id?: string;
    excerpt?: string;
    body: string;
    frontmatter: PostFrontmatter;
    fields: PostFields;
    headings?: {
      depth: number;
      value: string;
    };
  };
}
