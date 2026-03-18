# Pipe Dream Website – API Contract

## Base URL

/api

---

## 1. Get All Products

GET /api/products

Response:
[
{
"product_id": 1,
"name": "Colorful Pipe Cleaners",
"price": 5.99,
"category": "Craft",
"image_url": "image.jpg"
}
]

---

## 2. Get Single Product

GET /api/products/:id

Response:
{
"product_id": 1,
"name": "Colorful Pipe Cleaners",
"price": 5.99,
"description": "Soft and flexible craft pipe cleaners",
"image_url": "image.jpg"
}

---

## 3. Get Categories

GET /api/categories

Response:
[
{ "category_id": 1, "name": "Kids" },
{ "category_id": 2, "name": "Craft" }
]

---

## 4. Submit Newsletter Signup

POST /api/newsletter

Request:
{
"email": "[user@example.com](mailto:user@example.com)"
}

Response:
{
"message": "Subscription successful"
}

---

## 5. Get FAQs

GET /api/faqs

Response:
[
{
"question": "What is your return policy?",
"answer": "Returns accepted within 30 days."
}
]

---

## 6. Submit Contact Form

POST /api/contact

Request:
{
"name": "John Doe",
"email": "[john@email.com](mailto:john@email.com)",
"message": "Hello!"
}

Response:
{
"message": "Message received"
}
