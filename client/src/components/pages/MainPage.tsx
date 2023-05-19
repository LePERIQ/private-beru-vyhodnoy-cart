import React, { useEffect } from 'react';
import { getShopData } from '../../store/redux/beersSlice/beersSlice';
import { useAppDispatch, useAppSelector } from '../../store/redux/hooks';
import ToggleSwitch from '../ui/ToggleSwitch';

export default function MainPage(): JSX.Element {
  const shopData = useAppSelector((store) => store.shopData);
  const switchState = useAppSelector((store) => store.switchState);
  

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getShopData(14));
  }, []);

  return (
    <>
      <ToggleSwitch />
      <div style={{ display: 'flex' }}>
        {switchState === false ? (
          <div>
            {shopData.data.draft.map((position) => (
              <p key={position.i}>{position.t}</p>
            ))}
          </div>
        ) : (
          <div>
            {shopData.data.bottles.map((position) => (
              <p key={position.i}>{position.t}</p>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
