
import "./style.scss"

export default function Banner ({ image = "", children}) {
  return (
    <div className={"banner"}>
      <div className="container">
        <div className="banner__image">
          <img src={image} alt="falaises" />
        </div>
        <h1 className="banner__title">{children}</h1>
      </div>
    </div>
  )
}