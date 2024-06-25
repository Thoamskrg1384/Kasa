import LayoutDefault from "../../layout/default";
import CodeError from "../../components/404";


export default function Error () {
  return (
    <LayoutDefault>
      <CodeError>
        <span>Oups! La page que </span> <span>vous demandez n&apos;existe pas.</span>
      </CodeError>
    </LayoutDefault>
  )
}