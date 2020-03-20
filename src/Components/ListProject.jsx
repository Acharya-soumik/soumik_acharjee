import React from "react";
import { Card, Avatar } from "antd";
import { EyeOutlined, GithubOutlined } from "@ant-design/icons";
const { Meta } = Card;

let html = "https://cdn.svgporn.com/logos/html-5.svg";
let css = "https://cdn.svgporn.com/logos/css-3.svg";
let bootstrap = "https://cdn.svgporn.com/logos/bootstrap.svg";
let react = "https://cdn.svgporn.com/logos/react.svg";
let redux = "https://cdn.svgporn.com/logos/redux.svg";
let mysql = "https://cdn.svgporn.com/logos/mysql.svg";
let js = "https://cdn.svgporn.com/logos/javascript.svg";
let flask = "https://cdn.svgporn.com/logos/flask.svg";
let jquery = "https://cdn.svgporn.com/logos/jquery.svg";
let antd =
  "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg";

const cardData = [
  {
    img: "images/meeting.png",
    name: "Blog Application",
    description:
      "An app where user can create new/edit or delete a blog after logging in. Also user can view other users blogs and also leave a comment",
    teckstack: [react, redux, antd, bootstrap, flask, mysql],
    source: "",
    live: ""
  },
  {
    img: "",
    name: "Folder Management",
    description:
      "An app to replicate the folder view in our computers. Users can create new folders. Open a fodler and go back to previous folders. ",
    teckstack: [react, redux, flask, mysql],
    source: "",
    live: ""
  },
  {
    img: "",
    name: "Masai Meeting Rooms",
    description:
      "An app where user can create a meeting room, or book meeting rooms based on availability.",
    teckstack: [html, css, bootstrap, react, redux],
    source: "https://github.com/Acharya-soumik/bookmeetingrooms",
    live: "https://masaimeeting.netlify.com/"
  },
  {
    img: "images/comics.png",
    name: "Comics 101",
    description:
      "A comics page using the api xlcd to view multiple comics page.",
    teckstack: [html, css, bootstrap, react, redux],
    source: "https://github.com/Acharya-soumik/Comics",
    live: "http://comics101.netlify.com/"
  },
  {
    img: "images/game.png",
    name: "Gamers Paradise",
    description:
      "A webpage x`that contains most popular games ,that are trending, user can also buy the games.",
    teckstack: [html, css, js, jquery, bootstrap],
    source: "https://github.com/Acharya-soumik/projects/tree/master/sprint-3.1",
    live: "https://acharya-soumik.github.io/projects/sprint-3.1/"
  },
  {
    img: "images/instamojo.png",
    name: "Instamojo Clone",
    description:
      "A clone of the website Instamojo created using bootstrap and minimal css.",
    teckstack: [html, css, bootstrap],
    source: "https://github.com/Acharya-soumik/Instamojo-clone",
    live: "https://instamojo-clone.netlify.com"
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
            cover={<img alt="example" src={ele.img} />}
            actions={[
              <GithubOutlined
                key="github"
                onClick={() => window.open(ele.source)}
              />,
              <EyeOutlined key="demo" onClick={() => window.open(ele.source)} />
            ]}
          >
            <Meta title={ele.name} description={ele.description} />
            <Meta className="my-3" title="Teck stack used :" description="" />
            {ele.teckstack.map(img => (
              <img src={img} className="project-icon" />
            ))}
          </Card>
        );
      })}
    </div>
  );
}

export default ListProject;
