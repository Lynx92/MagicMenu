import { useCallback, useState } from "react";
import styles from "./styles.module.scss";

const buttons = [
  {
    icon: "home-outline",
    text: "Home"
  },
  {
    icon: "person-outline",
    text: "Profile"
  },
  {
    icon: "chatbubble-outline",
    text: "Message"
  },
  {
    icon: "camera-outline",
    text: "Photos"
  },
  {
    icon: "settings-outline",
    text: "Settings"
  }
];

const Button = ({ icon, text, isSelected, onClick }) => (
  <li className={isSelected() && styles.selected} onClick={onClick}>
    <span className={styles.icon}>
      <ion-icon name={icon} />
    </span>
    <span className={styles.text}>{text}</span>
  </li>
);

export default function App() {
  const [selected, setSelected] = useState("Home");
  const isSelected = useCallback(({ text }) => selected === text, [selected]);
  const onClick = useCallback(({ text }) => setSelected(text), []);

  return (
    <div className={styles.navigation}>
      <ul>
        {buttons.map((button, idx) => (
          <Button
            key={idx}
            isSelected={() => +isSelected(button)}
            {...button}
            onClick={() => onClick(button)}
          />
        ))}
      </ul>
    </div>
  );
}
