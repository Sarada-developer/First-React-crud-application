import React from 'react';

const Contact = () =>
{
    return (
        <div className="container">
            <div className="py-4">
                <h1 className="text-center">Contact Page</h1>
                <div>
  <div className="mb-3">
    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
  </div>
  <div className="mb-3">
  <button type="submit" class="btn btn-primary mb-3">Submit</button>
 </div>
</div>
  </div>
        </div>
    )
}
export default Contact;