import { useContext } from 'react'
import DataContext from '../Context/DataContext'

function Desssert() {

    const dessert = useContext(DataContext)
    console.log(dessert);
    const dataItems = dessert.filter(data => data.calories< 500).sort((a, b) => a.calories - b.calories)
    .map(dessert => {
        const name = `${dessert.name} - ${dessert.calories} cal`

        return (
            <li key={name}>
                {name}
            </li>
        )
    })
  return (
    <div>
         <h2>List of low calorie desserts:</h2>
         <ul>{dataItems}</ul>
    </div>
  )
}

export default Desssert