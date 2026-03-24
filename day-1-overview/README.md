# Week 11 – Search Technologies (Elasticsearch)

## Day 1: Elasticsearch Overview (23 Mar 2026)

### Overview

Today I explored **Elasticsearch**, a distributed search and analytics engine used for full-text search, real-time data analysis, and log aggregation.

The goal was to understand how Elasticsearch works conceptually and where it fits in modern system architectures.

---

### What is Elasticsearch?

Elasticsearch is a **distributed, RESTful search engine** built on top of Apache Lucene.

It allows you to:

* Store structured and unstructured data
* Perform fast full-text searches
* Analyze large volumes of data in real time

---

### Key Use Cases

Elasticsearch is commonly used for:

* Application search (e.g., product search)
* Log and event data analysis (ELK stack)
* Autocomplete and suggestions
* Monitoring and observability

---

### Core Concepts

#### 1. Index

An **index** is similar to a database in relational systems.

Example:

```
products
users
orders
```

---

#### 2. Document

A **document** is a JSON object stored inside an index.

Example:

```json
{
  "id": 1,
  "name": "Laptop",
  "price": 1200
}
```

---

#### 3. Field

Fields are key-value pairs within a document.

Example:

* name
* price

---

#### 4. Shards

Elasticsearch distributes data across **shards**.

* Each index is split into shards
* Shards enable horizontal scaling

---

#### 5. Replicas

Replicas are copies of shards.

* Improve fault tolerance
* Increase search performance

---

### How Elasticsearch Works

Basic flow:

1. Data is indexed into Elasticsearch
2. Elasticsearch processes and stores it in inverted indexes
3. Search queries are executed across shards
4. Results are aggregated and returned

---

### Inverted Index

At the core of Elasticsearch is the **inverted index**.

Instead of storing documents directly, Elasticsearch maps terms to the documents that contain them.

Example:

```
"laptop" → [doc1, doc5]
"phone" → [doc2, doc3]
```

This makes search extremely fast.

---

### REST API Interaction

Elasticsearch exposes a RESTful API.

Example: Create an index

```
PUT /products
```

Add a document:

```
POST /products/_doc
{
  "name": "Laptop",
  "price": 1200
}
```

Search:

```
GET /products/_search
```

---

### Benefits of Elasticsearch

* Fast full-text search
* Scalable and distributed
* Schema-flexible (JSON-based)
* Real-time data indexing

---

### When to Use Elasticsearch

Use Elasticsearch when:

* You need advanced search capabilities
* You are working with large datasets
* You require real-time analytics

Avoid using it as a primary database for transactional systems.

---

### Reflection

Elasticsearch provides a powerful way to implement search and analytics in modern applications. Understanding its core concepts—indexes, documents, shards, and inverted indexes—lays the foundation for building efficient search systems.
