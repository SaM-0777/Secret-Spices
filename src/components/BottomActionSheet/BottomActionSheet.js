import React, { useEffect, useCallback, useMemo } from 'react';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';

import SheetOverlay from './SheetOverlay';
import { bottomActionStyles } from './Styles';


const BottomActionSheet = ({ children, sheetRef, isActive, setIsActive, sheetSnapPoints }) => {
  const snapPoints = useMemo(() => sheetSnapPoints, []);

  const handleOpenBottomSheet = useCallback((index) => {
    sheetRef.current?.snapToIndex(index)
  }, [])
  const handleCloseBottomSheet = useCallback(() => {
    sheetRef.current?.close()
  }, [])
  
  useEffect(() => {
    if (isActive) handleOpenBottomSheet(0)
    else handleCloseBottomSheet()
    
    return () => { }
  }, [isActive])

  return (
    <>
      <SheetOverlay isActive={isActive} setIsActive={setIsActive} />
      <BottomSheet index={-1} ref={sheetRef} snapPoints={snapPoints} enablePanDownToClose={true} onClose={() => setIsActive(false)} style={bottomActionStyles.bottomSheet} >
        {children}
      </BottomSheet>
    </>
  )
};


export default BottomActionSheet;

