import React, { SVGProps } from 'react';

import {
  ButtonSize,
  ButtonType,
  TooltipPosition,
  TooltipTrigger
} from '../constants';

export interface AutoCompleteProps {
  suggestions: string[];
  label?: string;
  name?: string;
  placeholder?: string;
}

export interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  style?: React.CSSProperties;
  styleType?: ButtonType;
  type?: 'button' | 'submit' | 'reset';
  component?: typeof React.Component;
  onClick?: VoidFunction;
}

export interface LinkButtonProps extends ButtonProps {
  to: string;
}

export interface CardProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  title?: string;
}

export interface CarouselProps {
  children: JSX.Element[];
  style?: React.CSSProperties;
  showArrows?: boolean;
  showDots?: boolean;
  useSwiper?: boolean;
  delay?: number;
}

export interface DotsProps {
  activeIndex: number;
  childrenCount: number;
  handleNavClick: (index: number) => VoidFunction;
}

export interface CheckBoxProps {
  name: string;
  options: string[];
  checkedOptions?: string[];
  className?: string;
  label?: string;
  value?: string;
  onChange: VoidFunction;
}

export interface DocsProps {
  data: ComponentData[];
  headerTitle?: string;
  menuTitle: string;
  linkType: string;
}

export interface ComponentData {
  code: VoidFunction;
  component: React.ComponentType;
  description: string;
  name: string;
  propDetails: PropDetail[];
}

export interface DocsCodeBlockProps {
  children: React.ReactNode;
}

export interface DocsExampleBlockProps {
  name: string;
  description: string;
  propDetails: PropDetail[];
  children: React.ReactNode;
}

export interface PropDetail {
  propDescription: string;
  propName: string;
  propType: string;
  propDefault?: string;
}

export interface DropdownProps {
  data: DropdownItem[];
  defaultLabel?: string;
  width?: string;
  onMenuItemClick?: VoidFunction;
}

export interface DropdownItem {
  label: string;
  value: string;
}

export interface FetcherProps {
  children: (data: { [key: string]: any }) => React.ReactElement; // eslint-disable-line @typescript-eslint/no-explicit-any
  url: Request | string;
  options?: unknown;
  loader?: React.ComponentType;
}

export interface FormProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  onSubmit: VoidFunction;
}

export interface GridProps {
  children: React.ReactNode;
  cols?: number | string;
  rows?: number | string;
  fluid?: boolean;
  style?: React.CSSProperties;
}

export interface HeaderBarProps {
  children?: React.ReactNode;
  title?: string;
  navLinks?: React.ReactNode[];
}

export interface IconProps extends SVGProps<SVGSVGElement> {
  value: string;
}

export interface ImageProps {
  src: string;
  alt: string;
  onLoad?: VoidFunction;
  onError?: VoidFunction;
  defaultSrc?: string;
  style?: React.CSSProperties;
}

export interface ImageState {
  imgSrc: string;
}

export interface InputProps {
  value: string | number;
  errorMessage?: string;
  isValid?: boolean;
  label?: string;
  name?: string;
  placeholder?: string;
  type?: string;
  onChange?: VoidFunction;
  onBlur?: VoidFunction;
}

export interface InputTableProps {
  columnDefs: ColumnDef[];
  rowCount: number;
  title: string;
  onSubmit?: VoidFunction;
}

export interface ColumnDef {
  headerName: string;
  fieldName: string;
  validation?: Validation;
  type?: string;
}

export interface Validation {
  value: RegExp | ValidationPredicateFunction;
  message: string;
  required?: boolean;
}

export interface Row {
  [key: string]: string;
}

export interface RowToPost {
  [key: string]: string | number;
}

export interface Errors {
  [key: string]: string;
}

export interface LazyLoadProps {
  children: React.ReactNode;
}

export interface LazyLoadState {
  active: boolean;
}

export interface ListProps {
  data: string[];
  title?: string;
}

export interface MenuProps {
  children: JSX.Element | JSX.Element[];
  onMenuItemClick: VoidFunction;
}

export interface MenuState {
  expanded: string;
}

export interface MenuItemProps {
  children: React.ReactNode;
  menuItem: string;
}

export interface SubMenuProps {
  children: React.ReactNode;
  menuItem?: string;
}

export interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  title?: string;
  handleClose: VoidFunction;
}

export interface NavMenuProps {
  data: unknown[];
  linkColor?: string;
  linkType?: string;
  linkDisabled?: boolean;
  menuTitle?: string;
  isOpen?: boolean;
  mobileStyles?: React.CSSProperties;
  handleMobileLinkClick?: VoidFunction;
  path?: string;
}

export interface NavMenuState {
  expanded: string | undefined;
}

export interface NavMenuWithMobileProps extends NavMenuWithMobileState {
  handleMobileLinkClick?: VoidFunction;
}

export interface NavMenuWithMobileState {
  isOpen?: boolean;
  mobileStyles?: React.CSSProperties;
}

export interface SelectProps {
  name: string;
  options: string[];
  label?: string;
  value?: string;
  placeholder?: string;
  onChange?: VoidFunction;
}

export interface ShareProps {
  shares: string[];
  url: string;
  text: string;
  title?: string;
}

export interface SwiperProps {
  children: React.ReactNode;
  threshold?: number;
  onSwipeLeft?: VoidFunction;
  onSwipeRight?: VoidFunction;
}

export interface SwiperState {
  startX: number;
  distance: number;
  direction: 'left' | 'right' | undefined;
  touch: Touch;
  translate: number;
  imgWidth: number;
  activeIndex: number;
  shouldAnimate: boolean;
}

export interface TableProps {
  tableHeads?: string[];
  tableData: { [key: string]: any }[]; // eslint-disable-line @typescript-eslint/no-explicit-any
}

export interface TabsProps {
  children: React.ReactElement[];
}

export interface TabProps {
  children: string;
  disabled?: boolean;
  label: string;
}

export interface TooltipProps {
  children?: React.ReactNode;
  message: string;
  position?: TooltipPosition;
  trigger?: TooltipTrigger;
}

export interface CustomHookReturnType {
  [key: string]: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

export type VoidFunction = (arg?: unknown) => void;

export type AnyFunction = (arg?: unknown) => unknown;

export type WithMobileMenuHOC = <P extends NavMenuWithMobileProps>(
  Component: React.Component<NavMenuWithMobileProps>
) => React.ComponentClass<P, NavMenuWithMobileState>;

export type ValidationPredicateFunction = (value: string) => boolean;
