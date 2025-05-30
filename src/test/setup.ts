import '@testing-library/jest-dom'
import '@testing-library/react'
import '@testing-library/user-event'

import { mockServer } from './msw/mswServer'

beforeAll(() => {
  mockServer.listen({
    onUnhandledRequest: 'error',
  })
})

afterEach(() => {
  mockServer.resetHandlers()
})

afterAll(() => {
  mockServer.close()
})
