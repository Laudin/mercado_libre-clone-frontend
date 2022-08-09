# Mercado Libre Clone

This repository is a basic clone of [Mercado Libre](https://www.mercadolibre.com.ar/)

`cd client`, `npm i`, `yarn start`

`cd server`, `npm i`, `npm run start`

## Requeriments and Goals of the System

##### Functional Requeriments
- Users should be able to upload, download/view products.
- Users can perform search based on product titles.
- 

##### Non-functional Requeriments
- 

## Conciderations
- Practically, users can upload as many products as they like

## High Level System Design
At a high-level, it needs to support two scenarios, one to upload prodcts and the other to view/search products.

## Database Schema
We need to store data about users and their products. We'll be sing Postgresql.
- **User**
- **Products**
- **Categories**

## Data Size Estimation
User: Id(8 bytes)...
Products: Id(8 bytes)... Seller(8 bytes)
Categories: Name(255 bytes?)...

Each photo will be of ~3Mb

