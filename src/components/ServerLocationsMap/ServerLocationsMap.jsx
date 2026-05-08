import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { usePing } from '../../hooks/usePing';
import style from './ServerLocationsMap.module.css';

// Fix for default leaflet icons in React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const serverLocations = [
    { id: 'sp', name: 'São Paulo', country: 'Brazil', coordinates: [-23.55, -46.63], region: 'sa-east-1' },
    { id: 'ny', name: 'New York', country: 'EUA', coordinates: [40.71, -74.00], region: 'us-east-1' },
    { id: 'ma', name: 'Madrid', country: 'Espanha', coordinates: [40.41, -3.70], region: 'eu-south-2' },
    { id: 'fr', name: 'Frankfurt', country: 'Alemanha', coordinates: [50.11, 8.68], region: 'eu-central-1' },
    { id: 'to', name: 'Toronto', country: 'Canada', coordinates: [43.65, -79.38], region: 'ca-central-1' },
];

function PingTooltip({ server }) {
    const { ping, loading } = usePing(server.region);

    return (
        <div className={style.tooltip}>
            <div className={style.tooltipHeader}>
                <span className={style.serverName}>{server.name}</span>
                <span className={style.serverCountry}>{server.country}</span>
            </div>
            <div className={style.pingContainer}>
                <span className={style.pingLabel}>Ping Estimado:</span>
                <span className={`${style.pingValue} ${loading ? style.pulsing : ''}`}>
                    {loading ? '--- ms' : `${ping} ms`}
                </span>
                {!loading && ping !== 'N/A' && (
                    <span className={style.pingDot} style={{
                        backgroundColor: ping < 50 ? '#00ff88' : ping < 150 ? '#ffcc00' : '#ff4444'
                    }}></span>
                )}
            </div>
        </div>
    );
}

export default function ServerLocationsMap() {
    const [hoverD, setHoverD] = useState(null);

    // Create a custom icon for the markers
    const customIcon = new L.DivIcon({
        className: style.customLeafletIcon,
        html: `<div class="${style.markerPoint}"></div><div class="${style.markerPulse}"></div>`,
        iconSize: [20, 20],
        iconAnchor: [10, 10],
    });

    // Duplicando os pontos horizontalmente para criar a ilusão perfeita de "mundo redondo" infinito
    // ao rodar o mapa lateralmente (Leaflet não clona marcadores nativamente).
    const infiniteServers = [];
    serverLocations.forEach(server => {
        // Ponto original
        infiniteServers.push({ ...server, instanceKey: `${server.id}-center` });
        // Cópia à direita (+360 graus)
        infiniteServers.push({ ...server, coordinates: [server.coordinates[0], server.coordinates[1] + 360], instanceKey: `${server.id}-right` });
        // Cópia à esquerda (-360 graus)
        infiniteServers.push({ ...server, coordinates: [server.coordinates[0], server.coordinates[1] - 360], instanceKey: `${server.id}-left` });
    });

    return (
        <div className={style.mapWrapper}>
            <h2 className={style.title}>Nossa Infraestrutura Global</h2>
            <p className={style.subtitle}>Passe o mouse sobre os pontos luminosos para ver o status dos servidores em tempo real.</p>

            <div className={style.mapContainer}>
                {hoverD && (
                    <div className={style.tooltipWrapper}>
                        <PingTooltip server={hoverD} />
                    </div>
                )}

                <MapContainer
                    center={[25, 0]}
                    zoom={2}
                    minZoom={2}
                    maxZoom={5}
                    scrollWheelZoom={false}
                    maxBounds={[[-85, -Infinity], [85, Infinity]]}
                    maxBoundsViscosity={1.0}
                    worldCopyJump={true}
                    className={style.leafletMap}
                    attributionControl={false}
                >
                    <TileLayer
                        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                        subdomains="abcd"
                    />

                    {infiniteServers.map((server) => (
                        <Marker
                            key={server.instanceKey}
                            position={server.coordinates}
                            icon={customIcon}
                            eventHandlers={{
                                mouseover: () => setHoverD(server),
                                mouseout: () => setHoverD(null),
                            }}
                        />
                    ))}
                </MapContainer>
            </div>
        </div>
    );
}
