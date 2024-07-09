import React from 'react'
import ComicBody from '../../components/comicBody'
import fetchComic from '../../scripts/fetchComic'

const Comic = async () => {
  return (
    <ComicBody comicData={await fetchComic("al.mikhailov@innopolis.university")}></ComicBody>
  )
}

export default Comic

