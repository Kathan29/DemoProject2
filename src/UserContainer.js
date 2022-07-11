import React, { useState } from "react";
import axios from "axios";
import { SearchBar } from "./SearchBar";
import { DisplayComponent } from "./DisplayComponent";

const configObj = {
  client_id: "Kathan29",
  client_secret: "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",
  repos_count: 5,
  repos_sort: "created: asc",
  token: ""
};

export const UserContainer = () => {
  //api calls
  const [userData, setUserData] = useState({});
  const fetchUserDetails = async (searchKey) => {
    // console.log(searchKey);
    const {
      data
    } = await axios.get(
      `https://api.github.com/users/${searchKey}?client_id=${configObj.client_id}&client_secret=${configObj.client_secret}`,
      { headers: { Authorization: configObj.token } }
    );
    setUserData(data);

    // call the api fetch, axios npm i axios
  };

  return (
    <div>
      <SearchBar fetchUserDetails={fetchUserDetails} />
      <DisplayComponent userData={userData} />
    </div>
  );
};
