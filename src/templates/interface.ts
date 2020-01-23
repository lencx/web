/**
 * @author: lencx
 * @create_at: Jan 23, 2020
 */

// blog index template
export interface BlogIndexTemplateProps {
  readonly data: AllPostQueryData;
}

export interface AllPostQueryData {
  allMarkdownRemark: {
    nodes: Array<{
      id?: string;
      frontmatter: {
        title: string;
        date?: string;
        category?: string;
        spoiler?: string;
        tags?: string[];
      };
      fields: { slug: string; directoryName: string; lang?: string };
    }>;
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
  markdownRemark: {
    id?: string;
    excerpt?: string;
    html: string;
    frontmatter: {
      title: string;
      date: string;
    };
  };
}
