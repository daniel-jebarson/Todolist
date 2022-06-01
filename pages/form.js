import { Component } from "react";
import PlanCard from "../component/formComponents/planCard";
class Form extends Component {
  render() {
    return (
      <>
        <h1>Hello world</h1>
        <PlanCard
          //   image="../public/assets/formPage/education.png"
          description="Education"
        />
      </>
    );
  }
}

export default Form;
