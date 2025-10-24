import React from 'react'

const ErrorMessage = ({message}) => {
  return (
    <div className =' w-screen bg-red-100 border border-red-400 text-red-700 py-7 rounded text-center'>
      <strong>خطا:</strong> {message || "مشکلی پیش امده لطفا دوباره تلاش کنید."}
    </div>
  )
}

export default ErrorMessage