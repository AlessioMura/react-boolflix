import { useGlobalContext } from '../context/GlobalContext'


function AppHeader() {
    const { search, setSearch, handleSearchSubmit } = useGlobalContext()

    return (
        <header>
            <div>logo</div>
            <form onSubmit={handleSearchSubmit}>
                <input type="text" onChange={(e) => setSearch(e.target.value)} value={search} />
            </form>
        </header>
    )
}

export { AppHeader }