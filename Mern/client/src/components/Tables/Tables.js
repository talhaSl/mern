import React from 'react'
import "./table.css"
import { useNavigate } from 'react-router-dom';
import Row from "react-bootstrap/Row"
import Card from "react-bootstrap/Card"
import Table from "react-bootstrap/Table"
import Dropdown from 'react-bootstrap/Dropdown';
import Badge from 'react-bootstrap/Badge';


const Tables = () => {
  const navigate = useNavigate();
  const viewN = () => {
    navigate("/userprofile/1")
  }
  const editN = () => {
    navigate("/edit/1")
  }
  return (
    <>
      <div className='container'>
        <Row>
          <div className='col mt-0'>
            <Card className='Shadow'>
              <Table className='align-align-items-center' responsive='sm'>
                <thead className='thead-dark'>
                  <tr className='table-dark'>
                    <th>ID</th>
                    <th>FullName</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>Status</th>
                    <th>Profile</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>123</td>
                    <td>Talha</td>
                    <td>talha@gmail.com</td>
                    <td>M</td>
                    <td className='d-flex align-items-center'>
                      <Dropdown className='text-center'>
                        <Dropdown.Toggle classname="dropdown_btn" id="dropdown-basic">
                          <Badge bg='primary'>
                            Active&nbsp;
                            <i class="fa-sharp fa-solid fa-circle-chevron-down"></i>
                          </Badge>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item >Active</Dropdown.Item>
                          <Dropdown.Item >InActive</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                    <td className='img_parent'>
                      <img src='/logo512.png' alt='' />
                    </td>
                    <td className='img_parent'>
                      <Dropdown className='text-center'>
                        <Dropdown.Toggle classname="action" variant='light' id="dropdown-basic">
                          <i class="fa-solid fa-ellipsis-vertical"></i>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item >
                            <i class="fa-solid fa-eye" style={{ color: 'green' }}></i>&nbsp;<span onClick={viewN}>View</span></Dropdown.Item>
                          <Dropdown.Item >
                            <i class="fa-solid fa-pen-to-square" style={{ color: "blue" }}></i>&nbsp;<span onClick={editN}>Edit</span></Dropdown.Item>
                          <Dropdown.Item >
                            <i class="fa-solid fa-trash" style={{ color: "maroon" }}></i>
                            &nbsp;<span>Delete</span></Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>

                  </tr>
                  <tr>
                    <td>123</td>
                    <td>Talha</td>
                    <td>talha@gmail.com</td>
                    <td>M</td>
                    <td className='d-flex align-items-center'>
                      <Dropdown className='text-center'>
                        <Dropdown.Toggle classname="dropdown_btn" id="dropdown-basic">
                          <Badge bg='primary'>
                            Active&nbsp;
                            <i class="fa-sharp fa-solid fa-circle-chevron-down"></i>
                          </Badge>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item >Active</Dropdown.Item>
                          <Dropdown.Item >InActive</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                    <td className='img_parent'>
                      <img src='/logo512.png' alt='' />
                    </td>
                    <td className='img_parent'>
                      <Dropdown className='text-center'>
                        <Dropdown.Toggle classname="action" variant='light' id="dropdown-basic">
                          <i class="fa-solid fa-ellipsis-vertical"></i>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item >
                            <i class="fa-solid fa-eye" style={{ color: 'green' }}></i>&nbsp;<span onClick={viewN}>View</span></Dropdown.Item>
                          <Dropdown.Item >
                            <i class="fa-solid fa-pen-to-square" style={{ color: "blue" }}></i>&nbsp;<span onClick={editN}>Edit</span></Dropdown.Item>
                          <Dropdown.Item >
                            <i class="fa-solid fa-trash" style={{ color: "maroon" }}></i>
                            &nbsp;<span >Delete</span></Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>

                  </tr>
                </tbody>
              </Table>
            </Card>

          </div>
        </Row >

      </div >

    </>
  )
}

export default Tables