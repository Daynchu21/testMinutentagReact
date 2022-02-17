
import { Message } from "./components/Message";
import { FocusableInput } from "./components/FocusableInput";
import { ImageGallery } from "./components/ImageGallery";
import { PlayerStatus } from "./components/PlayerStatus";
import { TeamsList } from "./components/TeamsList";
import Rating from "./components/Rating"
import Grocery from "./components/Grocery"
import ListItemsForNavigation from "./components/ListItemsForNavigation"

import './App.css';

export default function App() {
var products= [{ name: "Oranges", votes: 0 }, { name: "Bananas", votes: 0 }]

  return (
    <div className="App">
      {/* Render here each component from the "components" directory */}
      <h3>'Message' test</h3>
      <Message />
      <br />
      <h3>'FocusableInput' test</h3>
      <FocusableInput />
      <br />
      <h3>'ImageGallery' test</h3>
      <ImageGallery />
      <br />
      <h3>'PlayerStatus' test</h3>
      <PlayerStatus />
      <br />
      <h3>'TeamsList' test</h3>
      <TeamsList />
      <br />
      <h3>'Rating' test</h3>
      <Rating />
      <br />
      <h3>'Grocery' test</h3>
      <Grocery products={products} />
      <br />
      <h3>'ListItemsForNavigation' test</h3>
      <ListItemsForNavigation />
    </div>
  );
}
