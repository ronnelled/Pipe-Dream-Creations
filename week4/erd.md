# Pipe Dream Website – ERD / Data Model

## Entities

### Product

* product_id (PK)
* name
* price
* description
* image_url
* category_id

### Category

* category_id (PK)
* name

### Testimonial

* testimonial_id (PK)
* customer_name
* message

### FAQ

* faq_id (PK)
* question
* answer

### NewsletterSubscriber

* subscriber_id (PK)
* email

---

## Relationships

Category → Product
(One category has many products)

Product → Testimonial
(Optional relationship if testimonials tied to products)

---

## ERD Diagram (Text Format)

Category (1) ──── (∞) Product

Product (1) ──── (∞) Testimonial

FAQ (independent)

NewsletterSubscriber (independent)
