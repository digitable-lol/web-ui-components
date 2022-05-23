import { ICONS } from './Icon.utils'

describe('Icon.utils', () => {
  it('should match snapshot', () => {
    expect(ICONS).toMatchSnapshot()
  })
})
