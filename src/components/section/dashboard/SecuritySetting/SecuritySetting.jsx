import React from 'react'
import ChangePassWord from './ChangePassWord/ChangePassWord'
import EditSecurity from './editSecurity/EditSecurity'

const SecuritySetting = () => {
  return (
    <div className='flex flex-col gap-12'>
      <ChangePassWord/>
      <EditSecurity/>
    </div>
  )
}

export default SecuritySetting
