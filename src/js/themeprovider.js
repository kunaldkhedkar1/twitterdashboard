import React from 'react';
import { connect } from 'react-redux'
import {  createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
const darkTheme = createMuiTheme({
    palette: {
      type: 'dark',
    },
  });
  
  const lightTheme = createMuiTheme({
    palette: {
      type: 'light',
    },
  });
  function mapStateToProps(state){
      return {theme : state.layout.theme}
  }
 function ThemeProvider(props){
     let {theme , children} = props;
     let uiTheme = theme === 'dark' ? darkTheme :lightTheme
     return (
        <MuiThemeProvider theme={uiTheme}>
            {children}
        </MuiThemeProvider>

     )
}
export default connect(mapStateToProps)(ThemeProvider)