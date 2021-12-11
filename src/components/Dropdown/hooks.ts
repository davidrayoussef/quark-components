import React from 'react';

import { AnyFunction, CustomHookReturnType } from '@/shared';

export function useDropdown(
  onMenuItemClick: AnyFunction
): CustomHookReturnType {
  const dropdownElement: React.RefObject<HTMLDivElement> = React.useRef();
  const [open, setOpen] = React.useState<boolean>(false);
  const [selectedItem, setSelectedItem] = React.useState<
    { label: string; value: string } | undefined
  >(undefined);

  React.useEffect(() => {
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [open]);

  function toggleMenu(): void {
    setOpen(prevState => !prevState);
  }

  function handleClickOutside(event: MouseEvent): void {
    if (open && !dropdownElement.current.contains(event.target as Node)) {
      toggleMenu();
    }
  }

  function handleMenuItemClick({
    label,
    value
  }: {
    label: string;
    value: string;
  }): void {
    setSelectedItem({ label, value });
    setOpen(false);
    onMenuItemClick?.({ label, value });
  }

  return {
    dropdownElement,
    open,
    selectedItem,
    handleMenuItemClick,
    toggleMenu
  };
}
