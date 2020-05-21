import React from 'react';

import {ModalHoc} from '@/components'

const AddModal: React.FC = (props) => {
    console.log('-----------')
    console.log(props)
   return (
       <div> this.is AddModal</div>
   )

}


export default ModalHoc(AddModal)
