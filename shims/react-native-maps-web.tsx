import type { ForwardedRef, PropsWithChildren } from 'react';
import { forwardRef } from 'react';
import { Text, View } from 'react-native';

const UnsupportedMap = forwardRef<View, PropsWithChildren<{ style?: any }>>(
  ({ children, style }, ref) => (
    <View ref={ref} style={[{ alignItems: 'center', justifyContent: 'center' }, style]}>
      <Text accessibilityRole="text">
        Map view is not supported on web in this project configuration.
      </Text>
      {children}
    </View>
  )
);

const Primitive = <P extends object>(ComponentName: string) =>
  forwardRef<View, PropsWithChildren<P>>(({ children, ...rest }, ref) => (
    <View ref={ref as ForwardedRef<View>} {...rest}>
      {children}
    </View>
  ));

export const Marker = Primitive('Marker');
export const Polygon = Primitive('Polygon');
export const Polyline = Primitive('Polyline');
export const Callout = Primitive('Callout');
export const CalloutSubview = Primitive('CalloutSubview');
export const Circle = Primitive('Circle');
export const Overlay = Primitive('Overlay');
export const UrlTile = Primitive('UrlTile');
export const WMSTile = Primitive('WMSTile');
export const Geojson = Primitive('Geojson');

export const PROVIDER_DEFAULT = 'default';
export const PROVIDER_GOOGLE = 'google';
export const MAP_TYPES = { STANDARD: 'standard', SATELLITE: 'satellite', HYBRID: 'hybrid', TERRAIN: 'terrain' };

export const AnimatedRegion = class {
  constructor() {
    throw new Error('AnimatedRegion is not supported on web.');
  }
};

export default UnsupportedMap;
