import { SportsBar } from '@mui/icons-material'
import {
  Grid,
  List,
  ListItemButton,
  Checkbox,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from '@mui/material'
import { Beer } from '../../../types'

interface Props {
  beerList: Beer[]
  handleToggleFavorite: (id: string) => void
  onBeerClick: (id: string) => void
  savedList: Beer[]
}

export const BeerList = ({
  beerList,
  handleToggleFavorite,
  onBeerClick,
  savedList,
}: Props) => {
  return (
    <Grid item xs={12}>
      <List>
        {beerList.map((beer) => (
          <ListItemButton key={beer.id}>
            <Checkbox
              checked={savedList.some((fav) => fav.id === beer.id)}
              onChange={() => handleToggleFavorite(beer.id)}
            />
            <ListItemAvatar>
              <Avatar>
                <SportsBar />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={beer.name}
              secondary={beer.brewery_type}
              onClick={onBeerClick.bind(this, beer.id)}
            />
          </ListItemButton>
        ))}
      </List>
    </Grid>
  )
}
