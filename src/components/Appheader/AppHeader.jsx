import style from './AppHeader.module.css'
import { useGlobalContext } from '../../context/GlobalContext'


function AppHeader() {
    const { search, setSearch, handleSearchSubmit } = useGlobalContext()

    return (
        <header>
            <img src="./img/logo.png" alt="" />
            <form onSubmit={handleSearchSubmit}>
                <input type="text" placeholder='Search' onChange={(e) => setSearch(e.target.value)} value={search} />
            </form>
        </header>
    )
}

export { AppHeader }