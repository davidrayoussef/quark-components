function computeHoverColor(color) {
  if ( !color.startsWith('rgb') ) return null;
  const rgb = color.match(/\d+/g).slice(0,3);
  return `
    a:hover {
      background: rgba(${rgb.join(', ') + ', .1'});
    }
  `;
}

export { computeHoverColor };
