
export const sortedItemsSelector = (itemsPropName, itemsSortPropName) => {

    return state => {

      const items = state[itemsPropName];
      const { col: sortCol, dir: sortDir }= state[itemsSortPropName];

      return [ ...items ].sort((a,b) => {
        if (a[sortCol] === b[sortCol]) {
          return 0;
        } else {
          if (a[sortCol] < b[sortCol]) {
            return sortDir === 'asc' ? -1 : 1;
          } else {
            return sortDir === 'desc' ? -1 : 1;
          }
        }
      })
    }

  }
