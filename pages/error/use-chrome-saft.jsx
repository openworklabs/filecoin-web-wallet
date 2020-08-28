import React from 'react'
import { ErrorView } from '../../components/Shared'

export default () => {
  return (
    <ErrorView
      title='You must use Google Chrome to use this feature.'
      description='Please install Google Chrome to continue setting up a self custodied account to receive Filecoin SAFT.'
      linkDisplay='Install Google Chrome.'
      linkhref='https://www.google.com/chrome'
    />
  )
}
