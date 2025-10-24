import React from 'react'

const ErrorMessage = ({message}) => {
  return (
    <div className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded text-center'>
      <strong>خطا:</strong> {message || "مشکلی پیش امده لطفا دوباره تلاش کنید."}
    </div>
  )
}

export default ErrorMessage