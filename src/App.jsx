/* import Search from './components/Search' */
import { GlobalContextProvider } from './context/GlobalContext'
import { AppHeader } from './components/Appheader/AppHeader'
import { MovieList } from './components/MovieList/MovieList'

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
