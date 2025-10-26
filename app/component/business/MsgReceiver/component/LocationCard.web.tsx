import { memo, type MutableRefObject } from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from 'react-native';

type LocationCardProps = {
  text: string;
  popover: MutableRefObject<{ show: () => void } | null>;
};

const LocationCard = ({ text }: LocationCardProps) => {
  const { t } = useTranslation();

  if (process.env.NODE_ENV !== 'production') {
    console.log(text, 'LocationCard-log-web');
  }

  return (
    <Text style={{ paddingHorizontal: 8, paddingVertical: 2 }}>
      {t('android not support map')}
    </Text>
  );
};

export default memo(LocationCard);
