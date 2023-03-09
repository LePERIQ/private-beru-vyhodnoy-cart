import React, { useEffect } from 'react';
import { getShopData } from './store/redux/beersSlice/beersSlice';
import { useAppDispatch, useAppSelector } from './store/redux/hooks';


function App(): JSX.Element {
 const shopData = useAppSelector((store) => store.shopData)
 
 const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getShopData())
  }, []);

  console.log(shopData)
  return (
    <div className="App">
      {shopData?.data?.draft?.map((beer) => (
        <p key={beer.i}>{beer.t}</p>
      ))}
    </div>
  );
}

export default App;
