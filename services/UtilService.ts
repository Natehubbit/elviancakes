import * as Font from 'expo-font';
import { Asset } from 'expo-asset';
import { Image } from 'react-native';

class UtilService {
  static cacheImages(
    images: Array<string | number>,
  ) {
    return images.map((image) => {
      if (typeof image === 'string') {
        return Image.prefetch(image);
      }
      return Asset.fromModule(
        image,
      ).downloadAsync();
    });
  }

  static cacheFonts(
    fonts: Array<
      | string
      | { [fontFamily: string]: Font.FontSource }
    >,
  ) {
    return fonts.map((font) => Font.loadAsync(font));
  }
}
export default UtilService;
