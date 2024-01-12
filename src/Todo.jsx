// import  { useEffect } from 'react'
// import { useDispatch,useSelector } from 'react-redux'
// import { fetchTodo } from './redux/todoSlicer'
// export const Todo = () => {
//     const dispatch = useDispatch()
//     const data = useSelector(state => state)
//     useEffect(()=>{
//       dispatch(fetchTodo())
//     },[])
//     console.log(data);
//   return (
//     <div>todo</div>
//   )
// }







import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchExchangeRates } from './redux/exchangeRatesSlice'; // Import the new action

export const Todo = () => {
  const dispatch = useDispatch();
  // Assuming 'todo' is the slice name
  const exchangeRatesData = useSelector((state) => state.exchangeRates); // Assuming 'exchangeRates' is the slice name

  useEffect(() => {
    // Fetch todos
  

    // Fetch exchange rates
    dispatch(fetchExchangeRates());
  }, [dispatch]);

 
  console.log(exchangeRatesData);

  return (
    <div>
      <h1>Todos</h1>
     
      
      <h1>Exchange Rates</h1>
      {exchangeRatesData.isLoading ? (
        <p>Loading exchange rates...</p>
      ) : (
        
        <h1>Exchange rates data: {JSON.stringify(exchangeRatesData.rates)}</h1>
      )}
    </div>
  );
};
