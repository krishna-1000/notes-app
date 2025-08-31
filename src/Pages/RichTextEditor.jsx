import React from 'react'
import { useLocation } from 'react-router-dom'
import { useModal } from '../hooks/useModal'

const RichTextEditor = () => {
  const {content} = useModal()
  return (
    <div>
      {content}
    </div>
  )
}

export default RichTextEditor
