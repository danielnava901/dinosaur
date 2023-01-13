import React from 'react';

const ChatPage = ({chatData}) => {
    const bc = new BroadcastChannel("close_session_channel");

    bc.onmessage = (event) => {
        console.log(event);
        if(event.data === "close_session") {
            console.log("cerrando window");
            window.close();
        }else if(event.data === "otro_mensaje"){
            console.log("OTRO MENSAJE");
        }
    };

    return <div className="w-full">
        <div className="w-full p-8 flex justify-between">
            <div className="w-full flex">
                <span className="mr-2">{chatData.theOtherId}</span>
                <span className="underline text-blue-600 cursor-pointer"
                    onClick={() => {
                        window.open(window.location.href, "_blank",
                            "width=900,height:600")
                    }}
                >
                    abrir en ventana
                </span>
                <span className="underline text-blue-600 cursor-pointer"
                      onClick={() => {
                          bc.postMessage("otro_mensaje");
                      }}
                >
                    otro mensaje
                </span>
            </div>
            <span onClick={() => {
                bc.postMessage("close_session");
            }}>Cerrar</span>
        </div>
        <div className="w-full p-8">
            Conversación {chatData.theDate} - {chatData.theOtherId}
        </div>
    </div>
};

export default ChatPage;