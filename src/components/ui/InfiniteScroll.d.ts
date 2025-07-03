import { FC, ReactNode } from 'react';

type InfiniteScrollProps = {
  items: { content: ReactNode }[];
  isTilted?: boolean;
  tiltDirection?: 'left' | 'right';
  autoplay?: boolean;
  autoplaySpeed?: number;
  autoplayDirection?: 'up' | 'down';
  pauseOnHover?: boolean;
};

const InfiniteScroll: FC<InfiniteScrollProps>;
export default InfiniteScroll; 