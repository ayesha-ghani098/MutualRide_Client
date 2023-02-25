import React,{useEffect} from "react"
import usePlacesService from "react-google-autocomplete/lib/usePlacesAutocompleteService";

const AddressPicker = () => {
    const {
        placesService,
        placePredictions,
        getPlacePredictions,
        isPlacePredictionsLoading,
      } = usePlacesService({
        apiKey: "AIzaSyCt0we836OdQbFQolLK_aGPZHcnyr-IKp0",
      });

  useEffect(() => {
    // fetch place details for the first element in placePredictions array
    if (placePredictions.length)
      placesService?.getDetails(
        {
          placeId: placePredictions[0].place_id,
        },
        (placeDetails) => console.log(placeDetails)
      );
  }, [placePredictions]);

  return (
    <>
      <input
        placeholder="Debounce 500 ms"
        onChange={(evt) => {
          getPlacePredictions({ input: evt.target.value });
        }}
        loading={isPlacePredictionsLoading}
      />
      {placePredictions?.address_components?.map((item) => <li>{item.id}</li>)}
    </>
  );
};

export default AddressPicker;