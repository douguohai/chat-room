import {LiveKitRoom, VideoConference} from '@livekit/components-react';
import "@livekit/components-styles";
import {useMount} from 'ahooks';
import {useState} from "react";
import axios from "axios";


const wsURL = "ws://127.0.0.1:7880"
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTEyMjA5ODAsImlzcyI6ImRldmtleSIsIm5iZiI6MTY5MTIxNzM4MCwic3ViIjoiMjEiLCJ2aWRlbyI6eyJyb29tIjoiMSIsInJvb21Kb2luIjp0cnVlfX0.P2zEMBVDBgKKQ6BHcuXXGsPcIjs2sORTNRm5WlwVIwQ"

const BaseUrl = "http://127.0.0.1:8080"

function getToken(userId, roomId) {
    // 向给定ID的用户发起请求
    axios.get(BaseUrl + "/getToken/" + roomId + "/" + userId)
        .then(function (response) {
            // 处理成功情况
            console.log(response);
        })
        .catch(function (error) {
            // 处理错误情况
            console.log(error);
        })
        .then(function () {
            // 总是会执行
        });
}


function App() {

    const [token2, setToken] = useState("");
    const [roomId, setRoomId] = useState("");

    useMount(() => {
        console.log("mount", new Date())
        getToken(1, 2)
    });


    return (
        <LiveKitRoom token={token} serverUrl={wsURL} connect={true}>
            <VideoConference/>
        </LiveKitRoom>
    );
}

export default App;
