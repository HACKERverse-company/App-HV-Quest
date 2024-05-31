import React, { useEffect, useRef } from 'react';
import Guacamole from 'guacamole-common-js';

const GuacamoleClient = ({ tunnelUrl, username, password }) => {
  const displayRef = useRef(null);
  const guacClient = useRef(null);

  useEffect(() => {
    const tunnel = new Guacamole.WebSocketTunnel(tunnelUrl);
    guacClient.current = new Guacamole.Client(tunnel);

    const display = displayRef.current;
    const clientElement = guacClient.current.getDisplay().getElement();

    clientElement.style.width = '100%';
    clientElement.style.height = '100%';
    display.appendChild(clientElement);

    guacClient.current.onerror = (error) => {
      console.error('Guacamole Client Error:', error);
    };

    guacClient.current.onstatechange = (state) => {
      console.log('Guacamole Client State:', state);
      if (state === Guacamole.Client.State.DISCONNECTED) {
        console.log('Client disconnected.');
      }
    };

    guacClient.current.connect(`token=${username}:${password}`);

    window.addEventListener('resize', () => {
      guacClient.current.sendSize(display.offsetWidth, display.offsetHeight);
    });

    return () => {
      guacClient.current.disconnect();
      display.removeChild(clientElement);
    };
  }, [tunnelUrl, username, password]);

  return <div ref={displayRef} style={{ width: '100%', height: '100%' }}></div>;
};

export default GuacamoleClient;
