import { useMuiStyles } from './utils'
import { useParams } from 'react-router-dom'
import Paper from '@mui/material/Paper'
import { CircularProgress } from '@mui/material'
import { useBeer } from '../../hooks'
import { BeerInfo } from '../../components/Beer'
import { MapView } from '../../components/common'
import './Beer.css'

const Beer = () => {
  const { id } = useParams() as { id: string }
  const { beer, handleToggleFavorite, savedList } = useBeer(id)
  const { classes } = useMuiStyles()

  return (
    <Paper className={classes.root}>
      {!beer && <CircularProgress />}
      {beer && (
        <div className={classes.cardContent}>
          <div>
            <BeerInfo
              beer={beer}
              handleToggleFavorite={handleToggleFavorite}
              savedBeerList={savedList}
            />

            <MapView beer={beer} />
          </div>
        </div>
      )}
    </Paper>
  )
}

export default Beer
