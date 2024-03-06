"use client"
import React, { FC, ReactNode } from 'react';
import { IntlProvider } from 'react-intl';
import LanguageUtils from './LanguageUtils';

interface IntlProviderWrapperProps {
  children: ReactNode;
}

const messages = LanguageUtils.getFlattenedMessages();

const IntlProviderWrapper: FC<IntlProviderWrapperProps> = ({ children }) => {
  return (
    <IntlProvider locale='vi' messages={messages['vi']} defaultLocale='en'>
      {children}
    </IntlProvider>
  );
}

export default IntlProviderWrapper;