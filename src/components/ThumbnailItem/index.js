import './index.css'

const ThumbnailItem = props => {
  const {imgDetail, isActive, setActiveThumbnailId} = props
  const {id, thumbnailUrl, thumbnailAltText} = imgDetail

  const onClickThumbnailImg = () => {
    setActiveThumbnailId(id)
  }

  const ThumbnailClassName = isActive ? 'thumbnailImg' : 'active'
  return (
    <li>
      <button className="ThumbnailItemBtn" onClick={onClickThumbnailImg}>
        <img
          src={thumbnailUrl}
          className={ThumbnailClassName}
          alt={thumbnailAltText}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
