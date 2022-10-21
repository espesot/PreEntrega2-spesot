import React from 'react'
import { DotPulse } from '@uiball/loaders'


function Loader() {
  return (
    <>
      <DotPulse
        size={40}
        speed={1.3}
        color="blue"
      />
    </>
  )
}

export default Loader