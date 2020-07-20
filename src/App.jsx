import React, {useMemo, useState} from 'react';
import {List} from "./List";
import {Form} from "./Form";
import {View} from "./View";

function App() {
  const [viewMetaInfo, setViewMetaInfo] = useState({view: "LIST"});
  const view = useMemo(() => {
    switch (viewMetaInfo.view) {
      case "POST": return <Form setViewMetaInfo={setViewMetaInfo} />;
      case "EDIT": return <Form setViewMetaInfo={setViewMetaInfo} id={viewMetaInfo.id} />;
      case "VIEW": return <View setViewMetaInfo={setViewMetaInfo} id={viewMetaInfo.id} />;
      case "LIST":
      default:
        return <List setViewMetaInfo={setViewMetaInfo} />;
    }
  }, [viewMetaInfo, setViewMetaInfo]);

  return (
    <div className="App">
      {view}
    </div>
  );
}

export default App;
