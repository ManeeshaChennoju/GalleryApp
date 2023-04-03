const ThumbnailItem = props => {
  const {thumbNailDetails, onClickChange} = props
  const {
    id,
    imageUrl,
    thumbnailUrl,
    imageAltText,
    thumbnailAltText,
  } = thumbNailDetails
  const clickImageChange = () => {
    onClickChange(id, imageUrl, imageAltText)
  }

  return (
    <li className="thumbImages">
      <button type="button" className="button" onClick={clickImageChange}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className="thumbnailImg"
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
