import React from 'react'
import "./profile.css"
import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/esm/Row"

const Profile = () => {
  return (
    <>
      <div className='container'>
        <Card className="card-profile shadow col-lg-6 mx-auto mt-5">
          <Card.Body>
            <Row>
              <div className='col'>
                <div className='card-profile-stats d-flex justify-content-center'>
                  <img src="/logo512.png" alt="" />
                </div>
              </div>
            </Row>
            <div className='text-center'>
              <h3>Talha Suleman</h3>

              <h4><i class="fa-sharp fa-solid fa-envelope email"></i>&nbsp;:- <span>tmuhammad104@gmail.com</span></h4>
              <h4>
                <i class="fa-sharp fa-solid fa-mobile mobile"></i>&nbsp;:- <span>03456789034</span>
              </h4>
              <h4>
                <i class="fa-solid fa-person male"></i>&nbsp;:- <span>Male</span>
              </h4>
              <h4>
                <i class="fa-regular fa-toggle-on status"></i>&nbsp;:- <span>Active</span>
              </h4>
              <h4>
                <i class="fa-solid fa-location-dot location"></i>&nbsp;:- <span>Lahore</span>
              </h4>
              <h5>
                <i class="fa-solid fa-calendar-days calendar"></i>&nbsp;Date Created&nbsp;:- <span></span>
              </h5>
              <h5>
                <i class="fa-solid fa-calendar-days calendar"></i>&nbsp;Date Updated&nbsp;:- <span></span>
              </h5>
            </div>
          </Card.Body>
        </Card>

      </div>
    </>
  )
}

export default Profile