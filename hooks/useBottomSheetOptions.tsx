import { useSelector } from '../store';

const useBottomSheetOptions = () => useSelector((state) => state.bottomSheet);

export default useBottomSheetOptions;
