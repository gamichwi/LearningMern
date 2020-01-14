import React from 'react';
import { useParams } from 'react-router-dom';

import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Scary Castle',
        description: 'Check out this scary-ass castle!',
        imageUrl: 'http://i2.cdn.turner.com/cnnnext/dam/assets/160617122741-castle-frankenstein-darmstadt-1-super-169.jpg',
        address: 'Burg Frankenstein, 64367 Mühltal, Germany',
        location: {
            lat: 49.793716,
            lng: 8.6658966
        },
        creator: 'u1'
    },
    {
        id: 'p2',
        title: 'Scary Castle',
        description: 'Check out this scary-ass castle!',
        imageUrl: 'http://i2.cdn.turner.com/cnnnext/dam/assets/160617122741-castle-frankenstein-darmstadt-1-super-169.jpg',
        address: 'Burg Frankenstein, 64367 Mühltal, Germany',
        location: {
            lat: 49.793716,
            lng: 8.6658966
        },
        creator: 'u2'
    }
  ];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
