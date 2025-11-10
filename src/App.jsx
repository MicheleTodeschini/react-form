import { useState } from 'react'
import './App.css'

function App() {

  const articoli = [
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

  const [articolo, setArticolo] = useState(articoli)
  const [nuovoArticolo, setNuovoArticolo] = useState('')

  function 

  return (
    <>
     <h1>I nostri titoli di giornale</h1>
     <form onSubmit={gestisciInvio}>
     <input type='text' placeholder='Aggiungi titolo' value={nuovoArticolo} onChange={(e) => setNuovoArticolo(e.target.value)} />
      <button className='btn btn-primary'>Aggiungi giornale</button>
     </form>
      <div className='container d-flex'>
       
     {
      articoli.map(articolo => (
         <div className='card'>
        <p>{articolo.titolo}</p>
        </div>
      ))
     }
     </div>
     
    </>
  )
}

export default App
