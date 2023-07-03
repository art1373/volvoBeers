import { Grid } from '@mui/material'
import { Pagination, SearchFilters, BeerList } from '../../components/Beer'
import { useBeerList } from '../../hooks'

const BeerListPage = () => {
  const {
    beerList,
    savedList,
    handleToggleFavorite,
    onBeerClick,
    savedOnly,
    handleChangePage,
    totalPages,
    page,
    sortAsc,
    setSortAsc,
    name,
    setName,
    setPerPage,
    perPage,
    setType,
    type,
    breweryTypes,
    perPageOptions,
  } = useBeerList()

  return (
    <article>
      <section>
        <header>
          <h1>BeerList page</h1>
        </header>
        <main>
          <Grid
            container
            spacing={3}
            alignItems="center"
            justifyContent="space-around"
          >
            {!savedOnly && (
              <>
                <SearchFilters
                  name={name}
                  type={type}
                  perPage={perPage}
                  breweryTypes={breweryTypes}
                  perPageOptions={perPageOptions}
                  setName={setName}
                  setType={setType}
                  setPerPage={setPerPage}
                  setSortAsc={setSortAsc}
                  sortAsc={sortAsc}
                />
                <Pagination
                  page={page}
                  handleChangePage={handleChangePage}
                  totalPages={totalPages}
                />
              </>
            )}
            <BeerList
              beerList={beerList}
              handleToggleFavorite={handleToggleFavorite}
              onBeerClick={onBeerClick}
              savedList={savedList}
            />
            {!savedOnly && (
              <Pagination
                page={page}
                handleChangePage={handleChangePage}
                totalPages={totalPages}
              />
            )}
          </Grid>
        </main>
      </section>
    </article>
  )
}

export default BeerListPage
