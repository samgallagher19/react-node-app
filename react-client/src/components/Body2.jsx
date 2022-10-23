import React from "react";
import { BrowserRouter, Routes, Route, Outlet, Switch } from "react-router-dom";
import ListView from "./ListView";
import KanbanView from "./KanbanView";
import LoginCard from "./LoginCard";
import IssueView from "./IssueView";

function Body2(props) {

    return <div>
    <Routes>
        <Route path="/" element={<LoginCard />} />
        <Route path="/listView" element={<ListView onUpdatePosts={props.onUpdatePosts} posts={props.posts} />} />
        <Route path="/kanbanView" element={<KanbanView onUpdatePosts={props.onUpdatePosts} posts={props.posts} />} />
        <Route path="/issue/:id" element={<IssueView onUpdatePosts={props.onUpdatePosts} posts={props.posts} />} />
    </Routes>
  
  <Outlet />
  </div>
}

export default Body2;