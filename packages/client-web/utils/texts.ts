export const truncateText = (description: string, maxChars: number = 200) => {
  if (!description) return ''
  if (description.length < maxChars) return description

  const splittedDescriptionByWords = description.split(' ')
  let currChars = 0

  for (let i = 0; i < splittedDescriptionByWords.length; i++) {
    if (currChars + splittedDescriptionByWords[i].length > maxChars) {
      return splittedDescriptionByWords.slice(i).join(' ') + '...'
    }

    currChars += splittedDescriptionByWords[i].length
  }

  return description
}
