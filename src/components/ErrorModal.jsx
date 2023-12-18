import React from 'react'

import "../styles/general.css"

export default function ErrorModal(message, setError) {
  return (
    <div className="error-modal-backdrop">
    <div className="error-modal-content">
      <h2>Error</h2>
      <p>{message}</p>
      <button
        className="error-modal-button"
        onClick={() => setError("")}
      >
        Dismiss
      </button>
    </div>
  </div>
  )
}
