import Home from '@/pages/index'
import { render } from '@testing-library/react'

test('check for Getting Started Text', () => {
  const { getByText } = render(<Home/>)
  expect(getByText('Get started by editing')).toBeTruthy()
})
