
export const toggleSortButtonTextSelector = state => {
    if (state.colorsSort.col === 'id') {
      return "Sorted by Id";
    } else {
      if (state.colorsSort.dir === 'asc') {
        return "Sorted by Name A->Z";
      } else {
        return "Sorted by Name Z->A";
      }
    }
  };