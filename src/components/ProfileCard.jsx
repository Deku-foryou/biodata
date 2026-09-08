import { useEffect, useRef } from "react";
import profileImage from "../../assets/image/eve.1.webp";

export default function ProfileCard() {
  const text = "IT Enthusiast";
  const typedTextRef = useRef(null);

  useEffect(() => {
    let index = 0;
    const timer = window.setInterval(() => {
      index += 1;
      if (typedTextRef.current) typedTextRef.current.textContent = text.slice(0, index);
      if (index === text.length) window.clearInterval(timer);
    }, 120);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="profile-card">
      <img src={profileImage} alt="Profile" width="150" height="150" fetchPriority="high" />
      <div className="chip">
        <i className="bi bi-code-slash" aria-hidden="true" />
        <span ref={typedTextRef} />
      </div>
      <h2>DEKU</h2>
    </div>
  );
}
