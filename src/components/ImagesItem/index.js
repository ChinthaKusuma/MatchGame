import './index.css'

const ImagesItem = props => {
  const {details, selectImage1} = props
  const {id, thumbnailUrl} = details

  const selectImage = () => {
    selectImage1(id)
  }
  return (
    <li>
      <button className="btn2" type="button" onClick={selectImage}>
        <img src={thumbnailUrl} alt="thumbnail" className="img1" />
      </button>
    </li>
  )
}
export default ImagesItem
