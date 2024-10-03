import React, { useState } from 'react';
import './assets/css/CompanyForm.css'; // External CSS for additional styling
import guestAvatar from './assets/image.png'; // Path to guest image

const CompanyForm = () => {
    const [formData, setFormData] = useState({
        companyName: '',
        registrationType: '',
        regdCity: '',
        regdArea: '',
        regdPin: '',
        regdExtraField: '',
        workCity: '',
        workArea: '',
        workPin: '',
        workExtraField: '',
        directorName: '',
        gender: '',
        email: '',
        phone: '',
        loginEmail: '',
        password: '',
        confirmPassword: '',
        profileImage: '',
        gstNumber: '',
        gstCertificate: '',
        fssaiNumber: '',
        fssaiCertificate: '',
        panNumber: '',
        panCard: '',
        companyServices: '',
        agreeToTerms: false,
    });

    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Form submitted successfully:', formData);
        }
    };

    const validateForm = () => {
        const newErrors: { [key: string]: string } = {};
        if (!formData.companyName) newErrors.companyName = 'Company name is required';
        if (!formData.registrationType) newErrors.registrationType = 'Registration type is required';
        if (!formData.email) newErrors.email = 'Email is required';
        if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email address';
        if (!formData.phone || !/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Valid phone number is required';
        if (!formData.password) newErrors.password = 'Password is required';
        if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    return (
        <div className="company-form-container">
            <h2 className="form-title">Vender signup form</h2>

         {/* Profile Image Section */}
<div className="profile-image-container">
    <img
        src={formData.profileImage || guestAvatar}
        alt="Profile Preview"
        className="profile-image"
        onClick={() => document.getElementById('profileImage').click()} // Trigger input click on image click
    />
    <input
        type="file"
        id="profileImage"
        name="profileImage"
        accept="image/*"
        onChange={handleChange}
        className="profile-image-input"
        style={{ display: 'none' }} // Hide the file input
    />
</div>


            {/* Forms Container */}
            <div className="company-forms-container">
                {/* First Form: Company and Registration Details */}
                <form onSubmit={handleSubmit} className="company-form-section">
                    <h3 className="title-center">Company & Registration</h3>
                    <div className="form-group">
                        <label>Company Name</label>
                        <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} className="full-width" />
                        {errors.companyName && <span className="error">{errors.companyName}</span>}
                    </div>
                    <div className="form-group">
                    <label>INS Certificate</label>
                    <input type="file" name="gstCertificate" accept="application/pdf" onChange={handleChange} />
                </div>
                    <div className="form-group">
                        <label>Registration Type</label>
                        <select name="registrationType" value={formData.registrationType} onChange={handleChange} className="full-width">
                            <option value="">Select</option>
                            <option value="ltd">Ltd</option>
                            <option value="pvt ltd">Pvt Ltd</option>
                            <option value="llp">LLP</option>
                            <option value="partnership">Partnership</option>
                            <option value="firm">Firm</option>
                            <option value="upc">UPC</option>
                            <option value="individual">Individual</option>
                        </select>
                        {errors.registrationType && <span className="error">{errors.registrationType}</span>}
                    </div>
                    {/* Registered Address Fields */}
                    <div className="address-section">
                        <label>Registered Address</label>
                        <div className="address-fields">
                            <input type="text" name="regdCity" placeholder="City" value={formData.regdCity} onChange={handleChange} className="full-width" />
                            <input type="text" name="regdArea" placeholder="Area" value={formData.regdArea} onChange={handleChange} className="full-width" />
                            <input type="text" name="regdPin" placeholder="Pin" value={formData.regdPin} onChange={handleChange} className="full-width" />
                            <input type="text" name="regdExtraField" placeholder="Extra Field" value={formData.regdExtraField} onChange={handleChange} className="full-width" />
                        </div>
                    </div>
                </form>

                {/* Second Form: Work Address, Contact, and Login Details */}
                <form onSubmit={handleSubmit} className="company-form-section">
                    <h3 className="title-center">Contact & Login Information</h3>
                    <div className="form-group">
                        <label>Work Address</label>
                        <div className="address-fields">
                            <input type="text" name="workCity" placeholder="City" value={formData.workCity} onChange={handleChange} className="full-width" />
                            <input type="text" name="workArea" placeholder="Area" value={formData.workArea} onChange={handleChange} className="full-width" />
                            <input type="text" name="workPin" placeholder="Pin" value={formData.workPin} onChange={handleChange} className="full-width" />
                            <input type="text" name="workExtraField" placeholder="Extra Field" value={formData.workExtraField} onChange={handleChange} className="full-width" />
                        </div>
                    </div>

                     {/* Director/Owner Name */}
                <div className="form-group flex-group">
                    <div>
                        <label>Director/Owner Name</label>
                        <input type="text" name="directorName" value={formData.directorName} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Gender</label>
                        <select name="gender" value={formData.gender} onChange={handleChange}>
                            <option value="">Select</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                </div>
                    <div className="form-group">
                        <label>Email ID</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} className="full-width" />
                        {errors.email && <span className="error">{errors.email}</span>}
                    </div>
                    <div className="form-group">
                        <label>Phone Number</label>
                        <input type="text" name="phone" value={formData.phone} onChange={handleChange} className="full-width" />
                        {errors.phone && <span className="error">{errors.phone}</span>}
                    </div>
                     {/* Incharge Name */}
                <div className="form-group flex-group">
                    <div>
                        <label>Incharge  Name</label>
                        <input type="text" name="directorName" value={formData.directorName} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Gender</label>
                        <select name="gender" value={formData.gender} onChange={handleChange}>
                            <option value="">Select</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                </div>
                    <div className="form-group">
                        <label>Login Email ID</label>
                        <input type="email" name="loginEmail" value={formData.loginEmail} onChange={handleChange} className="full-width" />
                    </div>
                </form>

                {/* Third Form: Company Services&Document Uploads */}
                <form onSubmit={handleSubmit} className="company-form-section">
                    <h3 className="title-center">Company Services&Document Uploads</h3>
                      {/* Company Services */}
                <div className="form-group">
                    <label>Company Services</label>
                    <select name="companyServices" value={formData.companyServices} onChange={handleChange}>
                        <option value="">Select Service</option>
                        <option value="events">Events</option>
                        <option value="shop">Shop</option>
                        <option value="travel">Travel</option>
                        <option value="hotel">Hotel</option>
                        <option value="instant food">Instant Food</option>
                    </select>
                </div>

                    <div className="form-group">
                        <label>GST Certificate</label>
                        <input type="file" name="gstCertificate" accept="application/pdf" onChange={handleChange} className="full-width" />
                    </div>
                    <div className="form-group">
                        <label>FSSAI Certificate</label>
                        <input type="file" name="fssaiCertificate" accept="application/pdf" onChange={handleChange} className="full-width" />
                    </div>
                    <div className="form-group">
                        <label>PAN Card</label>
                        <input type="file" name="panCard" accept="image/*" onChange={handleChange} className="full-width" />
                    </div>
                    
                </form>
            </div>

            {/* Terms & Conditions */}
            <div className="terms-section">
                <input
                    type="checkbox"
                    id="agreeToTerms"
                    name="agreeToTerms"
                    className={`form-check-input ${errors.agreeToTerms ? 'is-invalid' : ''}`}
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                />
                <label htmlFor="agreeToTerms" className="form-check-label">
                I agree to the <a href="/terms"> Terms and Conditions</a> and <a href="/privacy">Privacy Policy</a>
                </label>
                {errors.agreeToTerms && <div className="invalid-feedback">{errors.agreeToTerms}</div>}
            </div>

            {/* Submit Button */}
            <div className="submit-btn-container">
                <button type="submit" className="submit-btn">Submit</button>
            </div>
        </div>
    );
};


export default CompanyForm;
