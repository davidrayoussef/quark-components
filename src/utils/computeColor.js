export function computeHoverColor(color) {
  if ( !color || !color.startsWith('rgb') ) return null;
  const rgb = color.match(/\d+/g).slice(0,3);
  return `
    nav > a:hover {
      background: rgba(${rgb.join(', ') + ', .1'});
    }
  `;
}

export function computeActiveColor(color) {
  if ( !color || !color.startsWith('rgb') ) return null;
  const rgb = color.match(/\d+/g).slice(0,3);
  return `rgba(${rgb.join(', ') + ', .1'})`;
}