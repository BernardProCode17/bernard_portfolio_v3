'use client'

import { useState } from 'react'
import useWeb3Forms from '@web3forms/react'

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    city: '',
    message: ''
  })
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  
  // Replace with your Web3Forms access key
  // Get yours free at https://web3forms.com/
  const apiKey = '03b2644b-c5ea-4d38-9ea8-87d312db0e86'
  
  const { submit } = useWeb3Forms({
    access_key: apiKey,
    settings: {
      from_name: 'Portfolio Contact Form',
      subject: 'New Contact Form Submission from Portfolio',
    },
    onSuccess: (successMessage, data) => {
      setSubmitSuccess(true)
      
      // Reset the form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        city: '',
        message: ''
      })
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false)
      }, 5000)
    },
    onError: (errorMessage) => {
      setSubmitError(errorMessage || 'Something went wrong')
    }
  })
  
  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear any error for this field
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }))
    }
  }
  
  // Validate the form before submission
  const validateForm = () => {
    let valid = true
    const newErrors = { ...formErrors }
    
    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
      valid = false
    }
    
    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
      valid = false
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
      valid = false
    }
    
    // Validate phone
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
      valid = false
    }
    
    // Validate message
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
      valid = false
    }
    
    setFormErrors(newErrors)
    return valid
  }
  
  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setIsSubmitting(true)
    
    try {
      await submit({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company || 'Not provided',
        city: formData.city || 'Not provided',
        message: formData.message
      })
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitError('Failed to submit form. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="contact_form_div">
      {submitSuccess && (
        <div className="form-success-message">
          Thank you! Your message has been sent successfully.
        </div>
      )}
      
      {submitError && (
        <div className="form-error-message">
          {submitError}
        </div>
      )}
      
      <form 
        className="contact_form" 
        onSubmit={handleSubmit}
      >
        {/* Name */}
        <div className="form_groups">
          <label htmlFor="name" className="form_group_label"></label>
          <input 
            className={`form-group_input ${formErrors.name ? 'input-error' : ''}`}
            type="text" 
            name="name"
            id="name" 
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            disabled={isSubmitting}
            required
          />
          {formErrors.name && (
            <span className="error-message">{formErrors.name}</span>
          )}
        </div>
        
        {/* Email */}
        <div className="form_groups">
          <label htmlFor="email" className="form_group_label"></label>
          <input 
            className={`form-group_input ${formErrors.email ? 'input-error' : ''}`}
            type="email" 
            name="email"
            id="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            disabled={isSubmitting}
            required
          />
          {formErrors.email && (
            <span className="error-message">{formErrors.email}</span>
          )}
        </div>
        
        {/* Phone */}
        <div className="form_groups">
          <label htmlFor="phone" className="form_group_label"></label>
          <input 
            className={`form-group_input ${formErrors.phone ? 'input-error' : ''}`}
            type="tel" 
            name="phone"
            id="phone" 
            placeholder="Your Phone"
            value={formData.phone}
            onChange={handleChange}
            disabled={isSubmitting}
            required
          />
          {formErrors.phone && (
            <span className="error-message">{formErrors.phone}</span>
          )}
        </div>

        {/* Company */}
        <div className="form_groups">
          <label htmlFor="company" className="form_group_label"></label>
          <input 
            className="form-group_input" 
            type="text" 
            name="company"
            id="company"
            placeholder="Your Company (Optional)"
            value={formData.company}
            onChange={handleChange}
            disabled={isSubmitting}
          />
        </div>

        {/* City */}
        <div className="form_groups">
          <label htmlFor="city" className="form_group_label"></label>
          <input 
            className="form-group_input" 
            type="text" 
            name="city"
            id="city"
            placeholder="Your City area (Optional)"
            value={formData.city}
            onChange={handleChange}
            disabled={isSubmitting}
          />
        </div>

        {/* Message */}
        <div className="form_groups">
          <label htmlFor="message" className="form_group_label"></label>
          <textarea 
            name="message"
            id="message" 
            className={`form-group_input input_message ${formErrors.message ? 'input-error' : ''}`}
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            disabled={isSubmitting}
            required
          ></textarea>
          {formErrors.message && (
            <span className="error-message">{formErrors.message}</span>
          )}
        </div>

        {/* Send */}
        <div className="form_groups">
          <label htmlFor="send" className="form_group_label"></label>
          <input 
            className="form-group_input sendButton" 
            type="submit" 
            id="send"
            value={isSubmitting ? 'Sending...' : 'Send'}
            disabled={isSubmitting}
          />
        </div>
      </form>
    </div>
  )
}