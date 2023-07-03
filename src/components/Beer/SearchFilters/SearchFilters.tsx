import {
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Switch,
} from '@mui/material'

interface Props {
  name: string
  type: string
  perPage: string
  breweryTypes: string[]
  perPageOptions: string[]
  sortAsc: boolean
  setSortAsc: (sortAsc: boolean) => void
  setName: (name: string) => void
  setType: (type: string) => void
  setPerPage: React.Dispatch<React.SetStateAction<string>>
}

export const SearchFilters = ({
  breweryTypes,
  name,
  perPage,
  perPageOptions,
  setName,
  setPerPage,
  setType,
  type,
  sortAsc,
  setSortAsc,
}: Props) => {
  return (
    <>
      <Grid item xs={4}>
        <TextField
          label="Search by name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
        />
      </Grid>
      <Grid item xs={4}>
        <FormControl variant="outlined" fullWidth>
          <InputLabel>Type</InputLabel>
          <Select
            value={type}
            onChange={(e) => setType(e.target.value)}
            label="Type"
          >
            {breweryTypes.map((type) => (
              <MenuItem key={type} value={type}>
                {type}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={2}>
        <FormControl variant="outlined" fullWidth>
          <InputLabel>Per Page</InputLabel>
          <Select
            value={perPage}
            onChange={(e) => setPerPage(e.target.value)}
            label="Per Page"
          >
            {perPageOptions.map((perPage) => (
              <MenuItem key={perPage} value={perPage}>
                {perPage}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={2}>
        <FormControlLabel
          control={
            <Switch
              checked={sortAsc}
              onChange={(e) => setSortAsc(e.target.checked)}
              name="sort"
              color="primary"
            />
          }
          label="Sort Ascending"
        />
      </Grid>
    </>
  )
}
