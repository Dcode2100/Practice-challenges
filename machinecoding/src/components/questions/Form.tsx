import React, { useState, ChangeEvent, FormEvent } from "react"

type FormData = {
  name: string
  email: string
}

type Errors = Partial<Record<keyof FormData, string>>

export default function App() {
  const [formData, setFormData] = useState<FormData>({ name: "", email: "" })
  const [errors, setErrors] = useState<Errors>({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const newErrors: Errors = {}
    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email format"
    return newErrors
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    if (errors[e.target.name as keyof Errors]) setErrors(prev => ({ ...prev, [e.target.name]: "" }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const newErrors = validate()
    if (Object.keys(newErrors).length === 0) setSubmitted(true)
    else setErrors(newErrors)
  }

  return (
    <main className="container" role="main" aria-labelledby="form-title">
      <h1 id="form-title">Accessible Form Example</h1>
      {submitted ? (
        <p role="status" className="success">✅ Form submitted successfully!</p>
      ) : (
        <form onSubmit={handleSubmit} noValidate aria-label="User form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" value={formData.name} onChange={handleChange} aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined} />
            {errors.name && <span id="name-error" role="alert" className="error">{errors.name}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} />
            {errors.email && <span id="email-error" role="alert" className="error">{errors.email}</span>}
          </div>
          <button type="submit" className="btn">Submit</button>
        </form>
      )}
    </main>
  )
}


