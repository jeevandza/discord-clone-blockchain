import styles from "../styles/RoomAvatar.module.css";
import Image from "next/image";
import { useRouter } from "next/router";


const RoomAvatar = ({ id, name, avatar }) => {
    const router = useRouter()
  const changeUrl = () => {
        router.push(`?channel =${id}& name=${name}`)
  };
  return (
    <div className={styles.wrapper} onClick={changeUrl}>
      <div className={styles.roomAvatar}>
        <Image
          src={avatar}
          className={styles.roomAvatarImage}
          height={48}
          width={48}
          alt={name}
        />
      </div>
    </div>
  );
};

export default RoomAvatar;
