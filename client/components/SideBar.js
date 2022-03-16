import styles from "../styles/SideBar.module.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import RoomAvatar from "./RoomAvatar";

import avatar1 from "../assets/avatar-1.webp";
import avatar2 from "../assets/avatar-2.png";
import avatar3 from "../assets/avatar-3.webp";
import avatar4 from "../assets/avatar-4.webp";

const dummyChannels = [
  {
    roomId: 1,
    roomName: "Spiderman",
    avatar: avatar1,
  },
  {
    roomId: 2,
    roomName: "Superman",
    avatar: avatar2,
  },
  {
    roomId: 3,
    roomName: "Batman",
    avatar: avatar3,
  },
  {
    roomId: 4,
    roomName: "Catman",
    avatar: avatar4,
  },
  {
    roomId: 5,
    roomName: "Bulldog",
    avatar: avatar3,
  },
];

const SideBar = () => {
  const [channels, setChannels] = useState(dummyChannels);
  const router = useRouter();

  return (
    <div className={styles.wrapper}>
      {channels.map((channel, index) => {
        return (
          <RoomAvatar
            key={index}
            id={channel.roomId}
            name={channel.roomName}
            avatar={channel.avatar}
          />
        );
      })}
    </div>
  );
};

export default SideBar;
