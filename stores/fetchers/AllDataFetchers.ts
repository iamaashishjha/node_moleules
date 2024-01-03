/* eslint-disable max-len */
/* eslint-disable camelcase */
import { RowDataPacket } from "mysql2";
import { LauncherStore } from "../../config/types";
export const StbFetcher = {
	query_name: "StbFetcher",
	query: `
    SELECT DISTINCT
    SUBSTR(SERIAL, 1, 10) AS serial_prefix,
    model AS model_id
FROM
    stbs
WHERE
    web_user = '0' AND
STATUS
    = 'active'
            `,
	callback: (rows: RowDataPacket[], store: LauncherStore) => {
		rows.forEach((row) => {
			store.box_model_prefix.set(
				row.serial_prefix.toUpperCase(),
				row.model_id
			);
		});
	},
};

export const HotspotConfigFetcher = {
	query_name: "HotspotConfigFetcher",
	query: `
            SELECT
                h.status,
                h.ssid,
                h.password,
                h.mode,
                s.serial
            FROM
                stb_hotspots h
            INNER JOIN stbs s ON
                h.stb_id = s.id
            `,
	callback: (rows: RowDataPacket[], store: LauncherStore) => {
		rows.forEach((row, index) => {
			console.log("Hotspot Config Fetcher => ", index)
			store.hotspots.set(index.toString(), {
				serial: row.serial,
				mode: row.mode,
				password: row.password,
				ssid: row.ssid,
				status: Number(row.status),
				authmode: "open",
			});
		});
	},
};
