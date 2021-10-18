import './App.css';
import Banner from './Components/Banner';
import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';




function App() {
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
      <div id={'pieDePagina'}>

      <Footer pieDePagina={<p>Copyright &copy; Todos los derechos reservados </p>}/>
      </div>

    </div>
  );
}


export default App;
