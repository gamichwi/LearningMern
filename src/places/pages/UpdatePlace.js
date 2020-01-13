import React from "react";
import { useParams } from "react-router-dom";

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH
} from "../../shared/util/validators";

import "./PlaceForm.css";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Scary Castle",
    description: "Check out this scary-ass castle!",
    imageUrl:
      "http://i2.cdn.turner.com/cnnnext/dam/assets/160617122741-castle-frankenstein-darmstadt-1-super-169.jpg",
    address: "Burg Frankenstein, 64367 Mühltal, Germany",
    location: {
      lat: 49.793716,
      lng: 8.6658966
    },
    creator: "u1"
  },
  {
    id: "p2",
    title: "Scary Castle",
    description: "Check out this scary-ass castle!",
    imageUrl:
      "http://i2.cdn.turner.com/cnnnext/dam/assets/160617122741-castle-frankenstein-darmstadt-1-super-169.jpg",
    address: "Burg Frankenstein, 64367 Mühltal, Germany",
    location: {
      lat: 49.793716,
      lng: 8.6658966
    },
    creator: "u2"
  }
];

const UpdatePlace = () => {
  const placeId = useParams().placeId;

  const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeId);
  if (!identifiedPlace) {
    return (
      <div className="center">
        <h2>Could not find place!</h2>
      </div>
    );
  }
  return (
    <form className="place-form">
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={() => {}}
        value={identifiedPlace.title}
        valid={true}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (min. 5 characters)."
        onInput={() => {}}
        value={identifiedPlace.description}
        valid={true}
      />
      <Button type="submit" disabled={true}>UPDATE PLACE</Button>
    </form>
  );
};

export default UpdatePlace;
