import React from "react";
import $ from "jquery";

const Dashboard = (props) => {
  const changeHandler = () => {
    // console.log("onchange");
    // $("p").attr("contentEditable", "true");
    // console.log("success");
  };

  return (
    <div class="dashboard">
      {props.school !== null &&
        props.school.map((data) => {
          return (
            <div class="container-fluid">
              <div class="float" onClick={changeHandler}>
                <i class="fas fa-edit"></i>&nbsp;Edit
              </div>
              <h3 class="title">Initial</h3>
              <div class="row ">
                <div class="left">School Name</div>
                <div class="middle">:</div>
                <div class="last">
                  <input type="text" value={data.name} name="name" />
                </div>
              </div>
              <div class="row ">
                <div class="left">Introduction</div>
                <div class="middle">:</div>
                <div class="last">
                  <textarea>{data.intro}</textarea>
                </div>
              </div>
              <h3 class="title">About</h3>
              <div class="row ">
                <div class="left">About</div>
                <div class="middle">:</div>
                <div class="last">
                  <textarea>{data.about}</textarea>
                </div>
              </div>
              <div class="row ">
                <div class="left">Short Video</div>
                <div class="middle">:</div>
                <div class="last">
                  <input type="text" value={data.video} name="video" />
                </div>
              </div>
              <h3 class="title">Testimonals</h3>
              <div class="row ">
                <div class="left">Feedback 1</div>
                <div class="middle">:</div>
                <div class="last">
                  <textarea>{data.test1}</textarea>
                </div>
              </div>
              <div class="row ">
                <div class="left">Feedback 2</div>
                <div class="middle">:</div>
                <div class="last">
                  <textarea>{data.test2}</textarea>
                </div>
              </div>
              <div class="row ">
                <div class="left">Feedback 3</div>
                <div class="middle">:</div>
                <div class="last">
                  <textarea>{data.test3}</textarea>
                </div>
              </div>
              <h3 class="title">Contact US</h3>
              <div class="row ">
                <div class="left">Address</div>
                <div class="middle">:</div>
                <div class="last">
                  <input type="text" value={data.address} name="address" />
                </div>
              </div>
              <div class="row ">
                <div class="left">Email</div>
                <div class="middle">:</div>
                <div class="last">
                  <input type="text" value={data.email} name="email" />
                </div>
              </div>
              <div class="row ">
                <div class="left">Moblie Number</div>
                <div class="middle">:</div>
                <div class="last">
                  <input type="text" value={data.mobile} name="mobile" />
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Dashboard;
