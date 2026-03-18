# Pipe Dream Website – Architecture Diagram

## Overview

This project uses a simple full-stack web architecture.

## Architecture Type

Client–Server Architecture

## Diagram

[ User Browser ]
↓
[ Frontend (HTML, CSS, JavaScript) ]
↓ (HTTP Requests)
[ Backend Server (Node.js / Express) ]
↓
[ Database (MongoDB / JSON storage) ]

## Components

### Frontend

* HTML for structure
* CSS for styling
* JavaScript for interactivity
* Handles:

  * UI rendering
  * API calls
  * User interactions

### Backend

* Node.js with Express
* Handles:

  * API endpoints
  * Business logic
  * Data processing

### Database

* Stores:

  * Products
  * Users (if added later)
  * Testimonials
  * FAQ entries

## Data Flow Example

1. User clicks "View Product"
2. Frontend sends GET request to /api/products
3. Backend retrieves data from database
4. Backend returns JSON response
5. Frontend displays product data
