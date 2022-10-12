import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { TouchableOpacity } from 'react-native';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';

import SheetOverlay from './SheetOverlay';
import { bottomActionStyles } from './Styles';


const BottomActionSheet = ({ children, sheetSnapPoints }) => {
  const bottomSheetRef = useRef()
  const [isBottomSheet, setIsBottomSheet] = useState(false)

  const snapPoints = useMemo(() => ["25%", "50%", "90%"], []);

  const handleOpenBottomSheet = useCallback((index) => {
    bottomSheetRef.current?.snapToIndex(index)
  }, [])
  const handleCloseBottomSheet = useCallback(() => {
    bottomSheetRef.current?.close()
  }, [])
  
  const toggleBottomSheet = () => setIsBottomSheet(prevState => !prevState)
  
  useEffect(() => {
    if (isBottomSheet) handleOpenBottomSheet(0)
    else handleCloseBottomSheet()
    
    return () => { }
  }, [isBottomSheet])

  return (
    <>
      <SheetOverlay />
      <BottomSheet index={-1} ref={bottomSheetRef} snapPoints={snapPoints} enablePanDownToClose={true} onClose={() => setIsBottomSheet(false)} style={bottomActionStyles.bottomSheet} >
        <BottomSheetView>
          {children}
        </BottomSheetView>
      </BottomSheet>
    </>
  )
};


export default BottomActionSheet;

