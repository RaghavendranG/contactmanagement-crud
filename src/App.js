import { Route, Switch } from "react-router-dom";
import "./App.css";
import Dashboard from "./Components/Dashboard";
import ErrorPage from "./Components/ErrorPage";
import { useState } from "react";
import { contactData as contact } from "./Data/ContactData";
import ContactList from "./Components/ContactList";
import AddContact from "./Components/AddContact";
import EditContact from "./Components/EditContact";
import ViewContact from "./Components/ViewContact";

function App() {
  const [contactData, setContactData] = useState(contact);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>

        <Route path="/contact-list">
          <ContactList
            contactData={contactData}
            setContactData={setContactData}
          />
        </Route>

        <Route path="/add-contact">
          <AddContact
            contactData={contactData}
            setContactData={setContactData}
          />
        </Route>

        <Route path="/edit-contact/:id">
          <EditContact
            contactData={contactData}
            setContactData={setContactData}
          />
        </Route>

        <Route path="/view-contact/:id">
          <ViewContact
            contactData={contactData}
          />
        </Route>

        <Route path="**">
          <ErrorPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
