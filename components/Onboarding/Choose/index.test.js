import { cleanup, render, screen, act, fireEvent } from '@testing-library/react'
import composeMockAppTree from '../../../test-utils/composeMockAppTree'

import Choose from '.'

describe('Choosing a wallet', () => {
  afterEach(cleanup)
  test('it renders correctly', () => {
    const { Tree } = composeMockAppTree('postOnboard')

    const { container } = render(
      <Tree>
        <Choose />
      </Tree>
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  test('It renders all wallet options when in dev mode', () => {
    const { Tree } = composeMockAppTree('postOnboard')

    const { container } = render(
      <Tree>
        <Choose />
      </Tree>
    )
    act(() => {
      fireEvent.click(screen.getByText('Dev Mode'))
    })
    expect(screen.queryByText('Ledger Device')).toBeInTheDocument()
    expect(screen.queryByText('SAFT Setup')).toBeInTheDocument()
    expect(screen.getByText('Generate Seed Phrase')).toBeInTheDocument()
    expect(screen.getByText('Import Seed Phrase')).toBeInTheDocument()
    expect(screen.getByText('Import Private Key')).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
