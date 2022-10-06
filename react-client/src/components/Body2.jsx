import React from "react";
import { BrowserRouter, Routes, Route, Outlet, Switch } from "react-router-dom";
import ListView from "./ListView";
import KanbanView from "./KanbanView";

function Body2(props) {

    return <div><BrowserRouter>
    <Routes>
      {/*<Route path="/" element={<KanbanView onUpdatePosts={props.onUpdatePosts} posts={props.posts} />} />*/}
        <Route path="/listView" element={<ListView onUpdatePosts={props.onUpdatePosts} posts={props.posts} />} />
        <Route path="/kanbanView" element={<KanbanView onUpdatePosts={props.onUpdatePosts} posts={props.posts} />} />
    </Routes>
  </BrowserRouter>
  <Outlet />
  </div>
}

export default Body2;