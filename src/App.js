import "./App.css";
import Card from "./card";

function App() {
  let datas = [
    {
      title: "FREE",
      amt: "$0",
      dtype: "/month",
      functions: [
        {
          same: "Single User",
          status: true,
        },
        {
          same: "5GB Storage",
          status: true,
        },
        {
          same: "Unlimited Public Projects",
          status: true,
        },
        {
          same: "Community Access",
          status: true,
        },
        {
          same: "Unlimited Private Projects",
          status: false,
        },
        {
          same: "Dedicated Phone Support",
          status: false,
        },
        {
          same: "Free Subdomain",
          status: false,
        },
        {
          same: "Monthly Status Reports",
          status: false,
        },
      ],
    },
    {
      title: "PLUS",
      amt: "$9",
      dtype: "/month",
      functions: [
        {
          same: "5 Users",
          status: true,
          bold: true,
        },
        {
          same: "50GB Storage",
          status: true,
        },
        {
          same: "Unlimited Public Projects",
          status: true,
        },
        {
          same: "Community Access",
          status: true,
        },
        {
          same: "Unlimited Private Projects",
          status: true,
        },
        {
          same: "Dedicated Phone Support",
          status: true,
        },
        {
          same: "Free Subdomain",
          status: true,
        },
        {
          same: "Monthly Status Reports",
          status: false,
        },
      ],
    },
    {
      title: "PRO",
      amt: "$49",
      dtype: "/month",
      functions: [
        {
          same: "Unlimited Users",
          status: true,
          bold: true,
        },
        {
          same: "150GB Storage",
          status: true,
        },
        {
          same: "Unlimited Public Projects",
          status: true,
        },
        {
          same: "Community Access",
          status: true,
        },
        {
          same: "Unlimited Private Projects",
          status: true,
        },
        {
          same: "Dedicated Phone Support",
          status: true,
        },
        {
          same: " Unlimited Free Subdomain",
          status: true,
          bold: true,
        },
        {
          same: "Monthly Status Reports",
          status: true,
        },
      ],
    },
  ];
  return (
    <section class="pricing py-5">
      <div className="container">
        <div className="row">
          {datas.map((data) => {
            return <Card productdata={data}></Card>;
          })}
        </div>
      </div>
    </section>
  );
}

export default App;
