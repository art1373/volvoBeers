import { makeStyles } from 'tss-react/mui'

const useMuiStyles = makeStyles()({
  root: {
    margin: 'auto',
    padding: '20px',
  },
  title: {
    fontWeight: 'bold',
    fontSize: '3rem',
    marginTop: '10px',
  },
  subtitle: {
    fontSize: '2rem',
    marginBottom: '10px',
  },
  subheading: {
    fontSize: '1.75rem',
    marginTop: '20px',
  },
  cardContent: {
    display: 'flex',
  },
})

export { useMuiStyles }
