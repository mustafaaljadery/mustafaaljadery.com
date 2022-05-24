import { EssayType } from './essay';

export interface MetaProps
  extends Pick<EssayType, 'date' | 'abstract' | 'image' | 'keywords' | 'length' | 'title'> {
  /**
   * For the meta tag `og:type`
   */
  type?: string;
}