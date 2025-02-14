import { ThemeProvider, lobeCustomTheme } from '@lobehub/ui';
import { App, ConfigProvider } from 'antd';
import { useThemeMode } from 'antd-style';
import 'antd/dist/reset.css';
import Zh_CN from 'antd/locale/zh_CN';
import { PropsWithChildren, useCallback, useEffect } from 'react';
import { shallow } from 'zustand/shallow';

import { useSessionStore } from '@/store/session';
import { useSettings } from '@/store/settings';
import { GlobalStyle } from '@/styles';

import i18n from '../locales';
import { useStyles } from './style';

const Layout = ({ children }: PropsWithChildren) => {
  const { styles } = useStyles();

  useEffect(() => {
    // 用一种比较奇怪的方式import 了 18n
    i18n.finally(() => {});
  }, []);

  return (
    <ConfigProvider locale={Zh_CN}>
      <App className={styles.bg}>{children}</App>
    </ConfigProvider>
  );
};

export default ({ children }: PropsWithChildren) => {
  const themeMode = useSettings((s) => s.settings.themeMode, shallow);
  const { primaryColor, neutralColor } = useSettings(
    (s) => ({ neutralColor: s.settings.neutralColor, primaryColor: s.settings.primaryColor }),
    shallow,
  );
  const { browserPrefers } = useThemeMode();
  const isDarkMode = themeMode === 'auto' ? browserPrefers === 'dark' : themeMode === 'dark';

  useEffect(() => {
    // refs: https://github.com/pmndrs/zustand/blob/main/docs/integrations/persisting-store-data.md#hashydrated
    useSessionStore.persist.rehydrate();
    useSettings.persist.rehydrate();
  }, []);

  const genCustomToken: any = useCallback(
    () => lobeCustomTheme({ isDarkMode, neutralColor, primaryColor }),
    [primaryColor, neutralColor, isDarkMode],
  );

  return (
    <ThemeProvider customToken={genCustomToken || {}} themeMode={themeMode}>
      <GlobalStyle />
      <Layout>{children}</Layout>
    </ThemeProvider>
  );
};
