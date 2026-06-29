import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';

export const cn = (...inputs: Array<unknown>) => {
  return twMerge(clsx(inputs));
};