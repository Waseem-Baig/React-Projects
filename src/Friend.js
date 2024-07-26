import { Button } from "./Button";

export function Friend({ friend, onSelection, selectedFriend }) {
  const isSelected = selectedFriend && friend.id === selectedFriend.id;

  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name}></img>
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} ${-friend.balance}
        </p>
      )}
      {friend.balance === 0 && (
        <p className="">You and {friend.name} are Even</p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you ${friend.balance}
        </p>
      )}
      <Button handleClick={() => onSelection(friend)}>
        {isSelected ? "close" : "Select"}
      </Button>
    </li>
  );
}
