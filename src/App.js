import './App.css';
import React from "react";
import Banner from './Components/Banner';
import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import {Button,Snackbar} from '@material-ui/core';

function App() {

  const [open, setOpen] = React.useState(false);
  const handleToClose = (event, reason) => {
    if ("clickaway" == reason) return;
    setOpen(false);
  };
  
  const handleClickEvent = () => {
    setOpen(true);
  };

  const encabezado="Desarrollo de Aplicaciones para Dispositivos Móviles";
  var temas=[
    'Tipos de componentes',
    'Contenedores',
    'Usar más de un componente',
    'Funciones',
    'Props',
    'Prop-Types',
    'DefaultProps'    
  ];

  return (
    <div className="App">
      <Banner  encabezado={encabezado}/>

      <Header />

      <Banner />

      <Body temas={temas} practica={'Práctica 1 - Unidad 2'}/>
      <div id={"button"}>
      <Button variant="contained" id="button1" onClick={handleClickEvent}>
          Mostrar al Creador
      </Button>
      <Snackbar id="snackbar"
        anchorOrigin={{
          horizontal: "center",
          vertical: "bottom",
        }}
        open={open}
        autoHideDuration={3000}
        message="El creador es: Alejandro Rios Muñoz"
        onClose={handleToClose}
        action={
          <React.Fragment>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleToClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />

      </div>
      <div id={'pieDePagina'}>
      <Footer pieDePagina={<p>Copyright &copy; Todos los derechos reservados </p>}/>
      </div>
      

    </div>
  );
}

export default App;
