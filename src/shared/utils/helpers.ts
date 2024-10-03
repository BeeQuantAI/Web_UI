export const emailPatter =
  /^[\w-]+(\.[\w-]+)*@([a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*?\.[a-zA-Z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/;
export const urlPattern =
  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_.~#?&//=]*)/;

  const ligthTheme = {
    backgroundColor: 'white',
    color: '#646777',
  };
  
  const darkTheme = {
    backgroundColor: '#2e2c34',
    color: '#dddddd',
  };
  
  export const themes = {
    ligthTheme,
    darkTheme,
  };

export const getTooltipStyles = (themeName, type) => {
    switch (themeName) {
      case 'dark': {
        const { backgroundColor, color } = darkTheme;
        return {
          contentStyle: { backgroundColor },
          itemStyle: type === 'defaultItems' ? null : { color },
        };
      }
      case 'light': {
        return ligthTheme;
      }
      default: return ligthTheme;
    }
  };