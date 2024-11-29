/* import Search from './components/Search' */
import { GlobalContextProvider } from './context/GlobalContext'
import { AppHeader } from './components/AppHeader'
import { MovieList } from './components/MovieList'

function App() {


  return (
    <>

      <GlobalContextProvider>

        <AppHeader />

        <main>
          <MovieList />
        </main>



      </GlobalContextProvider>


    </>
  )
}

export default App
