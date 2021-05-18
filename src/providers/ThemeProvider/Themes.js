const defaultTheme = {
  padding: {
    small: '5px',
    regular: '10px',
    medium: '15px',
    large: '25px',
  },
  margin: {
    small: '5px;',
    medium: '10px',
    large: '20px;',
    larger: '30px',
  },
  maxContentWidth: '1200px',
  maxModalWidth: '400px',
  navBarHeight: '70px',
  media: {
    mobile: '600px',
  },
  font: {
    family: 'Ubuntu, Tahoma, Helvetica, Arial, Roboto, sans-serif',
    small: '14px',
    regular: '16px',
    large: '18px',
    larger: '24px',
    jumbo: '34px',
  },
};

export const lightTheme = {
  ...defaultTheme,
  color: {
    text: '#363537',
    darkerText: '#030304',
    accentText: '#9398C4',
    faddedText: '#6272A4',
    background: '#ebebeb',
    backgroundOpaque: 'rgba(235, 235, 235, 0.4)',
    lightBackground: '#FFFFFF',
    externalButtonBackground: '#50FA7B',
    externalButtonAlternativeBackground: '#F1FA8C',
    externalButtonText: '#000000',
    dividerGradient:
      'linear-gradient( 90deg, rgba(33, 34, 44, 1) 0%, rgba(171, 171, 174, 1) 50%, rgba(33, 34, 44, 1) 100%)',
    yellow: '#FFFF80',
    green: '#50fa7b',
    red: '#FF5555',
  },
};

export const darkTheme = {
  ...defaultTheme,
  color: {
    text: '#F8F8F2',
    darkerText: '#ABABAE',
    accentText: '#9398C4',
    faddedText: '#6272A4',
    background: '#21222C',
    backgroundOpaque: 'rgba(33, 34, 44, 0.4)',
    lightBackground: '#3D3F52',
    externalButtonBackground: '#50fa7b',
    externalButtonAlternativeBackground: '#F1FA8C',
    externalButtonText: '#000000',
    dividerGradient:
      'linear-gradient( 90deg, rgba(33, 34, 44, 1) 0%, rgba(171, 171, 174, 1) 50%, rgba(33, 34, 44, 1) 100%)',
    divider: '#38394b',
    yellow: '#F1FA8C',
    green: '#50fa7b',
    red: '#FF5555',
  },
};
