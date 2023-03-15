import React, { useEffect } from 'react';
import { getShopData } from '../../store/redux/beersSlice/beersSlice';
import { useAppDispatch, useAppSelector } from '../../store/redux/hooks';

export default function MainPage(): JSX.Element {
  const shopData = useAppSelector((store) => store.shopData);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getShopData());
  }, []);

  return (
    <div style={{display: 'flex'}}>
      <div>{shopData.data.draft.map((position) => <p key={position.i}>{position.t}</p>)}</div>
      <div>{shopData.data.bottles.map((position) => <p key={position.i}>{position.t}</p>)}</div>
    </div>
  );
}
