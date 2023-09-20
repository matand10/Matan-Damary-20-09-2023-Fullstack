-- Create the Weather database
CREATE DATABASE Weather;

-- Use the Weather database
USE Weather;

-- Create the City table
CREATE TABLE city (
    cityKey VARCHAR(20) PRIMARY KEY,
    localizedName VARCHAR(50)
);

-- Create the Weather table
CREATE TABLE weather (
    cityKey VARCHAR(20) PRIMARY KEY,
    celsiusTemp VARCHAR(20),
    weatherText VARCHAR(50)
);
