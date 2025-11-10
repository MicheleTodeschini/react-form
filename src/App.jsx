import { useState } from 'react'
import './App.css'

function App() {

  const lista = [
    {
      id: 1,
      titolo: 'Gestione dei rifiuti'
    },
    {
      id: 2,
      titolo: 'Best sagre 2025'
    },
    {
      id: 3,
      titolo: 'Nuovo disco signor Rezza Capa'
    },
    {
      id: 4,
      titolo: 'La Formica'
    }
  ]

  const [articoli, setArticolo] = useState(lista)
  const [titolo, setTitolo] = useState('')

  function gestisciInvio(e) {
    e.preventDefault()
    
    setArticolo((articoli) => [...articoli, {id: articoli.length + 1, titolo: titolo}])

    console.log(articoli);
    
    setTitolo('')

  }

  return (
    <>
     <h1>I nostri titoli di giornale</h1>
     <form onSubmit={gestisciInvio}>
     <input type='text' placeholder='Aggiungi titolo' value={titolo} onChange={(e) => setTitolo(e.target.value)} />
      <button className='btn btn-primary'>Aggiungi giornale</button>
     </form>
      <div className='container'>
       
     {
      articoli.map(articolo => (
         <div key={articolo.id} className='card'>
        <p>{articolo.titolo}</p> 
        <span>
        <button className='btn btn-danger'><i class="bi bi-trash" aria-hidden="true" ></i></button>
        <button className='btn btn-primary'><i class="bi bi-pen" aria-hidden="true" ></i></button>
        </span>
        </div>
      ))
     }
     </div>
     
    </>
  )
}

export default App
