import {LiveKitRoom, VideoConference} from '@livekit/components-react';
import "@livekit/components-styles";
import {useMount} from 'ahooks';
import {useState} from "react";
import axios from "axios";
import * as React from "react";


const wsURL = "wss://10.168.1.145:9443"

const BaseUrl = "https://10.168.1.145:7443/api"


function App() {

    const [token, setToken] = React.useState("");
    const [roomId, setRoom] = React.useState("");

    useMount(() => {
        let roomId = "room2";
        let userId = Math.floor(Math.random() * 1000)

        // 向给定ID的用户发起请求
        axios.get(BaseUrl + "/getToken/" + roomId + "/" + userId)
            .then(function (response) {
                // 处理成功情况
                console.log(response);
                if (response.data.errCode === 200) {
                    setToken(response.data.Message)
                }else{
                    console.log("error")
                }

            })
            .catch(function (error) {
                // 处理错误情况
                console.log(error);
            })
            .then(function () {
                // 总是会执行
            });
    });


    return (
        <LiveKitRoom token={token} serverUrl={wsURL} connect={true}>
            <VideoConference/>
        </LiveKitRoom>
    );
}

export default App;
