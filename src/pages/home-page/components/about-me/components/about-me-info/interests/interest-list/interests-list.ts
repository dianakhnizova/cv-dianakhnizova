import type { Interest } from '@/sources/types';
import Camera from '@/assets/camera-dark.svg';
import Knit from '@/assets/knit-dark.svg';
import Travel from '@/assets/travel-dark.svg';
import Bake from '@/assets/bake-dark.svg';
import Music from '@/assets/music-dark.svg';
import Code from '@/assets/code-dark.svg';
import { messages } from './messages';

export const interestList: Interest[] = [
  { image: Code, title: messages.code },
  { image: Camera, title: messages.photos },
  { image: Knit, title: messages.knitting },
  { image: Travel, title: messages.travelling },
  { image: Bake, title: messages.baking },
  { image: Music, title: messages.music },
];
