import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Banner.css'
const Banner = () => {
    const [searchForm, setSearchForm] = useState({
        address: '',
        service: ''
    })
    const handleChange = (e) => {
        setSearchForm({ ...searchForm, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchForm({ address: '', service: '' })
    }
    return (
        <div className='banner banner--home banner--inner'>
            <div className="banner__text-wrapp">
                <h3>WELCOME TO I CLEAN WE CLEAN</h3>
                <h1>WE STRIVE TO DELIVER THE BEST SERVICE</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='Your Address' name='address' value={searchForm.address} onChange={handleChange} />
                    <select name='service' defaultValue={searchForm.service} onChange={handleChange}>
                        <option value="option1">option 1</option>
                        <option value="option2">option 2</option>
                        <option value="option3">option 3</option>
                    </select>
                    <button>Search</button>
                </form>
                <h4 className='heading--contain-link'>Already a member? <Link to="">Sign up</Link> as a Costumer or <Link to="">Sign in</Link></h4>
            </div>
        </div>
    )
}

export default Banner