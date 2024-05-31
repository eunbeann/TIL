# WebRTC

### Web Real-Time Communication

- 웹 애플리케이션과 웹 사이트가 브라우저 간에 오디오, 비디오, 데이터 스트림을 직접 전송할 수 있게 하는 기술
- 실시간 통신이 가능하며 중간 서버를 거치지 않아 지연시간이 줄어 든다.

### 주요 구성요소

`getUserMedia`

- 사용자의 카메라와 마이크에 접근해 오디오 비디오 스트림 가져오는 API
- navigtor.mediaDevices.getUserMedia를 통해 접근할 수 있음.

```jsx
navigator.mediaDevices.getUserMedia({ video: true, audio: true })
	.then(stream => {
		// 스트림 사용
	})
	.catch(error => {
	// 오류 처리
	});
```

`RTCPeerConnection`

- 두 피어 간의 연결을 설정하고 유지하는 데 사용되는 주요 인터페이스
- ICE (Interactive Connectivity Establishment)를 사용해 네트워크를 통해 피어를 찾고 연결함

```jsx
const peerConnection = new RTCPeerConnection(configuration);

```

`RTCDataChannel`

- 브라우저 간에 낮은 지연 시간으로 데이터를 전송할 수 있게하는 API
- 텍스트, 파일 등 다양한 형태의 데이터 전송시 사용 됨

```jsx
const dataChannel = peerConnection.createDataChannel("myDataChannel");
dataChannel.onmessage = event => {
  console.log("Message received: " + event.data);
};
```

### 사용 예제

```jsx
// 사용자 미디어 스트림 가져오기
navigator.mediaDevices.getUserMedia({ video: true, audio: true })
  .then(stream => {
    document.getElementById('localVideo').srcObject = stream;

    const peerConnection = new RTCPeerConnection();

    // 로컬 스트림을 피어 연결에 추가
    stream.getTracks().forEach(track => peerConnection.addTrack(track, stream));

    // 원격 스트림 설정
    peerConnection.ontrack = event => {
      document.getElementById('remoteVideo').srcObject = event.streams[0];
    };

    // 시그널링 데이터 송수신 (WebSocket 또는 다른 시그널링 방법 사용)
    // 예: WebSocket을 사용하여 offer/answer 및 ICE 후보 송수신

  })
  .catch(error => {
    console.error('Error accessing media devices.', error);
  });

```