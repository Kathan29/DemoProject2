import React, { useState } from "react";
import axios from "axios";
import { SearchBar } from "./SearchBar";
import { DisplayComponent } from "./DisplayComponent";

const configObj = {
  client_id: "595a806f91fd038dbd31",
  client_secret: "b52cf47d6f12efd0fec1f5561790cdca62851254",
  repos_count: 5,
  repos_sort: "created: asc",
  token: "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"
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
