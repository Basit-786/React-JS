import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchFromApi } from "../utils/fetchDataFromApi";

import { Videos, ChannelCard } from "./";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setvideos] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetchFromApi(`channels?part=snppet&id=${id}`).then((data) => {
      setChannelDetail(data?.items[0]);
    });
    fetchFromApi(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => {
        setvideos(data?.items);
      }
    );
  }, [id]);
  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              " linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,64,121,1) 43%, rgba(0,212,255,1) 100%)",
            zIndex: 10,
            height: "300px",
          }}
        ></div>
        <ChannelCard channelDetail={channelDetail} marginTop="-100px" />
        <Box display="flex" p="2">
          <Box sx={{ mr: { sm: "100px" } }}/>
            <Videos videos={videos}/>
        </Box>
      </Box>
    </Box>
  );
};

export default ChannelDetail;
