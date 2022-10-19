import './App.css'
import Cards from '../component/Cards'

function App() {

  return (
    <div className="App">
      <h2 style={{textAlign:"center"}}>Cards PROPS</h2>
      <div className='cards'>
        <Cards title={"Sobre mí"} item={"Jhorman"} item1={"Resident Evil"} item2={"Linkin Park"} bg="red"/>
        <Cards title={"Mis hobbies"} item={"Escuchar musica"} item1={"Leer un poco algun libro"} item2={"Programar un poco"} bg="brown"/>
        <Cards title={"Tiempo libre"} item={"Compatir con mi familia"} item1={"Hacer actividades"} item2={"Programar un poco"} bg="olive"/>
        <Cards title={"Mi stack"} item={"HTML❤"} item1={"CSS😍"} item2={"JAVASCRIPT💕"} bg="maroon"/>
      </div>
    </div>
  )
}

export default App
