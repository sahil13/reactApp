import _ from "lodash";

export function paginate(allMovies, pageNumber, pageSize) {
  
  const startIndex = (pageNumber - 1) * pageSize;

  return _(allMovies).slice(startIndex).take(4).value();
}
