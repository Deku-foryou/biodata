import { useEffect, useState } from "react";
import profileImage from "../../assets/image/eve.1.jpg";

export default function ProfileCard() {
  const text = "IT Enthusiast";
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let index = 0;
    const timer = window.setInterval(() => {
      index += 1;
      setTypedText(text.slice(0, index));
      if (index === text.length) window.clearInterval(timer);
    }, 120);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="profile-card">
      <img src={profileImage} alt="Profile" />
      <div className="chip">
        <i className="bi bi-code-slash" aria-hidden="true" />
        <span>{typedText}</span>
      </div>
      <h2>DEKU</h2>
    </div>
  );
}
