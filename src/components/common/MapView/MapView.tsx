import { GoogleMap, MarkerF, useLoadScript } from '@react-google-maps/api'
import { Beer } from '../../../types'

interface Props {
  beer: Beer
}

export const MapView = ({ beer }: Props) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY || '',
  })

  return (
    <>
      {isLoaded && beer?.latitude && beer?.longitude && (
        <div>
          <GoogleMap
            mapContainerClassName="map-container"
            center={{
              lat: Number(beer?.latitude),
              lng: Number(beer?.longitude),
            }}
            zoom={16}
          >
            <MarkerF
              position={{
                lat: Number(beer?.latitude),
                lng: Number(beer?.longitude),
              }}
            />
          </GoogleMap>
        </div>
      )}
    </>
  )
}
