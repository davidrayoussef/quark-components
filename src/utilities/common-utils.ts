import { ButtonSize, ButtonType } from '../shared';

export function computeHoverColor(color: string): string | undefined {
  if (!color || !color.startsWith('rgb')) return undefined;
  const rgb = color.match(/\d+/g).slice(0, 3);
  return `
    nav > a:hover {
      background: rgba(${rgb.join(', ') + ', .1'});
    }
  `;
}

export function computeActiveColor(color: string): string | undefined {
  if (!color || !color.startsWith('rgb')) return undefined;
  const rgb = color.match(/\d+/g).slice(0, 3);
  return `rgba(${rgb.join(', ')}, .1)`;
}

export const getTypeStyle = (
  type: ButtonType,
  style: { [key: string]: string }
): string => `
  ${
    type === 'secondary'
      ? style.secondary
      : type === 'reverse'
      ? style.reverse
      : type === 'danger'
      ? style.danger
      : style.primary
  }
`;

export const getSizeStyle = (
  size: ButtonSize,
  style: { [key: string]: string }
): string => `
  ${
    size === 'small'
      ? style.small
      : size === 'large'
      ? style.large
      : style.normal
  }
`;

export function isMobile(): boolean {
  return window.matchMedia('(max-width: 800px)').matches;
}

export function validateUsername(str: string): boolean {
  return /^[a-z0-9]{3,30}$/i.test(str);
}

export function validatePassword(str: string): boolean {
  return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(str);
}

export function validateEmail(str: string): boolean {
  return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,24})+$/.test(str);
}
