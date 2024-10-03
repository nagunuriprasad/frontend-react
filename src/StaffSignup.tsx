import React, { useState } from 'react';
import './assets/css/StaffSignup.css';
import guestAvatar from './assets/image.png'; // Path to guest image

const StaffSignup = () => {
  const [formData, setFormData] = useState({
    personalInfo: {
      fullname: '',
      dob: '',
      phone: '',
      email: '',
      password: '',
      confirmPassword: '',
      gender: '',
      permanentAddress: { city: '', area: '', pin: '' },
      presentAddress: { city: '', area: '', pin: '', pickupArea: '' },
      profileImage: '',
    },
    education: Array(5).fill({ sno: '', qualification: '', year: '', marks: '', docs: '' }),
    jobDetails: {
      jobTitle: '',
      experience: '',
      expertIn: '',
      languages: '',
      description: '',
      workType: '',
      subscription: '',
      uploads: { aadhar: '', cv: '', pan: '', others: '' },
    },
  });

  const [errors, setErrors] = useState<string[]>([]);
  const [agreedToTerms, setAgreedToTerms] = useState(false); // State for terms and conditions checkbox

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    section: string,
    key: string,
    subSection?: string
  ) => {
    if (subSection) {
      setFormData({
        ...formData,
        [section]: {
          ...formData[section],
          [subSection]: {
            ...formData[section][subSection],
            [key]: e.target.value,
          },
        },
      });
    } else {
      setFormData({
        ...formData,
        [section]: {
          ...formData[section],
          [key]: e.target.value,
        },
      });
    }
  };

  const handleFileUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    section: string,
    key: string,
    subSection: string
  ) => {
    const file = e.target.files?.[0] || '';
    setFormData({
      ...formData,
      [section]: {
        ...formData[section],
        [subSection]: {
          ...formData[section][subSection],
          [key]: file,
        },
      },
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: string[] = [];

    // Validation checks
    if (!formData.personalInfo.fullname) newErrors.push('Full Name is required');
    if (!formData.personalInfo.email) newErrors.push('Email is required');
    if (!formData.personalInfo.password) newErrors.push('Password is required');
    if (formData.personalInfo.password !== formData.personalInfo.confirmPassword)
      newErrors.push('Passwords do not match');
    if (!agreedToTerms) newErrors.push('You must agree to the terms and conditions.');

    if (newErrors.length === 0) {
      console.log('Form submitted', formData);
    } else {
      setErrors(newErrors);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        setFormData({
          ...formData,
          personalInfo: {
            ...formData.personalInfo,
            profileImage: reader.result as string, // Base64 image
          },
        });
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="staffsignup-container">
      <h1 className="staffsignup-header">Staff Signup</h1>


        {/* Profile Image Upload Section */}
      <div className="staffsignup-profile-image-container">
        <img
          src={formData.personalInfo.profileImage || guestAvatar}
          alt="Profile"
          className="staffsignup-profile-image" />
        <input type="file" accept="image/*" onChange={handleImageChange} />
      </div>
    
      <form className="staffsignup-form" onSubmit={handleSubmit}>
      <div className="staffsignup-forms-container">
        {/* Personal Information Form */}
        <div className="staffsignup-form-section">
          <h2>Personal Information</h2>
          <input type="text" placeholder="Full Name" value={formData.personalInfo.fullname}
            onChange={(e) => handleInputChange(e, 'personalInfo', 'fullname')} required />
          <input type="date" placeholder="Date of Birth" value={formData.personalInfo.dob}
            onChange={(e) => handleInputChange(e, 'personalInfo', 'dob')} required />
          <input type="text" placeholder="Phone Number" value={formData.personalInfo.phone}
            onChange={(e) => handleInputChange(e, 'personalInfo', 'phone')} required />
          <input type="email" placeholder="Email ID" value={formData.personalInfo.email}
            onChange={(e) => handleInputChange(e, 'personalInfo', 'email')} required />
          <input type="password" placeholder="Password" value={formData.personalInfo.password}
            onChange={(e) => handleInputChange(e, 'personalInfo', 'password')} required />
          <input type="password" placeholder="Confirm Password" value={formData.personalInfo.confirmPassword}
            onChange={(e) => handleInputChange(e, 'personalInfo', 'confirmPassword')} required />
          <select value={formData.personalInfo.gender}
            onChange={(e) => handleInputChange(e, 'personalInfo', 'gender')}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          
          {/* Permanent Address */}
          <h3>Permanent Address</h3>
          <input type="text" placeholder="City" value={formData.personalInfo.permanentAddress.city}
            onChange={(e) => handleInputChange(e, 'personalInfo', 'city', 'permanentAddress')} required />
          <input type="text" placeholder="Area" value={formData.personalInfo.permanentAddress.area}
            onChange={(e) => handleInputChange(e, 'personalInfo', 'area', 'permanentAddress')} required />
          <input type="text" placeholder="Pin Code" value={formData.personalInfo.permanentAddress.pin}
            onChange={(e) => handleInputChange(e, 'personalInfo', 'pin', 'permanentAddress')} required />

          {/* Present Address */}
          <h3>Present Address</h3>
          <input type="text" placeholder="City" value={formData.personalInfo.presentAddress.city}
            onChange={(e) => handleInputChange(e, 'personalInfo', 'city', 'presentAddress')} required />
          <input type="text" placeholder="Area" value={formData.personalInfo.presentAddress.area}
            onChange={(e) => handleInputChange(e, 'personalInfo', 'area', 'presentAddress')} required />
          <input type="text" placeholder="Pin Code" value={formData.personalInfo.presentAddress.pin}
            onChange={(e) => handleInputChange(e, 'personalInfo', 'pin', 'presentAddress')} required />
         
        </div>

        {/* Education Qualification Form */}
<div className="staffsignup-form-section">
  <h2>Education Qualification</h2>
  <table>
    <thead>
      <tr>
        <th>SI No</th>
        <th>Qualification</th>
        <th>Year of Passing</th>
        <th>Marks %</th>
        <th>Upload Docs</th>
      </tr>
    </thead>
    <tbody>
      {/* Row 1 */}
      <tr>
        <td><input type="text" value={formData.education[0].sno}
          onChange={(e) => handleInputChange(e, 'education', 'sno', '0')} /></td>
        <td><input type="text" value={formData.education[0].qualification}
          onChange={(e) => handleInputChange(e, 'education', 'qualification', '0')} /></td>
        <td><input type="text" value={formData.education[0].year}
          onChange={(e) => handleInputChange(e, 'education', 'year', '0')} /></td>
        <td><input type="text" value={formData.education[0].marks}
          onChange={(e) => handleInputChange(e, 'education', 'marks', '0')} /></td>
        <td><input type="file" value={formData.education[0].docs}
          onChange={(e) => handleInputChange(e, 'education', 'docs', '0')} /></td>
      </tr>

      {/* Row 2 */}
      <tr>
        <td><input type="text" value={formData.education[1].sno}
          onChange={(e) => handleInputChange(e, 'education', 'sno', '1')} /></td>
        <td><input type="text" value={formData.education[1].qualification}
          onChange={(e) => handleInputChange(e, 'education', 'qualification', '1')} /></td>
        <td><input type="text" value={formData.education[1].year}
          onChange={(e) => handleInputChange(e, 'education', 'year', '1')} /></td>
        <td><input type="text" value={formData.education[1].marks}
          onChange={(e) => handleInputChange(e, 'education', 'marks', '1')} /></td>
        <td><input type="file" value={formData.education[1].docs}
          onChange={(e) => handleInputChange(e, 'education', 'docs', '1')} /></td>
      </tr>

      {/* Row 3 */}
      <tr>
        <td><input type="text" value={formData.education[2].sno}
          onChange={(e) => handleInputChange(e, 'education', 'sno', '2')} /></td>
        <td><input type="text" value={formData.education[2].qualification}
          onChange={(e) => handleInputChange(e, 'education', 'qualification', '2')} /></td>
        <td><input type="text" value={formData.education[2].year}
          onChange={(e) => handleInputChange(e, 'education', 'year', '2')} /></td>
        <td><input type="text" value={formData.education[2].marks}
          onChange={(e) => handleInputChange(e, 'education', 'marks', '2')} /></td>
        <td><input type="file" value={formData.education[2].docs}
          onChange={(e) => handleInputChange(e, 'education', 'docs', '2')} /></td>
      </tr>

      {/* Row 4 */}
      <tr>
        <td><input type="text" value={formData.education[3].sno}
          onChange={(e) => handleInputChange(e, 'education', 'sno', '3')} /></td>
        <td><input type="text" value={formData.education[3].qualification}
          onChange={(e) => handleInputChange(e, 'education', 'qualification', '3')} /></td>
        <td><input type="text" value={formData.education[3].year}
          onChange={(e) => handleInputChange(e, 'education', 'year', '3')} /></td>
        <td><input type="text" value={formData.education[3].marks}
          onChange={(e) => handleInputChange(e, 'education', 'marks', '3')} /></td>
        <td><input type="file" value={formData.education[3].docs}
          onChange={(e) => handleInputChange(e, 'education', 'docs', '3')} /></td>
      </tr>

      {/* Row 5 */}
      <tr>
        <td><input type="text" value={formData.education[4].sno}
          onChange={(e) => handleInputChange(e, 'education', 'sno', '4')} /></td>
        <td><input type="text" value={formData.education[4].qualification}
          onChange={(e) => handleInputChange(e, 'education', 'qualification', '4')} /></td>
        <td><input type="text" value={formData.education[4].year}
          onChange={(e) => handleInputChange(e, 'education', 'year', '4')} /></td>
        <td><input type="text" value={formData.education[4].marks}
          onChange={(e) => handleInputChange(e, 'education', 'marks', '4')} /></td>
        <td><input type="file" value={formData.education[4].docs}
          onChange={(e) => handleInputChange(e, 'education', 'docs', '4')} /></td>
      </tr>
    </tbody>
  </table>
</div>


        {/* Job Details Form */}
        <div className="staffsignup-form-section">
          <h2>Job Details</h2>
          <input type="text" placeholder="Job Title" value={formData.jobDetails.jobTitle}
            onChange={(e) => handleInputChange(e, 'jobDetails', 'jobTitle')} required />
          <input type="text" placeholder="Work Experience" value={formData.jobDetails.experience}
            onChange={(e) => handleInputChange(e, 'jobDetails', 'experience')} required />
          <input type="text" placeholder="Expert In" value={formData.jobDetails.expertIn}
            onChange={(e) => handleInputChange(e, 'jobDetails', 'expertIn')} required />
          <input type="text" placeholder="Languages Known" value={formData.jobDetails.languages}
            onChange={(e) => handleInputChange(e, 'jobDetails', 'languages')} required />
          <textarea placeholder="Description" value={formData.jobDetails.description}
            onChange={(e) => handleInputChange(e, 'jobDetails', 'description')} required></textarea>
          <input type="text" placeholder="Work Type" value={formData.jobDetails.workType}
            onChange={(e) => handleInputChange(e, 'jobDetails', 'workType')} required />
          <input type="text" placeholder="Subscription" value={formData.jobDetails.subscription}
            onChange={(e) => handleInputChange(e, 'jobDetails', 'subscription')} required />
          
          <h3>Uploads</h3>
            <div className="staffsignup-upload-section">
              <label>Aadhar</label>
              <input
                type="file"
                onChange={(e) => handleFileUpload(e, 'jobDetails', 'aadhar', 'uploads')}
              />
              <label>CV</label>
              <input
                type="file"
                onChange={(e) => handleFileUpload(e, 'jobDetails', 'cv', 'uploads')}
              />
              <label>PAN</label>
              <input
                type="file"
                onChange={(e) => handleFileUpload(e, 'jobDetails', 'pan', 'uploads')}
              />
              <label>Others</label>
              <input
                type="file"
                onChange={(e) => handleFileUpload(e, 'jobDetails', 'others', 'uploads')}
              />
            </div>
          </div>
        </div>

        {/* Error Handling */}
        {errors.length > 0 && (
          <div className="staffsignup-error">
            {errors.map((error, index) => (
              <p key={index}>{error}</p>
            ))}
          </div>
        )}

        

        <div className="staffsignup-footer">
  <div className="staffsignup-terms">
    <input type="checkbox" id="terms" required />
    <label htmlFor="terms">
      I agree to the <a href="/terms"> Terms and Conditions</a> and <a href="/privacy">Privacy Policy</a>
    </label>
  </div>
  <button type="submit" className="staffsignup-submit-button">Submit</button>
</div>
      </form>
    </div>
  );
};

export default StaffSignup;
