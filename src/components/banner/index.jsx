import cliffs from "../../assets/images/cliffs.png"
import "./style.scss"

export default function Banner () {
  return (
    <div>
      <div>
      <img className="banner" src={cliffs} alt="falaises" />
      </div>
      <h1 className="title">Chez vous, partout et ailleurs</h1>
    </div>
  )
}