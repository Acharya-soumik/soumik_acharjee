import React from "react";
import { data } from "./ProjectData";
import { Card, Avatar } from "antd";
import { EyeOutlined, GithubOutlined } from "@ant-design/icons";
const { Meta } = Card;

const cardData = [
  {
    img: "",
    name: "soumik",
    description: "vjhvjhvhjvkhvk",
    texkstack: [""],
    source: "",
    live: ""
  },
  {
    img: "",
    name: "",
    description: "",
    texkstack: [""],
    source: "",
    live: ""
  },
  {
    img: "",
    name: "",
    description: "",
    texkstack: [""],
    source: "",
    live: ""
  },
  {
    img: "",
    name: "",
    description: "",
    texkstack: [""],
    source: "",
    live: ""
  }
];

function ListProject() {
  return (
    <div className="d-flex flex-wrap justify-content-center col-md-10 col-md-12">
      {cardData.map(ele => {
        return (
          <Card
            className="my-3 mx-3"
            style={{ width: 350, marginBottom: 10 }}
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
            actions={[
              <GithubOutlined
                key="github"
                onClick={() => window.open("http://www.google.com")}
              />,
              <EyeOutlined
                key="demo"
                onClick={() => window.open("http://www.google.com")}
              />
            ]}
          >
            <Meta
              // avatar={
              //   <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              // }
              title={ele.name}
              description={ele.description}
            />
            <Meta
              // avatar={
              //   <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              // }
              title="teck stack used"
              description={ele.description}
            />
          </Card>
        );
      })}
    </div>
  );
}

export default ListProject;
