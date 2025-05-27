import React, {useState} from 'react'

const FormOneState = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    })

    const handleInput = (e) =>{
        console.log(e.target.name);
        const {name, value} = e.target;
        setFormData(
            {...formData,[name]: value}
        )
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
            Name:
            <input type='name' name="name" value={formData.name} onChange={handleInput}/>
        </label>
        <br/><br/>
        <label>
            Email:
            <input type='email' name='email' value={formData.email} onChange={handleInput}/>
        </label>
        <br/><br/>
        <label>
            Password:
            <input type='password' name='password' value={formData.password} onChange={handleInput}/>
        </label>
        <br/><br/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default FormOneState
