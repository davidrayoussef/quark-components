const getTypeStyle = (type, style) => `
  ${
    type === 'secondary' ? style.secondary :
    type === 'reverse' ? style.reverse :
    type === 'danger' ? style.danger :
    style.primary
  }
`;

const getSizeStyle = (size, style) => `
  ${
    size === 'small' ? style.small :
    size === 'large' ? style.large :
    style.normal
  }
`;

export { getTypeStyle, getSizeStyle };
