import React from 'react'


const CakeSample = ({setFieldValue}) => {

    return(
        <input id="file" name="file" type="file" onChange={(event) => {
            setFieldValue("file", event.currentTarget.files[0]);
          }} />
    )
}

export default CakeSample