import React from 'react';
import { useAppDispatch, useAppSelector } from '../../store/redux/hooks';
import { setSwitchState } from '../../store/redux/toggleSwitchSlice/toggleSwitchSlice';

export default function ToggleSwitch(): JSX.Element {
  const dispatch = useAppDispatch();
  return (
    <>
      <button onClick={() => dispatch(setSwitchState(false))} type="button">
        Draft
      </button>

      <button onClick={() => dispatch(setSwitchState(true))} type="button">
        Bottles
      </button>
    </>
  );
}
