import { useEffect, useState } from 'react';
import {catApi} from '../../api';
import { CatFact } from '../../components';
import { CatFact as CatFactType } from '../../models/cat';

function Main() {
  const [catFact, setCatFact] = useState<CatFactType | null>(null);
  const [allCatFacts, setAllCatFacts] = useState<CatFactType[]>([]);

  useEffect(() => {
    catApi.getFact()
      .then(setCatFact)
      .catch((error) => {
        console.error(error)
      })
    
    catApi.getAllFacts()
      .then((allCatFacts) => {
        setAllCatFacts(allCatFacts.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  return (
    <div>
      <h1>Случайный факт о котах</h1>
      <CatFact fact={catFact?.fact ?? "Загрузка факта"} />

      <h1>Все факты</h1>
      <div className="factsWrapper">
        {allCatFacts.length ? allCatFacts.map(cf => <CatFact key={cf.fact} fact={cf.fact} />) : "Список фактов пуст"}
      </div>
    </div>
  );
}

// const INITIAL_STATE: CatFactType = {
//     fact: '',
//     length: 0,
//   }

// class App extends Component<any, CatFactType> {
//   state: CatFactType = INITIAL_STATE

//   componentDidMount(): void {
//       catApi.getFact()
//         .then(this.setState)
//         .catch((error) => {
//           console.error(error)
//         })
//   } 

//   render() {
//     return (
//       <div>
//        <h1>Случайный факт о котах</h1>
//        <CatFact fact={this.state.fact || "Загрузка факта"} />
//       </div>
//     )
//   }
// }

export default Main;
