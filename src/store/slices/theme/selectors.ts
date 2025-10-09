import type { TypeRootState } from '@/store/store';

export const selectTheme = (state: TypeRootState) => state.theme.theme;
