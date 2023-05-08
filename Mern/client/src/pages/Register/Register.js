import React, { useEffect, useState } from 'react'
import "./register.css";
import Card from "react-bootstrap/Card"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from "react-bootstrap/Row"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from "../../components/Spiner/Spiner"
import Select from 'react-select';
const Register = () => {

  const [inputdata, setInputData] = useState({
    fname: "",
    lname: "",
    email: "",
    mobile: "",
    gender: "",
    location: ""
  })

  const [status, setStatus] = useState("Active");
  const [image, setImage] = useState("");
  const [preview, setPreview] = useState("");

  const [showSpin, setShowSpin] = useState(true);
  useEffect(() => {
    if (image) {
      setPreview(URL.createObjectURL(image))
    }
    setTimeout(() => {
      setShowSpin()
    }, 1200)
  }, [image])


  const submitUserData = (e) => {
    e.preventDefault();
    const { fname, lname, email, mobile, gender, location } = inputdata

    if (fname === "") {
      toast.error("First name is Required")
    } else if (lname === "") {
      toast.error("Last name is Required")
    } else if (email === "") {
      toast.error("Email is Required")
    } else if (!email.includes("@")) {
      toast.error("Enter valid Email")
    } else if (mobile === "") {
      toast.error("Mobile is Required")
    } else if (mobile.length > 11) {
      toast.error("Enter valid Mobile")
    } else if (gender === "") {
      toast.error("Gender is Required")
    }
    else if (status === "") {
      toast.error("Status is Required")
    }
    else if (image === "") {
      toast.error("Image is Required")
    } else if (location === "") {
      toast.error("Location is Required")
    } else {
      toast.success("Form Submitted")
    }
  }

  const options = [
    { value: 'Active', label: 'Active' },
    { value: 'InActive', label: 'InActive' },
  ];
  const setInputValue = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputdata, [name]: value })
  }

  const setStatusValue = (e) => {
    setStatus(e.value);
  }

  // Set Profile
  const setProfile = (e) => {
    setImage(e.target.files[0])
  }
  return (

    <>
      {
        showSpin ? <Spinner /> : <div className='container'>
          <h2 className='text-center mt-1'>Register your Details</h2>
          <Card className='shadow mt-3 p-3'>
            <div className='profile_div text-center' >
              <img src={preview ? preview : "/logo512.png"} alt="img" />
            </div>
            <Form>
              <Row>
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" onChange={setInputValue} placeholder="First name" name='fname' value={inputdata.fname} />
                </Form.Group>


                <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" onChange={setInputValue} placeholder="Last Name" name="lname" value={inputdata.lname} />
                </Form.Group>


                <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" onChange={setInputValue} placeholder="Enter email" name="email" value={inputdata.email} />
                </Form.Group>

                <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                  <Form.Label>Mobile</Form.Label>
                  <Form.Control type="text" onChange={setInputValue} placeholder="Enter Mobile" name='mobile' value={inputdata.mobile} />
                </Form.Group>

                <Form.Group className="mb-3 col-lg-6" >
                  <Form.Label>Select Your Gender</Form.Label>
                  <Form.Check
                    type={"radio"}
                    label={`Male`}
                    name="gender"
                    value={"Male"}
                    onChange={setInputValue}
                  />
                  <Form.Check
                    type={"radio"}
                    label={`Female`}
                    name="gender"
                    value={"Female"}
                    onChange={setInputValue}
                  />
                </Form.Group>

                <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                  <Form.Label>Select Your Status</Form.Label>

                  <Select options={options} onChange={setStatusValue} value={status}
                  />
                </Form.Group>

                <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                  <Form.Label>Select Your Profile</Form.Label>
                  <Form.Control type="file" name="user_profile" onChange={setProfile} />
                </Form.Group>

                <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                  <Form.Label>Enter Your Location</Form.Label>
                  <Form.Control type="text" name="location" onChange={setInputValue} placeholder="Enter Your Location" value={inputdata.location} />
                </Form.Group>

                <Button variant="primary" type="submit" onClick={submitUserData}>
                  Submit
                </Button>
              </Row>
            </Form>
          </Card>
          <ToastContainer position='top-center' />
        </div>
      }

    </>
  )
}
export default Register