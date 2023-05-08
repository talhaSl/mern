import React, { useEffect, useState } from 'react'
import "./home.css"
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Tables from "../../components/Tables/Tables"
import { useNavigate } from 'react-router-dom';
import Spiner from "../../components/Spiner/Spiner"
const Home = () => {

  const [showSpin, setShowSpin] = useState(true)
  const navigate = useNavigate();
  const adduser = () => {
    navigate("/register")
  }
  useEffect(() => {
    setTimeout(() => {
      setShowSpin(false)
    }, 1200)
  })
  return (
    <>
      <div className='container'>
        <div className='main_div'>
          <div className='search_add mt-4 d-flex justify-content-between'>
            <div className='search col-lg-4'>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="success" className='search_btn' >Search</Button>
              </Form>
            </div>
            <div className='add_btn'>
              <Button variant="primary" onClick={adduser}><i class="fa-solid fa-plus"></i>&nbsp;Add User</Button>
            </div>
          </div>

          {/* export,gender,status */}

          <div className='filter_div mt-5 d-flex justify-content-between flex-wrap'>
            <div className='export_csv'>
              <Button className="export_btn"  ><i class="fa-solid fa-plus"></i>&nbsp;Export To Csv</Button>
            </div>


            <div className='filter_gender'>
              <div className='filter'>
                <h3>
                  Filter By Gender
                </h3>
                <div className='gender d-flex justify-content-around'>
                  <Form.Check
                    type={"radio"}
                    label={`All`}
                    name="gender"
                    value={"All"}
                    defaultChecked
                  />
                  <Form.Check
                    type={"radio"}
                    label={`Male`}
                    name="gender"
                    value={"Male"}

                  />
                  <Form.Check
                    type={"radio"}
                    label={`Female`}
                    name="gender"
                    value={"Female"}

                  />
                </div>
              </div>
            </div>

            <div className='filter_newold'>
              <h3>Short By Value</h3>
              <Dropdown className='text-center'>
                <Dropdown.Toggle classname="dropdown_btn" id="dropdown-basic">
                  <i class="fa-solid fa-sort"></i>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item >new</Dropdown.Item>
                  <Dropdown.Item >old</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>

            {/* filter by status */}

            <div className='filter_status'>
              <div className='status'>
                <h3>Filter By Status</h3>
                <div className='status_radio d-flex justify-content-around flex-wrap' >
                  <Form.Check
                    type={"radio"}
                    label={`All`}
                    name="status"
                    value={"All"}
                    defaultChecked
                  />&nbsp;
                  <Form.Check
                    type={"radio"}
                    label={`Active`}
                    name="status"
                    value={"Active"}

                  />&nbsp;
                  <Form.Check
                    type={"radio"}
                    label={`InActive`}
                    name="status"
                    value={"InActive"}
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
        {
          showSpin ? <Spiner /> : <Tables />
          // showSpin ? <Tables /> : <Spiner />

        }
      </div>
    </>
  )
}

export default Home