import React, { useState,useEffect } from "react";

export default function FormWithBackground() {
  useEffect(() => {
    const css = `
      .fw-container{
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 32px;
        box-sizing: border-box;
        background-image: linear-gradient(rgba(12,12,20,0.55), rgba(12,12,20,0.55)), url('https://images.unsplash.com/photo-1503264116251-35a269479413?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=');
        background-size: cover;
        background-position: center;
        font-family: Inter, Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial;
      }

      .fw-card{
        width: 100%;
        max-width: 760px;
        background: rgba(255,255,255,0.92);
        border-radius: 14px;
        box-shadow: 0 10px 30px rgba(2,6,23,0.35);
        padding: 28px;
        display: flex;
        gap: 24px;
        align-items: stretch;
        backdrop-filter: blur(6px);
      }

      .fw-left{
        flex: 1.15;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      .fw-title{
        margin: 0 0 8px 0;
        font-size: 22px;
        color: #08102a;
        letter-spacing: -0.2px;
      }

      .fw-sub{
        margin: 0 0 18px 0;
        color: #3b4452;
        font-size: 14px;
      }

      form .field{
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin-bottom: 14px;
      }

      label{
        font-size: 13px;
        color: #213047;
      }

      input, select{
        height: 44px;
        padding: 10px 12px;
        border-radius: 8px;
        border: 1px solid #d6dbe6;
        font-size: 14px;
        outline: none;
        box-sizing: border-box;
      }

      input:focus, select:focus{
        border-color: #7b9cff;
        box-shadow: 0 6px 16px rgba(123,156,255,0.12);
      }

      .row{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 12px;
      }

      .btn{
        height: 44px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 0 16px;
        border-radius: 10px;
        border: none;
        cursor: pointer;
        font-weight: 600;
        font-size: 14px;
      }

      .btn-primary{
        background: linear-gradient(90deg,#3461f2,#6b8cff);
        color: white;
        box-shadow: 0 8px 24px rgba(52,97,242,0.18);
      }

      @media (max-width: 880px){
        .fw-card{flex-direction: column; padding:20px}
        .row{grid-template-columns: 1fr}
      }
    `;

    const styleTag = document.createElement("style");
    styleTag.setAttribute("data-fw-styles", "true");
    styleTag.innerText = css;
    document.head.appendChild(styleTag);

    return () => {
      const tag = document.querySelector("style[data-fw-styles]");
      if (tag) tag.remove();
    };
  }, []);
  
  const [input,setInput]=useState({})

  function submitForm(e){
    e.preventDefault()
    console.log("Submitted Form")
    console.log("Current State",input)
  }
  function handleChange(e){
    const name=e.target.name
    const value=e.target.value
    setInput((oldData)=>{
        return{...oldData,[name]:value}
    })
  }


  return (
    <div className="fw-container">
      <div className="fw-card">
        <div className="fw-left">
          <h2 className="fw-title">Join our community</h2>
          <p className="fw-sub">Quick sign-up — just fill in your details.</p>

          <form onSubmit={submitForm}>
            <div className="row">
              <div className="field">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" onChange={handleChange} placeholder="Your full name" />
              </div>

              <div className="field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" onChange={handleChange} placeholder="you@company.com" />
              </div>
            </div>

            <div className="row">
              <div className="field">
                <label htmlFor="phone">Phone</label>
                <input id="phone" name="phone" onChange={handleChange} placeholder="+91 98765 43210" />
              </div>

              <div className="field">
                <label htmlFor="country">Country</label>
                <select id="country" onChange={handleChange} name="country">
                  <option value="">Select country</option>
                  <option>India</option>
                  <option>United States</option>
                  <option>United Kingdom</option>
                  <option>Canada</option>
                  <option>Australia</option>
                  <option>Germany</option>
                </select>
              </div>
            </div>

            <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
              <button type="submit"  className="btn btn-primary">
                Create account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
