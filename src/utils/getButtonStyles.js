const getTypeStyle = (type, style) => `
  ${
    type === 'secondary' ? style.secondary :
    type === 'reverse' ? style.reverse :
    type === 'danger' ? style.danger :
    style.primary
  }
`;

export { getTypeStyle };
