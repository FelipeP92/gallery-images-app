import React from 'react'
import PropTypes from 'prop-types'

const Form = ({handleSubmit}) => {
    return (
        <div>
            <form className='py-2 d-flex align-items' onSubmit={handleSubmit}>
                <label className="w-100 py-2">
                    Buscar: 
                    <input  
                    type="text" 
                    name='inputText' 
                    placeholder = 'Search a Image'
                    />
                </label>
                <button className = 'btn btn-success ' type='submit'>Search</button>
            </form>
        </div>
    )
}

Form.propTypes = {
    handleSubmit : PropTypes.func
}

export default Form
