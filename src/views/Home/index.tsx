import { useEffect, useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Button, Checkbox, Paper, TextField, Link } from '@mui/material'
import { useBeerList } from '../../hooks'
import styles from './Home.module.css'
import { fetchData, searchBreweries } from './utils'

const Home = () => {
  const [search, setSearch] = useState('')
  const {
    beerList,
    refreshList,
    savedList,
    handleToggleFavorite,
    setBeerList,
    handleClearFavorites,
  } = useBeerList()

  const handleSearchBreweries = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    event.stopPropagation()
    setSearch(event.target.value)
    searchBreweries(setBeerList, search)
  }
  useEffect(fetchData.bind(this, setBeerList), [])

  return (
    <article>
      <section>
        <main>
          <Paper>
            <div className={styles.listContainer}>
              <div className={styles.listHeader}>
                <TextField
                  onChange={handleSearchBreweries}
                  label="Filter..."
                  variant="outlined"
                />
                <Button onClick={refreshList} variant="contained">
                  Reload list
                </Button>
              </div>
              <ul className={styles.list}>
                {beerList.map((beer, index) => (
                  <li key={beer.id}>
                    <Checkbox
                      checked={savedList.some((fav) => fav.id === beer.id)}
                      onChange={() => handleToggleFavorite(beer.id)}
                    />
                    <Link component={RouterLink} to={`/beer/${beer.id}`}>
                      {beer.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Paper>

          <Paper>
            <div className={styles.listContainer}>
              <div className={styles.listHeader}>
                <h3>Saved items</h3>
                <Button
                  onClick={handleClearFavorites}
                  variant="contained"
                  size="small"
                >
                  Remove all items
                </Button>
              </div>
              <ul className={styles.list}>
                {savedList.map((beer, index) => (
                  <li key={beer.id}>
                    <Checkbox
                      checked={true}
                      onChange={() => handleToggleFavorite(beer.id)}
                    />
                    <Link component={RouterLink} to={`/beer/${beer.id}`}>
                      {beer.name}
                    </Link>
                  </li>
                ))}
                {!savedList.length && <p>No saved items</p>}
              </ul>
            </div>
          </Paper>
        </main>
      </section>
    </article>
  )
}

export default Home
