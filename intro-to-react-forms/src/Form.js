import { useEffect, useState } from 'react';
import './Form.css';

const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [phoneType, setPhoneType] = useState('')
    const [staff, setStaff] = useState('');
    const [bio, setBio] = useState('');
    const [notification, setNotification] = useState(false);
    const [validationErrors, setValidationErrors] = useState([]);
    const [hasSubmitted, setHasSubmitted] = useState(false);

    const submitForm = (e) => {
        // prevent default submit action
        e.preventDefault();

        setHasSubmitted(true);

        if (validationErrors.length > 0) return alert('Cannot Submit! Please check errors.');
        if (!phone) setPhoneType('');

        const userRegistration = {
            name,
            email,
            phone,
            phoneType,
            staff,
            bio,
            notification,
            submittedOn: new Date()
        };

        console.log(userRegistration);
        
        setName('');
        setEmail('');
        setPhone('');
        setPhoneType('');
        setBio('');
        setNotification('');
        setValidationErrors([]);
        setHasSubmitted(false);
    }

    useEffect(() => {
        const errors = [];

        if (name.length <= 0) errors.push('Name must be present');
        if (!email.includes('@')) errors.push('Email must be present and should be properly formatted');
        if (phone && phone.split('-').length !== 3) errors.push('Phone number should be properly formatted (10-digit, proper hyphens)');
        if (phone && !phoneType) errors.push('Phone type should be selected');
        if (bio.length > 280) errors.push('Bio character limit is 280. Current character count is: ' + bio.length);

        setValidationErrors(errors);
    }, [name, email, phone, phoneType, bio, notification]);

    return (
        <div id='registration-form'>
            {hasSubmitted && validationErrors.length > 0 && (
                <div>
                    <ul id='error-list'>
                    {validationErrors.map(error => (
                        <li key={error}>{error}</li>
                    ))}
                    </ul>
                </div>
            )}
            <h2>Fill out the user registration form:</h2>
            <form>
                <div id='name-field'>
                    <label htmlFor='name'>Name: </label>
                    <input type='text' id='name' name='name' onChange={e => setName(e.target.value)} value={name} />
                </div>
                <div id='email-field'>
                    <label htmlFor='email'>Email: </label>
                    <input type='text' id='email' name='email' onChange={e => setEmail(e.target.value)} value={email} />
                </div>
                <div id='phone-field'>
                    <label htmlFor='phone'>Phone: </label>
                    <input type='text' id='phone' name='phone' onChange={e => setPhone(e.target.value)} value={phone} placeholder='123-456-7890' />
                    {phone &&
                        <select name='phoneType' onChange={e => setPhoneType(e.target.value)}>
                        <option value='' selected disabled>Select a phone type...</option>
                        <option>Home</option>
                        <option>Work</option>
                        <option>Mobile</option>
                        </select>
                    }
                </div>
                <div id='staff-field' onChange={e => setStaff(e.target.value)}>
                    <input type='radio' name='staff' value='Staff' /> Staff
                    <input type='radio' name='staff' value='Student' /> Student
                </div>
                <div id='bio-field'>
                    <textarea id='bio' name='bio' rows='10' cols='50' onChange={e => setBio(e.target.value)} value={bio} />
                </div>
                <div id='notification-field'>
                    <input type='checkbox' id='notification' name='notification'
                        onChange={() => setNotification(!notification)}
                    />
                    <label htmlFor='notification'>Receive Notification</label>
                </div>
                <input type='submit' value='submit' onClick={submitForm} />
            </form>
        </div>
    )
};

export default Form;
