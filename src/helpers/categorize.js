export const getDataByCategory = (categories, list, reverse = false) => {
  const filteredList = list.filter(x => {
    return x.category?.includes(categories[0])
  })
  return reverse ? filteredList.reverse() : filteredList
}

export const getPaperDataByYear = (categories, list, year, reverse = false) => {
  const filteredList = list.filter(x => {
    return x.category?.includes(categories[0]) && x.subtitle?.includes(year)
  })
  return reverse ? filteredList.reverse() : filteredList
}

export const getPaperDataByYear2 = (
  categories,
  list,
  year,
  reverse = false
) => {
  const filteredList = list.filter(x => {
    return (
      (x.category?.includes(categories[0]) ||
        x.category?.includes(categories[1]) ||
        x.category?.includes(categories[2])) &&
      (x.additionalInfo?.includes(year[0]) ||
        x.additionalInfo?.includes(year[1]) ||
        x.additionalInfo?.includes(year[2]) ||
        x.subtitle?.includes(year[0]) ||
        x.subtitle?.includes(year[1]) ||
        x.subtitle?.includes(year[2]))
    )
  })
  return reverse ? filteredList.reverse() : filteredList
}

export const filterByType = (array, type) => array.filter(x => x.type === type)

export const getDataByType = (categories, list, type, reverse = false) => {
  const filteredList = list.filter(x => {
    return x.type === type
  })
  return reverse ? filteredList.reverse() : filteredList
}
