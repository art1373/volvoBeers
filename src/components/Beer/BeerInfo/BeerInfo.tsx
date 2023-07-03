import { Typography, Checkbox } from '@mui/material'
import { Beer } from '../../../types'
import { useMuiStyles } from '../../../views/Beer/utils'

interface Props {
  beer: Beer
  savedBeerList: Beer[]
  handleToggleFavorite: (id: string) => void
}

export const BeerInfo = ({
  handleToggleFavorite,
  savedBeerList,
  beer,
}: Props) => {
  const { classes } = useMuiStyles()

  return (
    <div>
      <Typography variant="subtitle2" component="span">
        <Checkbox
          checked={savedBeerList.some((fav) => fav.id === beer.id)}
          onChange={() => handleToggleFavorite(beer.id)}
        />
        Set as favorite
      </Typography>
      <Typography variant="h1" component="h1" className={classes.title}>
        {beer?.name}
      </Typography>
      <Typography variant="h2" component="h2" className={classes.subtitle}>
        Type: {beer?.brewery_type}
      </Typography>
      <Typography className={classes.subheading}>Website:</Typography>
      <Typography variant="body2" component="p">
        {beer?.website_url ? (
          <a href={beer?.website_url} target="_blank" rel="noreferrer">
            {beer?.website_url}
          </a>
        ) : (
          'No website available'
        )}
      </Typography>
      <Typography className={classes.subheading}>Phone:</Typography>
      <Typography variant="body2" component="p">
        {beer?.phone ? (
          <a href="tel:{beer?.phone}">{beer?.phone}</a>
        ) : (
          'No phone available'
        )}
      </Typography>
      <Typography variant="h3" component="h3" className={classes.subheading}>
        Location:
      </Typography>
      <Typography variant="body2" component="p">
        {beer?.street}, {beer?.postal_code}
        <br />
        {beer?.city}, {beer?.state}
        <br />
        {beer?.country}
      </Typography>
    </div>
  )
}
