import { useState } from "react";
import "./index.css";
import { FriendsList } from "./FriendsList";
import { FormAddFriend } from "./FormAddFriend";
import { Button } from "./Button";
import { FormSplitBill } from "./FormSplitBill";
import { initialFriends } from "./initialFriends";

function App() {
  const [buttonText, setButtonText] = useState("Add Friend");
  const [friendsList, setFriendsList] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleButtonClick(e) {
    setButtonText(buttonText === "Add Friend" ? "Close" : "Add Friend");
  }

  function handleSelection(friend) {
    setSelectedFriend((selected) =>
      selected?.id === friend.id ? null : friend
    );
    if (buttonText === "Close" && selectedFriend === null) {
      setButtonText((buttonText) => "Add Friend");
    }
  }

  function handleSplitBill(value) {
    setFriendsList((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectedFriend(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friendsList}
          onSelection={handleSelection}
          selectedFriend={selectedFriend}
        />

        {buttonText === "Close" ? (
          <FormAddFriend
            setFriendsList={setFriendsList}
            friends={friendsList}
          />
        ) : null}

        <Button handleClick={handleButtonClick}>{buttonText}</Button>
      </div>
      {selectedFriend && (
        <FormSplitBill
          key={selectedFriend.id}
          selectedFriend={selectedFriend}
          handleSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
}

export default App;
