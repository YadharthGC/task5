import React from "react";
export default function Card(props) {
  return (
    <div className="col-lg-4">
      <div className="card mb-5 mb-lg-0">
        <div className="card-body">
          <h5 className="card-title text-muted text-uppercase text-center">
            {props.productdata.title}
          </h5>
          <h6 className="card-price text-center">
            {props.productdata.amt}
            <span className="period">{props.productdata.dtype}</span>
          </h6>
          <hr />
          <ul className="fa-ul">
            {props.productdata.functions.map((plan) => {
              return (
                <li className={plan.status ? "" : "text-muted"}>
                  <span className="fa-li">
                    <i
                      className={plan.status ? "fas fa-check" : "fas fa-times"}
                    ></i>
                  </span>
                  {plan.bold ? (
                    <strong>{plan.same}</strong>
                  ) : (
                    <span>{plan.same}</span>
                  )}
                </li>
              );
            })}
          </ul>
          <div className="d-grid">
            <a href="#" className="btn btn-primary text-uppercase">
              Button
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
