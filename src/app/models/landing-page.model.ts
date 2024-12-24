import {Post} from './post.model';

export enum LinkEnum {
  LINK = 'LINK',
  PRIMARY = 'PRIMARY',
  SECONDARY = 'SECONDARY'
}

export enum BlockType {
  'hero' = 'hero',
  'posts' = 'posts',
}

export interface Link {
  label: string;
  href: string;
  isExternalLink: boolean;
  type: LinkEnum;
}

export interface HeroBlock {
  __component: 'blocks.hero-section'
  subHeading: string;
  heading: string;
  text: string;
  links: Link[];
  imageSrc: string;
}

export interface PostsBlock {
  __component: 'blocks.posts-section';
  subHeading: string;
  heading: string;
  text: string;
  posts: Post[];
}

export type Block = HeroBlock | PostsBlock;

export interface LandingPage {
  title: string;
  description: string;
  blocks: Block[];
}
