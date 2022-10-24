import React from "react";
import { BrowserRouter, Routes, Route, Outlet, Switch } from "react-router-dom";
import ListView from "./ListView";
import KanbanView from "./KanbanView";
import LoginCard from "./LoginCard";
import WelcomeCard from "./WelcomeCard";
import IssueView from "./IssueView";
import { useAuth0 } from '@auth0/auth0-react';

function Body2(props) {

  const { isAuthenticated } = useAuth0();

    return <div>
    <Routes>
        <Route path="/" element={isAuthenticated ? <WelcomeCard /> : <LoginCard />} />
        <Route path="/listView" element={<ListView onUpdatePosts={props.onUpdatePosts} posts={props.posts} />} />
        <Route path="/kanbanView" element={<KanbanView onUpdatePosts={props.onUpdatePosts} posts={props.posts} />} />
        <Route path="/issue/:id" element={<IssueView onUpdatePosts={props.onUpdatePosts} posts={props.posts} />} />
    </Routes>
  
  <Outlet />
  </div>
}

export default Body2;