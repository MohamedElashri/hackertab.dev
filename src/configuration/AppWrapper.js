import React, { useReducer, useContext } from 'react'
import { getOSMode } from '../services/os'
import AppReducer from '../preferences/AppReducer'
import { PreferencesProvider } from '../preferences/PreferencesContext'
import ConfigurationContext from './ConfigurationContext'
import { ErrorBoundary } from 'react-error-boundary'
import { trackException } from '../utils/Analytics'
import { AiFillBug } from 'react-icons/ai'
import { WiRefresh } from 'react-icons/wi'
import { APP } from '../Constants'

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="Page appError">
      <AiFillBug size={64} />
      <p>Sorry there was a problem loading this page.</p>
      <p>Please try again or contact the developer at {APP.contactEmail}</p>
      <button onClick={resetErrorBoundary}>
        <WiRefresh size={32} className={'buttonIcon'} /> Try again
      </button>
    </div>
  )
}

export default function AppWrapper({ children }) {
  const configuration = useContext(ConfigurationContext)

  const [state, dispatcher] = useReducer(
    AppReducer,
    {
      userSelectedTags: configuration.supportedTags.filter((t) => t.value === 'javascript'),
      userBookmarks: [],
      theme: getOSMode(),
      openLinksNewTab: true,
      listingMode: 'normal',
      searchEngine: 'Google',
      cards: [
        { id: 0, name: 'github' },
        { id: 1, name: 'hackernews' },
        { id: 2, name: 'devto' },
        { id: 3, name: 'producthunt' },
      ],
    },
    (initialState) => {
      try {
        let preferences = AppStorage.getItem(LS_PREFERENCES_KEY)
        if (preferences) {
          preferences = JSON.parse(preferences)
          preferences = {
            ...preferences,
            userSelectedTags: supportedTags.filter((tag) =>
              preferences.userSelectedTags.includes(tag.value)
            ),
          }
          return {
            ...initialState,
            ...preferences,
          }
        }
      } catch (e) {}
      return initialState
    }
  )

  const errorHandler = (error, info) => {
    trackException(error, true)
  }

  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={errorHandler}
      onReset={() => {
        // reset the state of your app so the error doesn't happen again
      }}>
      <PreferencesProvider value={{ ...state, state, dispatcher: dispatcher }}>
        {children}
      </PreferencesProvider>
    </ErrorBoundary>
  )
}
