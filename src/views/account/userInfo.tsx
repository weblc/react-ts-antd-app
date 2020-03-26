/*
 * @Description:
 * @Author: Lao_c
 * @Date: 2020-03-26 13:50:56
 */
import React from 'react';




const UserInfo:React.FC<any>= ({user}) => {


    console.log(user)

  return (
    <div>
        <span>{user.name}</span>
    </div>
  );
};

export default UserInfo;
