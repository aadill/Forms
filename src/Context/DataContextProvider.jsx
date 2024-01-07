import {useState} from 'react'
import DataContext from './DataContext';


function DataContextProvider({children}){
    const datas = [
        {
          name: "Chocolate Cake",
          calories: 400,
          createdAt: "2022-09-01",
        },
        {
          name: "Ice Cream",
          calories: 200,
          createdAt: "2022-01-02",
        },
        {
          name: "Tiramisu",
          calories: 300,
          createdAt: "2021-10-03",
        },
        {
          name: "Cheesecake",
          calories: 600,
          createdAt: "2022-01-04",
        },
      ];
      
  const [data, setData] = useState(datas);   
  return (
    <DataContext.Provider value={data}>
      {children}
    </DataContext.Provider>
  )
}

export default DataContextProvider


