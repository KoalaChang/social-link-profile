import Button from "./Button";
import links from "../links";

export default function App() {
  return (
    <div className="card-container">
    <div className="card">
      <img src="/profile-pic.jpg" alt="my picture" />

      <div className="title">
        <h1>Josh Chang</h1>
        <h2>Taipei, Taiwan</h2>
      </div>
      <p>"Ready to be a front-end developer."</p>
      <div className="button-div">
        {links.map((button, index) => (
          <Button
            key={index}
            id={button.id}
            name={button.platform}
            link={button.link}
          />
        ))}
      </div>
    </div>
    </div>
  );
}