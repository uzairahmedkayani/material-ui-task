import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#4caf50' },
    secondary: { main: '#f44336' },
  },
  typography: {
    fontFamily: 'Arial',
    h4: { fontWeight: 700 },
  },
});

export default theme;
