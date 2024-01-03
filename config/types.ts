/* eslint-disable max-len */
/* eslint-disable camelcase */
import mysql from "mysql2/promise";

export type FetchPromise = Promise<[mysql.RowDataPacket[] | mysql.RowDataPacket[][] | mysql.OkPacket | mysql.OkPacket[] | mysql.ResultSetHeader, mysql.FieldPacket[]]>;
export type FetchResult = mysql.RowDataPacket[];
// export type FetchResult = Extract<mysql.RowDataPacket[], mysql.RowDataPacket[][]>;

export type store_key = ""|"app_releases_simple"|"app_releases_data"|"box_model_prefix" | "launcher_app_map" | "reseller_launcher_map" | "release_access_keys" | "phase_rollout_stats" | "subscriber_launchers" | "hotspots";

/* eslint-disable camelcase */
// { serial_prefix: '123456', model_id: 13 },


export interface LauncherStore {
    box_model_prefix: Map<string, {
        serial_prefix: string;
        model_id: number;
    }>,
    hotspots: Map<string, HotspotConfig>;

}

export interface Stb {
    serial_prefix: string;
    model_id: number;
}

export interface HotspotConfig {
    serial: string,
    status: number;
    ssid: string;
    password: string;
    mode: string;
    authmode: string;
}