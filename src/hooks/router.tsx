import React from 'react'

import { BrowserRouter } from 'react-router-dom'

export const withRouter = (children: React.ReactNode) => <BrowserRouter>{children}</BrowserRouter>
