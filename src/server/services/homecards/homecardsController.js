import madridMarkersProvider from './providers/madridMarkersProvider';
import homecardsByIdsProvider from './providers/homecardsByIdsProvider';

const homecardListController = {
  getHomecardList,
  processHomecardListIds,
  filterMarkersByMinimumPrice,
  sortMarkersByRelevance,
  getMarkersByLimit,
  buildHomecardListIdQueryString,
};

export default homecardListController;

async function getHomecardList (minimumPrice, limit) {
  const {data: markers} = await madridMarkersProvider ();
  const homecardsIds = processHomecardListIds (markers, minimumPrice, limit);
  const {data: homecards} = await homecardsByIdsProvider (homecardsIds);
  return homecards;
}

function processHomecardListIds (markers, minimumPrice, limit) {
  const filteredMarkersByMinimumPrice = filterMarkersByMinimumPrice (
    markers,
    minimumPrice
  );
  const sortedMarkersByRelevance = sortMarkersByRelevance (
    filteredMarkersByMinimumPrice
  );
  const markersByLimit = getMarkersByLimit (sortedMarkersByRelevance, limit);
  const homecardsQueryIds = buildHomecardListIdQueryString (markersByLimit);
  return homecardsQueryIds;
}

function filterMarkersByMinimumPrice (markers, minimumPrice) {
  return markers.filter (marker => marker.minimumPrice >= minimumPrice);
}

function sortMarkersByRelevance (markers) {
  return markers.sort ((a, b) => b.relevance - a.relevance);
}

function getMarkersByLimit (markers, limit) {
  return markers.slice (0, limit);
}

function buildHomecardListIdQueryString (markers) {
  return markers
    .reduce ((accumulator, marker) => `${accumulator}&ids[]=${marker.id}`, '')
    .slice (1);
}
