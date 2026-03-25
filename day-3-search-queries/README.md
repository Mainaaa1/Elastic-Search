# Week 11 – Search Technologies (Elasticsearch)

## Day 3: Search Queries (25 Mar 2026)

### Overview

Today I focused on **search queries in Elasticsearch**, learning how to retrieve and filter data using its powerful Query DSL (Domain Specific Language).

Understanding queries is essential because Elasticsearch is optimized for search operations, and different query types provide varying levels of precision, performance, and relevance scoring.

---

### What is Query DSL?

Elasticsearch uses a JSON-based **Query DSL** to define search operations.

Example:

```json
GET /products/_search
{
  "query": {
    "match": {
      "name": "laptop"
    }
  }
}
```

---

### Full-Text Queries

These queries are used for analyzed text fields.

#### 1. Match Query

Searches for documents that match a text value.

```json
{
  "query": {
    "match": {
      "name": "gaming laptop"
    }
  }
}
```

* Uses analyzers
* Supports relevance scoring

---

#### 2. Multi-Match Query

Searches across multiple fields.

```json
{
  "query": {
    "multi_match": {
      "query": "laptop",
      "fields": ["name", "description"]
    }
  }
}
```

---

### Term-Level Queries

Used for exact matches (non-analyzed fields).

#### 1. Term Query

```json
{
  "query": {
    "term": {
      "category": "electronics"
    }
  }
}
```

* No text analysis
* Exact value match

---

#### 2. Range Query

Used for numeric or date ranges.

```json
{
  "query": {
    "range": {
      "price": {
        "gte": 1000,
        "lte": 2000
      }
    }
  }
}
```

---

### Boolean Queries

Boolean queries combine multiple conditions.

```json
{
  "query": {
    "bool": {
      "must": [
        { "match": { "name": "laptop" } }
      ],
      "filter": [
        { "term": { "category": "electronics" } }
      ],
      "should": [
        { "match": { "description": "gaming" } }
      ]
    }
  }
}
```

Components:

* **must** → required conditions (affects score)
* **filter** → required but not scored (faster)
* **should** → optional (boosts relevance)
* **must_not** → exclusions

---

### Filtering vs Querying

* **Query** → calculates relevance score
* **Filter** → no scoring, faster execution

Best practice:

* Use filters for exact matches and constraints
* Use queries for full-text search

---

### Sorting Results

```json
{
  "sort": [
    { "price": "asc" }
  ]
}
```

---

### Pagination in Search

```json
{
  "from": 0,
  "size": 10
}
```

---

### Highlighting Results

Highlights matched terms in results.

```json
{
  "highlight": {
    "fields": {
      "name": {}
    }
  }
}
```

---

### Best Practices

Key takeaways:

* Use match queries for full-text search
* Use term queries for exact matches
* Combine queries using bool for flexibility
* Prefer filters for performance
* Avoid deep pagination with large offsets

---

### Reflection

Today’s learning demonstrated how powerful Elasticsearch queries are. The combination of full-text search, filtering, and scoring allows for highly flexible and performant search systems. Mastering Query DSL is essential for building real-world search features.
