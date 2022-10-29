import React from "react";
import Profile from "./Components/Profile/Profile";
// styling for the buttons section is "./Components/Buttons/Buttons.scss"
import "./Components/Buttons/Buttons.scss";
import Footer from "./Components/Links/Footer/Footer";
import slack from "../src/Assets/slack.png";
import github from "../src/Assets/github.png";
import share from "../src/Assets/share.png";
import shareMobile from "../src/Assets/shareMobile.png";

const App = () => {
  const buttonData = [
    // {
    //   id: 1,
    //   text: "Twitter Link",
    //   link: "https://twitter.com/",
    //   subtext: "Follow me on twitter",
    // },
    {
      id: "btn__zuri",
      text: "Zuri Team",
      link: "https://training.zuri.team/",
      subtext: "Join the zuri team",
    },
    {
      id: "books",
      text: "Zuri Books",
      link: "http://books.zuri.team",
      subtext: "Here you can find books to help your journey",
    },
    {
      id: "book__python",
      text: "Python Books",
      link: "https://books.zuri.team/python-for-beginners?ref_id=mo-re-ni-ke",
      subtext: "Buy a book to help you learn python",
    },
    {
      id: "pitch",
      text: "Background Check for Coders",
      link: "https://background.zuri.team",
      subtext: "Run a background check",
    },
    {
      id: "book__design",
      text: "Design Books",
      link: "https://books.zuri.team/design-rules",
      subtext: "Buy a book to help you learn design",
    },
  ];
  return (
    <div className="app">
      <Profile />
      <img title="Share Link" className="share" src={share} alt="share" />
      <img
        title="Share Link"
        className="share_mobile"
        src={shareMobile}
        alt="share"
      />
      <div className="buttons">
        {buttonData.map((button) => (
          <a
            className="buttons__btn"
            href={button.link}
            key={button.id}
            id={button.id}
          >
            {button.text}
            <sub className="buttons__subtext">{button.subtext}</sub>
          </a>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "2rem",
        }}
      >
        <img style={{ margin: "0 .4rem" }} src={slack} alt="slack" />
        <img style={{ margin: "0 .4rem" }} src={github} alt="github" />
      </div>
      <Footer />
    </div>
  );
};

export default App;
