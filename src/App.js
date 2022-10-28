import React from "react";
import Profile from "./Components/Profile/Profile";
// styling for the buttons section is "./Components/Buttons/Buttons.scss"
import "./Components/Buttons/Buttons.scss";
import Footer from "./Components/Links/Footer/Footer";

const App = () => {
  const buttonData = [
    {
      id: 1,
      text: "Twitter Link",
      link: "https://twitter.com/",
    },
    {
      id: "btn__zuri",
      text: "Zuri Team",
      link: "https://training.zuri.team/",
    },
    {
      id: "books",
      text: "Zuri Books",
      link: "http://books.zuri.team",
    },
    {
      id: "book__python",
      text: "Python Books",
      link: "https://books.zuri.team/python-for-beginners?ref_id=mo-renike",
    },
    {
      id: "pitch",
      text: "Background Check for Coders",
      link: "https://background.zuri.team",
    },
    {
      id: "book__design",
      text: "Design Books",
      link: "https://books.zuri.team/design-rules",
    },
  ];
  return (
    <div className="app">
      <Profile />
      <div className="buttons">
        {buttonData.map((button) => (
          <a
            className="buttons__btn"
            href={button.link}
            key={button.id}
            id={button.id}
          >
            {button.text}
          </a>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default App;
