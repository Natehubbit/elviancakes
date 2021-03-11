import React from 'react';
import BottomSheet from '../BottomSheet';

const AppOverlay: React.FC = ({
  children,
}) => {
  return (
    <>
      {children}
      <BottomSheet />
    </>
  );
};

export default AppOverlay;
