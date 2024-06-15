
import "./style.scss"

export default function Banner ({title = "", image = ""}) {
  return (
    <div className={"banner"}>
      <div className="container">
        <div className="banner__image">
          <img src={image} alt="falaises" />
        </div>
        <h1 className="banner__title">{title}</h1>
      </div>
    </div>
  )
}