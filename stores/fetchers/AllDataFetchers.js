/* eslint-disable camelcase */
// import { RowDataPacket } from "mysql2";
// import { LauncherStore } from "../types";
// import store from "../../MainStore";

const CategoriesFetcher = {
    query_name: "CategoriesFetcher",
    query: `SELECT * FROM categories;`,
    callback: (rows, store) => {
        store.categories = rows;
    },
};

const CountriesFetcher = {
    query_name: "CountriesFetcher",
    query: `SELECT name as country_name, code as country_code FROM countries;`,
    callback: (rows, store) => {
        store.countries = rows;
    },
};

const RegionsFetcher = {
    query_name: "RegionsFetcher",
    query: `SELECT name as region_name, code as region_code FROM regions;`,
    callback: (rows, store) => {
        store.regions = rows;
    },
};

const CitiesFetcher = {
    query_name: "CitiesFetcher",
    query: `SELECT name as city_name FROM cities LIMIT 100;`,
    callback: (rows, store) => {
        store.cities = rows;
    },
};

const AddressFetcher = {
    query_name: "AddressFetcher",
    query: `SELECT
                ci.name as city_name,
                ci.latitude as latitude,
                ci.longitude as longitude,
                r.name as region_name,
                c.name as country_name
        FROM cities as ci
        JOIN regions r ON r.id = ci.region_id
        JOIN countries c ON c.id = ci.country_id
        LIMIT 100
    ;`,
    callback: (rows, store) => {
        store.addresses = rows;
        // store = rows;
    },
};

// Export each constant individually
module.exports = {
    CategoriesFetcher,
    CountriesFetcher,
    RegionsFetcher,
    CitiesFetcher,
    AddressFetcher
}
