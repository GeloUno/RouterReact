import React from "react";
import Rainbow from "../HigherOtherComponent/Rainbow";
import "../Component/Home.css";

const Home = () => {
  return (
    <div>
      <div className="containner">
        <div className="center">
          <h1 className="flow-text title">Szukasz Frontend Dvelopera</h1>
          <div className="">
            
            <div className="row">
              <div className="center">
                <div className="card ">
                <div className="card">
                  <div className="col s6 m3 l3 offset-l1 offset-m1 offset-s3 ">
                    <div className="card-image">
                      <img
                        src={require("../assets/Angular_full_color_logo.svg.png")}
                        className="responsive-img"
                        alt="Angular"
                      />
                    </div>
                  </div>
                  <div className="col s12 m7 l6 offset-l1 ">
                    <div className="card-title">
                      <h3 className="indigo-text indigo-darken-4">Angular</h3>
                    </div>
                    <div className="card-content">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Vel eum illo quibusdam libero debitis sit officiis optio
                      dolorum, vero dignissimos autem eveniet delectus quia quo
                      facilis architecto ea perferendis totam! Lorem ipsum dolor
                      sit amet consectetur adipisicing elit. Nobis quibusdam
                      deserunt sit! Vel saepe vero cupiditate itaque ipsum.
                      Dolor, nisi libero? Similique alias fugit quam ea
                      inventore explicabo, error adipisci.
                    </div>
                  </div>
                  </div>
                </div>
              </div>

              
            </div>
            <div className="row">
            <div className="center">
              <div className="card ">
              <div className="card-center">
                <div className="col s6 m3 l3 push-l7 offset-m1 offset-s3 ">
                  <div className="card-image ">
                    <img
                      src={require("../assets/640px-React-icon.svg.png")}
                      className="responsive-img"
                      alt="Angular"
                    />
                  </div>
                </div>
                <div className="col s12 m7 l6 pull-l2 ">
                  <div className="card-title">
                    <h3 className="indigo-text indigo-darken-4">React</h3>
                  </div>
                  <div className="card-content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vel eum illo quibusdam libero debitis sit officiis optio
                    dolorum, vero dignissimos autem eveniet delectus quia quo
                    facilis architecto ea perferendis totam! Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Nobis quibusdam
                    deserunt sit! Vel saepe vero cupiditate itaque ipsum.
                    Dolor, nisi libero? Similique alias fugit quam ea
                    inventore explicabo, error adipisci.
                  </div>
                </div>
                </div>
              </div>
            </div>

            
          </div>

          </div>
        </div>
      </div>
      <section className='se1'></section>
     
    </div>
  );
};
export default Rainbow(Home);
