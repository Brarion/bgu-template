
import { FC } from 'react';

type Props = {
  fact: string
}

const CatFact: FC<Props> = (props) => {
  return <div>{props.fact}</div>
}

export default CatFact;